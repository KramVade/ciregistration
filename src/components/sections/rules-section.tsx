import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Gift, Snowflake } from "lucide-react";
import { OrnamentIcon } from "@/components/icons";

const rules = [
  {
    icon: <OrnamentIcon className="h-5 w-5 mr-3 text-primary" />,
    title: "Embrace the Spirit of Giving",
    content:
      "All attendees are encouraged to participate in our Secret Santa exchange. The gift limit is $20. Be creative and thoughtful!",
  },
  {
    icon: <Snowflake className="h-5 w-5 mr-3 text-accent" />,
    title: "Appropriate Attire Required",
    content:
      "Festive wear is mandatory. This includes, but is not limited to, ugly Christmas sweaters, reindeer antlers, and elf hats. Bonus points for jingle bells.",
  },
  {
    icon: <Gift className="h-5 w-5 mr-3 text-red-500" />,
    title: "Caroling is Compulsory",
    content:
      "Participation in daily caroling sessions is required. A songbook will be provided. Enthusiasm is graded.",
  },
  {
    icon: <OrnamentIcon className="h-5 w-5 mr-3 text-primary" />,
    title: "No Grinches Allowed",
    content:
      "A positive and festive attitude must be maintained at all times. Any displays of cynicism or bah-humbuggery will result in immediate expulsion to the 'Naughty List'.",
  },
];

export function RulesSection() {
  return (
    <section id="rules" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Institute Regulations
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A few simple rules to ensure everyone has a holly, jolly time.
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            {rules.map((rule, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-medium font-headline hover:no-underline">
                  <div className="flex items-center">
                    {rule.icon}
                    {rule.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {rule.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
