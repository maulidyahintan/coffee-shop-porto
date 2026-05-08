"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { menuItems, type MenuItem } from "@/lib/data/menu-items";
import { branches } from "@/lib/data/branches";
import { Minus, Plus, ShoppingCart, MessageCircle } from "lucide-react";

type MenuCategory = "all" | MenuItem["category"];

const categoryLabels: Record<MenuCategory, string> = {
  all: "Semua",
  espresso: "Espresso",
  "manual-brew": "Manual Brew",
  signature: "Signature",
  "non-coffee": "Non Coffee",
  food: "Food",
};

const orderWhatsAppNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_ORDER_NUMBER ?? "6281234567890";

const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function formatRupiah(value: number) {
  return currencyFormatter.format(value);
}

interface DigitalMenuOrderProps {
  branchSlug?: string;
  hideBranchSelector?: boolean;
  sectionId?: string;
  title?: string;
}

export function DigitalMenuOrder({
  branchSlug,
  hideBranchSelector = false,
  sectionId,
  title = "Menu Digital",
}: DigitalMenuOrderProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("all");
  const [selectedBranchSlug, setSelectedBranchSlug] = useState(
    branchSlug ?? branches[0]?.slug ?? ""
  );
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [itemNotes, setItemNotes] = useState<Record<string, string>>({});
  const [showPaymentNotice, setShowPaymentNotice] = useState(false);

  const selectedBranch = useMemo(() => {
    return branches.find((branch) => branch.slug === selectedBranchSlug);
  }, [selectedBranchSlug]);

  const availableMenuItems = useMemo(() => {
    if (!selectedBranch) {
      return menuItems;
    }

    return menuItems.filter((item) => selectedBranch.menuItemIds.includes(item.id));
  }, [selectedBranch]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return availableMenuItems;
    }
    return availableMenuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, availableMenuItems]);

  const selectedItems = useMemo(() => {
    return availableMenuItems
      .map((item) => {
        const quantity = quantities[item.id] ?? 0;
        return {
          ...item,
          quantity,
          lineTotal: quantity * item.price,
        };
      })
      .filter((item) => item.quantity > 0);
  }, [availableMenuItems, quantities]);

  const totalItems = useMemo(() => {
    return selectedItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [selectedItems]);

  const subtotal = useMemo(() => {
    return selectedItems.reduce((sum, item) => sum + item.lineTotal, 0);
  }, [selectedItems]);

  const branchWhatsAppNumber = selectedBranch?.whatsapp ?? orderWhatsAppNumber;

  const whatsappUrl = useMemo(() => {
    if (selectedItems.length === 0) {
      return "#";
    }

    const orderLines = selectedItems.map(
      (item) => {
        const note = itemNotes[item.id]?.trim();
        return note
          ? `- ${item.name} x${item.quantity} = ${formatRupiah(item.lineTotal)} | Note: ${note}`
          : `- ${item.name} x${item.quantity} = ${formatRupiah(item.lineTotal)}`;
      }
    );

    const messageParts = [
      "Halo, saya ingin memesan menu berikut:",
      "",
      ...orderLines,
      "",
      `Total item: ${totalItems}`,
      `Total bayar: ${formatRupiah(subtotal)}`,
      `Cabang: ${selectedBranch?.name ?? "-"}`,
      `Nama: ${customerName.trim() || "-"}`,
      `Nomor meja: ${tableNumber.trim() || "-"}`,
      `Catatan: ${notes.trim() || "-"}`,
      "Pembayaran: manual di kasir",
    ];

    const text = encodeURIComponent(messageParts.join("\n"));
    return `https://wa.me/${branchWhatsAppNumber}?text=${text}`;
  }, [
    branchWhatsAppNumber,
    customerName,
    itemNotes,
    notes,
    selectedBranch?.name,
    selectedItems,
    subtotal,
    tableNumber,
    totalItems,
  ]);

  const sendDisabled = selectedItems.length === 0;

  function handleSendOrder() {
    if (sendDisabled) {
      return;
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setShowPaymentNotice(true);
  }

  function increaseQty(id: string) {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1,
    }));
  }

  function updateItemNote(id: string, value: string) {
    setItemNotes((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function decreaseQty(id: string) {
    setQuantities((prev) => {
      const current = prev[id] ?? 0;
      if (current <= 1) {
        const rest = { ...prev };
        delete rest[id];
        return rest;
      }
      return {
        ...prev,
        [id]: current - 1,
      };
    });
  }

  return (
    <section id={sectionId} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-4">
            {title}
          </h2>
          <p className="font-lora text-lg md:text-xl text-text-muted max-w-3xl mx-auto">
            Pilih menu favorit Anda, total biaya dihitung otomatis, lalu kirim
            pesanan langsung ke WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8">
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {(Object.keys(categoryLabels) as MenuCategory[]).map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-coffee-caramel text-coffee-dark"
                        : "bg-bg-primary text-coffee-dark hover:bg-coffee-cream"
                    }`}
                  >
                    {categoryLabels[category]}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => {
                const qty = quantities[item.id] ?? 0;
                const itemNote = itemNotes[item.id] ?? "";
                return (
                  <div
                    key={item.id}
                    className="border border-coffee-medium/20 rounded-lg p-4 bg-bg-primary"
                  >
                    <div className="relative h-40 rounded-md overflow-hidden mb-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <h3 className="font-bold text-coffee-dark text-lg mb-1">{item.name}</h3>
                    <p className="text-sm text-text-muted mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-coffee-caramel">
                        {formatRupiah(item.price)}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => decreaseQty(item.id)}
                          className="w-8 h-8 rounded-full border border-coffee-medium/30 text-coffee-dark hover:bg-coffee-cream disabled:opacity-50"
                          disabled={qty === 0}
                          aria-label={`Kurangi ${item.name}`}
                        >
                          <Minus className="h-4 w-4 mx-auto" />
                        </button>
                        <span className="w-8 text-center font-semibold text-coffee-dark">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => increaseQty(item.id)}
                          className="w-8 h-8 rounded-full border border-coffee-medium/30 text-coffee-dark hover:bg-coffee-cream"
                          aria-label={`Tambah ${item.name}`}
                        >
                          <Plus className="h-4 w-4 mx-auto" />
                        </button>
                      </div>
                    </div>

                    {qty > 0 && (
                      <div className="mt-3">
                        <label
                          htmlFor={`item-note-${item.id}`}
                          className="block text-xs font-semibold text-coffee-dark mb-1"
                        >
                          Note untuk item ini
                        </label>
                        <input
                          id={`item-note-${item.id}`}
                          type="text"
                          value={itemNote}
                          onChange={(event) =>
                            updateItemNote(item.id, event.target.value)
                          }
                          placeholder="Contoh: less sugar, tanpa es"
                          className="w-full rounded-md border border-coffee-medium/30 px-3 py-2 bg-white text-coffee-dark text-sm"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="bg-bg-primary border border-coffee-medium/20 rounded-lg p-6 h-fit xl:sticky xl:top-24">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="h-5 w-5 text-coffee-caramel" />
              <h3 className="font-playfair text-2xl font-bold text-coffee-dark">
                Ringkasan Pesanan
              </h3>
            </div>

            <div className="space-y-4 mb-4">
              {!hideBranchSelector && (
                <div>
                  <label
                    htmlFor="branch"
                    className="block text-sm font-semibold text-coffee-dark mb-1"
                  >
                    Pilih Cabang
                  </label>
                  <select
                    id="branch"
                    value={selectedBranchSlug}
                    onChange={(event) => setSelectedBranchSlug(event.target.value)}
                    className="w-full rounded-md border border-coffee-medium/30 px-3 py-2 bg-white text-coffee-dark"
                  >
                    {branches.map((branch) => (
                      <option key={branch.id} value={branch.slug}>
                        {branch.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label
                  htmlFor="customerName"
                  className="block text-sm font-semibold text-coffee-dark mb-1"
                >
                  Nama Pemesan
                </label>
                <input
                  id="customerName"
                  type="text"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  placeholder="Contoh: Budi"
                  className="w-full rounded-md border border-coffee-medium/30 px-3 py-2 bg-white text-coffee-dark"
                />
              </div>

              <div>
                <label
                  htmlFor="tableNumber"
                  className="block text-sm font-semibold text-coffee-dark mb-1"
                >
                  Nomor Meja
                </label>
                <input
                  id="tableNumber"
                  type="text"
                  value={tableNumber}
                  onChange={(event) => setTableNumber(event.target.value)}
                  placeholder="Contoh: A12"
                  className="w-full rounded-md border border-coffee-medium/30 px-3 py-2 bg-white text-coffee-dark"
                />
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-semibold text-coffee-dark mb-1"
                >
                  Catatan
                </label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Contoh: tanpa gula, pickup jam 15.00"
                  rows={3}
                  className="w-full rounded-md border border-coffee-medium/30 px-3 py-2 bg-white text-coffee-dark"
                />
              </div>
            </div>

            <div className="border-t border-coffee-medium/20 pt-4 mb-4 space-y-2">
              {selectedItems.length === 0 ? (
                <p className="text-sm text-text-muted">Belum ada item dipilih.</p>
              ) : (
                selectedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between text-sm gap-3"
                  >
                    <span className="text-text-muted">
                      {item.name} x{item.quantity}
                      {itemNotes[item.id]?.trim() ? (
                        <span className="block text-xs text-coffee-dark/80 mt-0.5">
                          Note: {itemNotes[item.id].trim()}
                        </span>
                      ) : null}
                    </span>
                    <span className="font-semibold text-coffee-dark">
                      {formatRupiah(item.lineTotal)}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-coffee-dark">Total Bayar</span>
              <span className="text-xl font-bold text-coffee-caramel">
                {formatRupiah(subtotal)}
              </span>
            </div>

            <button
              type="button"
              onClick={handleSendOrder}
              disabled={sendDisabled}
              className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md font-semibold transition-colors ${
                sendDisabled
                  ? "bg-coffee-medium/30 text-text-muted pointer-events-none"
                  : "bg-[#25D366] text-white hover:bg-[#1ebe5d]"
              }`}
            >
              <MessageCircle className="h-5 w-5" />
              Kirim Pesanan ke WhatsApp
            </button>

            {showPaymentNotice && (
              <p className="text-sm text-coffee-dark mt-3 bg-coffee-caramel/20 border border-coffee-caramel/40 rounded-md p-3">
                Pesanan sudah diarahkan ke WhatsApp. Pembayaran tetap manual
                lewat kasir.
              </p>
            )}

            <p className="text-xs text-text-muted mt-3">
              Nomor WA tujuan otomatis mengikuti cabang yang dipilih.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
