"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "ホーム", href: "/" },
    { name: "物件情報", href: "/properties" },
    { name: "会社概要", href: "/about" },
    { name: "お問い合わせ", href: "/contact" },
  ];

  return (
    <header className="fixed w-full bg-[#FFFFFF]/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Building2 className="h-8 w-8 text-[#1D4ED8] group-hover:text-[#3B82F6] transition-colors" />
            <span className="text-2xl font-bold text-[#1F2937] tracking-tight">アイビス不動産</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#1F2937] hover:text-[#1D4ED8] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#1D4ED8] hover:bg-[#3B82F6] text-[#FFFFFF] px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
            >
              来店予約
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1F2937]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-[#1F2937] hover:text-[#1D4ED8] hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
