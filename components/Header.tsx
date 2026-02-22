"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Croissant } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'ホーム' },
    { href: '/products', label: 'メニュー' },
    { href: '/about', label: '店舗情報' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#E8D5B5] shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 text-[#D35400] hover:text-[#D35400]/80 transition-colors">
            <Croissant size={32} />
            <span className="font-bold text-xl tracking-tight text-[#4A3A31]">GitHub Push Test</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#D35400] relative group ${pathname === link.href ? 'text-[#D35400]' : 'text-[#4A3A31]'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#D35400] transform origin-left transition-transform duration-300 ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#4A3A31] hover:text-[#D35400] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#E8D5B5]">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-xl text-base font-medium ${pathname === link.href ? 'bg-[#E8D5B5]/40 text-[#D35400]' : 'text-[#4A3A31] hover:bg-[#E8D5B5]/20 hover:text-[#D35400]'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
