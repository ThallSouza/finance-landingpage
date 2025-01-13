import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import Imagem from "@/assets/Image Banner.svg"
import Foto1 from "@/assets/foto-1.png"
import Foto2 from "@/assets/foto-2.png"
import Foto3 from "@/assets/foto-3.png"

export function Banner() {
    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-8 w-10/12">
                <h1 className="text-neutral-50 scroll-m-20 text-5xl font-bold  lg:text-5xl">Discover the Perfect Credit Card for You</h1>
                <p className="text-neutral-400 text-lg leading-6">Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.</p>
                <Button size="lg" className="font-normal text-neutral-50 bg-primary hover:text-neutral-50/85 hover:bg-primary/85 shadow-none rounded-full">Get Started<ArrowRight/></Button>
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex -space-x-4">
                        <Avatar className="w-12 h-12 border-2 border-white">
                            <AvatarImage src={Foto1}/>
                            <AvatarFallback/>
                        </Avatar>
                        <Avatar className="w-12 h-12 border-2 border-white">
                            <AvatarImage src={Foto2}/>
                            <AvatarFallback/>
                        </Avatar>
                        <Avatar className="w-12 h-12 border-2 border-white">
                            <AvatarImage src={Foto3}/>
                            <AvatarFallback/>
                        </Avatar>
                    </div>
                    <div className="w-40">
                        <p className="text-neutral-50 font-bold text-base">10.2k+</p>
                        <p className="text-neutral-400 text-xs leading-4">Active users around the wordls</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={Imagem} alt='Logo' className='imagem'/>
            </div>
               
        </div>
    )
  }