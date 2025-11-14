import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-background");

  return (
    <section id="hero" className="relative h-[calc(100vh-4rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <Button asChild size="lg" className="mt-8">
          <Link href="#register">Begin Your Festive Journey</Link>
        </Button>
      </div>
    </section>
  );
}
