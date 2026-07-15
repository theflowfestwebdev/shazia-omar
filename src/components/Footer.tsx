import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Let&apos;s connect
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/50">
              For yoga classes, corporate workshops, literary inquiries, or
              Flow Fest collaborations — reach out and say hello.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block font-display text-xl text-white transition-colors hover:text-white/70 md:text-2xl"
            >
              {site.email}
            </a>
          </div>

          <div className="flex flex-col justify-end gap-6 md:items-end">
            <div className="flex flex-wrap gap-6">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] text-white/40 uppercase transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] text-white/40 uppercase transition-colors hover:text-white"
              >
                YouTube
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] text-white/40 uppercase transition-colors hover:text-white"
              >
                Facebook
              </a>
              <a
                href={site.social.flowFest}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] text-white/40 uppercase transition-colors hover:text-white"
              >
                The Flow Fest
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-display text-sm tracking-[0.2em] text-white/30 italic">
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
