import Image from "next/image";
import {aboutHighlights} from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md overflow-hidden">
              <Image
                src="/images/about/portrait.jpg"
                alt="Shazia Omar portrait"
                fill
                className="object-cover object-top grayscale"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            <div className="absolute -right-4 -bottom-4 hidden h-32 w-32 border border-white/20 md:block" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs tracking-[0.4em] text-white/40 uppercase">
              About me
            </p>
            <h2 className="font-display text-4xl text-white md:text-5xl">
              I am a warrior
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-white/60">
              <p>
                Shazia Omar is a Bangladeshi novelist, social psychologist,
                development professional, and certified yoga instructor. She
                completed her undergraduate studies at Dartmouth College and her
                Master&apos;s in Social Psychology at the London School of
                Economics.
              </p>
              <p>
                As a writer, she has authored novels, children&apos;s books, a
                mind-body-spirit guide, and curated anthologies. As a yogini,
                she has taught Ashtanga yoga and pilates for over fifteen years.
                As a founder, she leads{" "}
                <span className="text-white">The Flow Fest</span> — a platform
                for wellness, movement, creativity, and healing.
              </p>
              <p className="font-display text-xl text-white/80 italic">
                Thank you for visiting my universe.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutHighlights.map(item => (
            <article
              key={item.title}
              className="group overflow-hidden border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-[0.3]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm tracking-[0.15em] text-white uppercase">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/45">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
