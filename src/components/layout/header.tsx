import Link from "next/link";
import { Menu } from "lucide-react";

import { OrnamentIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#rules", label: "Rules" },
  { href: "#register", label: "Register" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <OrnamentIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold inline-block">
            Christmas Institute
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:flex" variant="default">
            <Link href="/login">Officer Login</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px]">
                <div className="flex flex-col h-full pt-8">
                  <Link
                    href="/"
                    className="mb-8 flex items-center space-x-2 self-center"
                  >
                    <OrnamentIcon className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-bold">
                      Christmas Institute
                    </span>
                  </Link>
                  <nav className="flex flex-col items-center space-y-6 text-lg font-medium">
                    {navLinks.map((link) => (
                      <SheetTrigger asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="transition-colors hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      </SheetTrigger>
                    ))}
                     <SheetTrigger asChild>
                        <Link
                          href="/login"
                          className="transition-colors hover:text-primary"
                        >
                          Officer Login
                        </Link>
                      </SheetTrigger>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
