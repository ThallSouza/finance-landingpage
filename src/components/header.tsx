import { Button } from "@/components/ui/button"

import Imagem from "@/assets/logo.svg"

export function Header() {
    return (
        <div className="flex justify-between items-center">
            <img src={Imagem} alt='Logo' className='imagem cursor-pointer'/>
                <div className="flex gap-8">
                <p className="text-white hover:text-primary hover:underline cursor-pointer">Why Us</p>
                <p className="text-white hover:text-primary hover:underline cursor-pointer">Services</p>
                <p className="text-white hover:text-primary hover:underline cursor-pointer">Our Process</p>
                <p className="text-white hover:text-primary hover:underline cursor-pointer">Payments</p>
                <p className="text-white hover:text-primary hover:underline cursor-pointer">FAQs</p>
                </div>
            <Button size="lg" variant="outline" className="text-primary hover:text-primary/60 bg-transparent hover:bg-primary/5 border-primary hover:border-primary/60 border-2 shadow-none rounded-full">Contact</Button>
        </div>
    )
  }