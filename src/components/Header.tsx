"use client";

import {useEffect, useState} from "react";
import {navItems, site} from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="group flex flex-col">
          <span className="font-display text-lg tracking-[0.2em] text-white uppercase md:text-xl">
            {site.name}
          </span>
          <span className="text-[10px] tracking-[0.35em] text-white/40 uppercase transition-colors group-hover:text-white/60">
            {site.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.2em] text-white/50 uppercase transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-white transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-white transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl tracking-[0.15em] text-white/80 uppercase transition-colors hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
