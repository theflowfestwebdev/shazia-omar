import Image from "next/image";
import {site} from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/cover.jpg"
          alt="Shazia Omar"
          fill
          priority
          className="object-cover object-center grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-6 pb-24 pt-32 md:px-10 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs tracking-[0.4em] text-white/50 uppercase">
              Novelist · Social Psychologist · Yogini
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {site.name}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
              Bangladeshi novelist, social psychologist, and yoga instructor.
              Founder of{" "}
              <a
                href={site.social.flowFest}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                The Flow Fest
              </a>
              .{" "}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#writing"
                className="inline-flex items-center border border-white/30 px-8 py-3 text-xs tracking-[0.25em] text-white uppercase transition-all hover:border-white hover:bg-white hover:text-black"
              >
                Explore Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 text-xs tracking-[0.25em] text-white/60 uppercase transition-colors hover:text-white"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hidden w-48 shrink-0 lg:block">
            <div className="relative aspect-[343/500] overflow-hidden border border-white/10">
              <Image
                src="/images/hero/home.jpg"
                alt="Home is where the heart is"
                fill
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                sizes="192px"
              />
            </div>
            <p className="mt-3 text-center text-[10px] tracking-[0.3em] text-white/40 uppercase">
              home is where the heart is
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">
              Scroll
            </span>
            <span className="h-12 w-px animate-pulse bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
