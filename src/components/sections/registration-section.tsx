import { RegistrationForm } from "@/components/registration-form";

export function RegistrationSection() {
  return (
    <section
      id="register"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Pagpapatala
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Punan ang form sa ibaba para makasali.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg">
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}
