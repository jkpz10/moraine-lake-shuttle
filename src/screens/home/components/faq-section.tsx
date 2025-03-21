import { faqData } from '@/data/faq-data';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-24 px-4 md:px-6 bg-gradient-to-b from-[#FEFCFB] to-[#F7F7F7]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0A1128]">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-[#034078]/80 mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our Moraine Lake shuttle
          service
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#034078]/10 rounded-lg overflow-hidden bg-white shadow-sm transition-all hover:shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-[#0A1128] hover:text-[#034078] hover:bg-[#FEFCFB] transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-[#0A1128]/80 text-base">
                  <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
