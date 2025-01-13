import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Imagem from "@/assets/section-one.svg"

export function SectionOne() {
    return (
        <div className="grid grid-cols-2 gap-8" style={{paddingInline:'10%'}}>
            <div className="flex flex-col gap-8 w-10/12">
                <h2 className="text-neutral-50 text-4xl font-bold">Design your personalized credit card.</h2>
                <p className="text-neutral-400 text-base">You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary</p>
                <div>
                    <Button size="lg" className="font-normal text-neutral-50 bg-primary hover:text-neutral-50/85 hover:bg-primary/85 shadow-none rounded-full">Create New Card<ArrowRight/></Button>
                </div>
            </div>
            <div>
                <img src={Imagem} alt='Logo' className='imagem'/>
            </div>    
        </div>
    )
}