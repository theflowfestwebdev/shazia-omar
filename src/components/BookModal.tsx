"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { BookLinkGroup } from "@/lib/book-links";

type Book = {
  slug: string;
  title: string;
  year: string;
  publisher: string;
  image: string;
  description: string;
};

type BookModalProps = {
  book: Book;
  linkGroups: BookLinkGroup[];
  onClose: () => void;
};

export function BookModal({ book, linkGroups, onClose }: BookModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-modal-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      <div
        ref={dialogRef}
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl sm:max-h-[85vh]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 md:px-8">
          <div className="min-w-0">
            <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
              {book.year} · {book.publisher}
            </p>
            <h2
              id="book-modal-title"
              className="font-display mt-1 text-2xl text-white md:text-3xl"
            >
              {book.title}
            </h2>
            <p className="mt-2 text-sm text-white/50">{book.description}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-8 overflow-y-auto px-6 py-6 md:flex-row md:px-8 md:py-8">
          <div className="relative mx-auto aspect-[2/3] w-36 shrink-0 overflow-hidden border border-white/10 bg-neutral-900 md:mx-0 md:w-44">
            <Image
              src={book.image}
              alt={`${book.title} cover`}
              fill
              className="object-cover grayscale"
              sizes="176px"
            />
          </div>

          <div className="min-w-0 flex-1 space-y-8">
            {linkGroups.length === 0 ? (
              <p className="text-sm text-white/45">
                No links available for this title yet.
              </p>
            ) : (
              linkGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="mb-4 text-xs tracking-[0.25em] text-white/40 uppercase">
                    {group.label}
                  </h3>
                  <ul className="space-y-2">
                    {group.links.map((link) => (
                      <li key={`${link.href}-${link.text}`}>
                        <a
                          href={link.href}
                          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={
                            link.href.startsWith("mailto:")
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="group flex items-start gap-3 border border-transparent py-2 text-sm text-white/65 transition-colors hover:border-white/10 hover:bg-white/[0.03] hover:px-3 hover:text-white"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-px w-3 shrink-0 bg-white/25 transition-all group-hover:w-5 group-hover:bg-white/60"
                          />
                          <span>{link.text}</span>
                          {!link.href.startsWith("mailto:") && (
                            <span
                              aria-hidden="true"
                              className="ml-auto shrink-0 text-white/25 transition-colors group-hover:text-white/60"
                            >
                              ↗
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
