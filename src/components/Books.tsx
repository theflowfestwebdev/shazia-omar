import Image from "next/image";
import { books } from "@/lib/content";

export function Books() {
  return (
    <section id="writing" className="border-t border-white/10 bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 max-w-xl">
          <p className="mb-3 text-xs tracking-[0.4em] text-white/40 uppercase">
            Ink
          </p>
          <h2 className="font-display text-4xl text-white md:text-5xl">
            Stories &amp; Books
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            From debut fiction to children&apos;s literature and curated
            anthologies — novels published by Penguin India, Bloomsbury, and
            Guba Books. Also author of the play{" "}
            <em className="text-white/80">Karma Coffee</em> and contributor to
            The Daily Star, Bengal Lights, and Himal.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <article
              key={book.title}
              className="group flex flex-col border border-white/10 bg-black/40 transition-all hover:border-white/25"
            >
              <div className="relative aspect-[2/3] overflow-hidden bg-neutral-900">
                <Image
                  src={book.image}
                  alt={`${book.title} cover`}
                  fill
                  className="object-cover object-center grayscale transition-all duration-500 group-hover:grayscale-[0.2] group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="text-[10px] tracking-[0.25em] text-white/35 uppercase">
                    {book.year}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] text-white/35 uppercase">
                    {book.publisher}
                  </span>
                </div>
                <h3 className="font-display text-xl text-white">{book.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
                  {book.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
