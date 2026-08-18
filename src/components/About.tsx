import Image from "next/image";
import {aboutHighlights, site} from "@/lib/content";

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
              "I am a warrior"
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-white/60">
              <p>
                Shazia Omar writes fiction shaped by everything else she's
                lived. A social psychologist by training (she completed her
                undergraduate studies at Dartmouth College and a Master's in
                Social Psychology at the London School of Economics), she has
                spent years studying how people cope, connect, and survive, work
                that later carried into grassroots development and advocacy.
              </p>
              <p>
                That same attention shows up in her novels: in the addiction and
                redemption of Like a Diamond in the Sky, in the historical power
                plays of Dark Diamond, in the children's stories written for the
                girls she works alongside. Fifteen years of teaching Ashtanga
                yoga taught her to sit with the body's own kind of knowledge; a
                decade of development work, on poverty, migration, and gender,
                taught her whose stories don't get told. Both find their way
                onto the page.
              </p>
              <p>
                She now channels all of it into{" "}
                <a
                  href={"https://theflowfest.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  The Flow Fest
                </a>
                , a platform for wellness, movement, creativity, and healing.
              </p>
              <p className="font-display text-xl text-white/80 italic">
                "Thank you for visiting my universe."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-6 grid-cols-2 lg:grid-cols-4">
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
