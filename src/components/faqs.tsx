import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function Faqs() {
    return (
        <div className="flex flex-col gap-16 items-center" style={{paddingInline:'10%'}}>
            <h2 className="text-neutral-50 text-4xl font-bold text-center">FAQs</h2>
            <Accordion type="single" collapsible className=" w-4/5">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-neutral-50 font-bold text-2xl">What credit score do I need to apply for a credit card?</AccordionTrigger>
                    <AccordionContent className="text-neutral-400 font-normal text-base">
                        The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-neutral-50 font-bold text-2xl">How can I apply for a credit card online?</AccordionTrigger>
                    <AccordionContent className="text-neutral-400 font-normal text-base">
                        The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-neutral-50 font-bold text-2xl">How long does it take to receive the credit card once approved?</AccordionTrigger>
                    <AccordionContent className="text-neutral-400 font-normal text-base">
                        The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-neutral-50 font-bold text-2xl">How can I check my credit card balance and transactions?</AccordionTrigger>
                    <AccordionContent className="text-neutral-400 font-normal text-base">
                        The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-neutral-50 font-bold text-2xl">What should I do if my credit card is lost or stolen?</AccordionTrigger>
                    <AccordionContent className="text-neutral-400 font-normal text-base">
                        The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className="text-neutral-50 font-bold text-2xl">Is my credit card information secure?</AccordionTrigger>
                    <AccordionContent className="text-neutral-400 font-normal text-base">
                        The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}