import Image from "next/image";
import { yogaOfferings } from "@/lib/content";

const yogaImages = [
  { src: "/images/yoga/collage.jpg", alt: "Yoga practice collage" },
  { src: "/images/yoga/practice.jpg", alt: "Ashtanga yoga practice" },
  { src: "/images/yoga/lions-breath.jpg", alt: "Lion's breath pranayama" },
  { src: "/images/yoga/samahita.jpg", alt: "Samahita retreat crew" },
];

export function Yoga() {
  return (
    <section id="yoga" className="border-t border-white/10 bg-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-xs tracking-[0.4em] text-white/40 uppercase">
              Yogilates
            </p>
            <h2 className="font-display text-4xl text-white md:text-5xl">
              Lightness of body,
              <br />
              freedom of mind
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/55">
              Certified Ashtanga yoga and pilates instructor. Teaching regular
              classes in Dhaka, conducting workshops on yoga, mindfulness and
              well-being, and leading retreats around the world.
            </p>

            <div className="mt-10 space-y-6">
              {yogaOfferings.map((item) => (
                <div
                  key={item.title}
                  className="border-l border-white/20 pl-6 transition-colors hover:border-white/50"
                >
                  <h3 className="text-sm tracking-[0.2em] text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {yogaImages.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden border border-white/10 ${
                  i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-[0.2] hover:scale-105"
                  sizes={
                    i === 0
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 1024px) 50vw, 25vw"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
