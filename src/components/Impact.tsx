import Image from "next/image";
import {impactAreas} from "@/lib/content";

export function Impact() {
  return (
    <section
      id="impact"
      className="border-t border-white/10 bg-neutral-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[16/10] overflow-hidden border border-white/10">
            <Image
              src="/images/impact/kids.jpg"
              alt="Children in development program"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs tracking-[0.4em] text-white/40 uppercase">
              Advocacy
            </p>
            <h2 className="font-display text-4xl text-white md:text-5xl">
              Manifesto for the Extreme Poor
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/55">
              Shazia's fiction has always been rooted in the lives of the
              extreme poor, with her development work being where those stories
              are sourced. Across social protection, digital inclusion,
              migration, gender equity, and climate resilience, she writes to
              give voice to the most vulnerable, on the page and off it.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {impactAreas.map(area => (
                <li
                  key={area}
                  className="flex items-start gap-3 text-sm text-white/50"
                >
                  <span className="mt-2 h-px w-4 shrink-0 bg-white/30" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
