import { Button } from "@/components/ui/button"

import Imagem from "@/assets/logo.svg"

export function Header() {
    return (
        <div className="flex justify-between items-center">
            <img src={Imagem} alt='Logo' className='imagem cursor-pointer'/>
                <div className="flex gap-8">
                <p className="text-white hover:text-green-500 hover:underline cursor-pointer">Why Us</p>
                <p className="text-white hover:text-green-500 hover:underline cursor-pointer">Services</p>
                <p className="text-white hover:text-green-500 hover:underline cursor-pointer">Our Process</p>
                <p className="text-white hover:text-green-500 hover:underline cursor-pointer">Payments</p>
                <p className="text-white hover:text-green-500 hover:underline cursor-pointer">FAQs</p>
                </div>
            <Button variant="outline" className="text-green-600 hover:text-green-700 bg-transparent hover:bg-green-500/5 border-green-600 hover:border-green-700 border-2 shadow-none rounded-full">Contact</Button>
        </div>
    )
  }