import { site } from "@/lib/content";

export function FlowFest() {
  return (
    <section
      id="flow-fest"
      className="relative overflow-hidden border-t border-white/10 py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs tracking-[0.4em] text-white/40 uppercase">
            Founder &amp; CEO
          </p>
          <h2 className="font-display text-4xl text-white md:text-6xl">
            The Flow Fest
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            The world&apos;s largest celebration of wellness, movement,
            creativity, and healing. Shazia founded The Flow Fest to bring
            together communities who care about holistic wellbeing — creating
            transformative experiences through mindful movement, conscious
            nutrition, and authentic community connection.
          </p>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {[
              {
                title: "Movement",
                text: "Yoga, meditation, and mindful experiences that bring community and wellbeing together.",
              },
              {
                title: "Creativity",
                text: "Spaces designed to nurture your journey toward holistic well-being and intentional living.",
              },
              {
                title: "Healing",
                text: "Summer Flow and curated programs that celebrate balance, renewal, and conscious connection.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20"
              >
                <h3 className="text-xs tracking-[0.25em] text-white uppercase">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>

          <a
            href={site.social.flowFest}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 border border-white/30 px-10 py-4 text-xs tracking-[0.25em] text-white uppercase transition-all hover:border-white hover:bg-white hover:text-black"
          >
            Visit The Flow Fest
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
