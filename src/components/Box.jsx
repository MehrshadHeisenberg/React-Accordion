import IconStar from "@/svg/IconStar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionContent = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    description:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: "Is Frontend Mentor free?",
    description:
      "Yes it's mostly free but there are also some premium features that I suggest you try",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    description: "Yes absolutely! Frontend Mentor has no problem with this",
  },
  {
    title: "How can I get help if I'm stuck on a challenge?",
    description:
      "The great community! There are a lot of people there waiting to answer your questions",
  },
];

function Box() {
  return (
    <div className="p-10 z-10 bg-white  shadow-xl rounded-lg text-dark-purple w-[90%] sm:w-[36rem]">
      <div className="flex items-center gap-5 mb-8 font-worksans">
        <IconStar className="w-6 h-6 lg:w-10 lg:h-10" />
        <h1 className="lg:text-6xl text-3xl font-bold">FAQs</h1>
      </div>
      <Accordion type="single" collapsible className="w-[full]">
        {accordionContent.map((content) => (
          <AccordionItem
            value={`item-${content.title}`}
            key={content.title}
            className="font-bold border-b-light-pink"
          >
            <AccordionTrigger className="font-semibold text-sm md:text-lg">
              {content.title}
            </AccordionTrigger>
            <AccordionContent className="text-[10px] md:text-sm font-bold opacity-40">
              {content.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Box;
