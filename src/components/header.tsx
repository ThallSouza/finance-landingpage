import { Button } from "@/components/ui/button"

import Imagem from "@/assets/logo.svg"

export function Header() {
    return (
        <div className="flex justify-between items-center" style={{paddingInline:'10%'}}>
            <img src={Imagem} alt='Logo' className='imagem cursor-pointer'/>
                <div className="flex gap-8">
                <p className="text-white hover:text-primary cursor-pointer">Why Us</p>
                <p className="text-white hover:text-primary cursor-pointer">Services</p>
                <p className="text-white hover:text-primary cursor-pointer">Our Process</p>
                <p className="text-white hover:text-primary cursor-pointer">Payments</p>
                <p className="text-white hover:text-primary cursor-pointer">FAQs</p>
                </div>
                <Button size="lg" className="font-normal text-neutral-50 bg-primary hover:text-neutral-50/85 hover:bg-primary/85 shadow-none rounded-full">Contact</Button>
        </div>
    )
  }