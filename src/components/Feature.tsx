import Image from "next/image";

export function Feature() {
  return (
    <section
      id="launch"
      className="border-t border-white/10 bg-neutral-950 py-12 md:py-16"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Cover */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md overflow-hidden bg-neutral-900">
              <Image
                src="/images/books/beingwater.jpg"
                alt="Being Water cover"
                fill
                className="object-cover object-center transition-all duration-500 hover:grayscale-[0.2]"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            <div className="absolute -right-4 -bottom-4 hidden h-32 w-32 border border-white/20 md:block" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs tracking-[0.4em] text-white/40 uppercase">
              New release
            </p>
            <h2 className="font-display text-4xl text-white md:text-5xl">
              Being Water
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              Shazia&apos;s newest work, launching this October — an evening of
              literature, reflection, and celebration to mark its release.
            </p>

            <dl className="mt-10 space-y-4 border-t border-white/10 pt-8">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[10px] tracking-[0.25em] text-white/35 uppercase">
                  Launch
                </dt>
                <dd className="text-sm text-white/70">
                  Saturday, Oct 3 &middot; 5pm
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[10px] tracking-[0.25em] text-white/35 uppercase">
                  Venue
                </dt>
                <dd className="text-sm text-white/70">
                  Bookworm, Shahabuddin Park
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[10px] tracking-[0.25em] text-white/35 uppercase">
                  Publisher
                </dt>
                <dd className="text-sm text-white/70">
                  2026 &middot; Om Books
                </dd>
              </div>
            </dl>

            {/* <a
              href="https://theflowfest.com/beingwater"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center border border-white/30 px-8 py-3 text-xs tracking-[0.25em] text-white uppercase transition-all hover:border-white hover:bg-white hover:text-black"
            >
              <span>Register to attend</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
