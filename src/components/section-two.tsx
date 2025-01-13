import { Button } from "@/components/ui/button"
import Imagem from "@/assets/section-two.svg"

export function SectionTwo() {
    return (
        <div className="grid grid-cols-2 gap-8" style={{paddingInline:'10%'}}>
            <div>
                <img src={Imagem} alt='Logo' className='imagem'/>
            </div>    
            <div className="flex flex-col gap-8 w-10/12">
                <h2 className="text-neutral-50 text-4xl font-bold">Find the Perfect Credit Card for You</h2>
                <p className="text-neutral-400 text-base">Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle. Whether you seek cashback rewards, travel perks, or building credit, we have the perfect credit card waiting for you. Unleash the possibilities and find the credit card that fits your unique goals and aspirations.</p>
                <div>
                    <Button size="lg" className="font-normal text-neutral-50 bg-primary hover:text-neutral-50/85 hover:bg-primary/85 shadow-none rounded-full">Learn More</Button>
                </div>
            </div>
        </div>
    )
}