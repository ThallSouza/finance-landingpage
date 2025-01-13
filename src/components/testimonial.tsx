import { Avatar, AvatarImage} from "./ui/avatar"

import Quote from "@/assets/quote.svg"
import Foto1 from "@/assets/foto-1.png"
import Foto2 from "@/assets/foto-2.png"
import Foto3 from "@/assets/foto-3.png"

export function Testimonial() {
    return (
        <div className="flex gap-8" style={{paddingInline:'10%'}}>
            <div className="flex flex-col px-6 py-8 gap-8 backdrop-blur-md bg-secondary/25 rounded-3xl">
                <img src={Quote} alt='Logo' className='imagem w-14 h-14'/>
                <p className="text-neutral-50 font-normal text-base">"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."</p>
                <div className="flex gap-2 ">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={Foto1}/>
                    </Avatar>
                    <div>
                        <p className="text-neutral-50 font-medium text-base">Thomas Velar</p>
                        <p className="text-neutral-400 text-xs">UI / UX Designer</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-6 py-8 gap-8 backdrop-blur-md bg-secondary/25 rounded-3xl">
                <img src={Quote} alt='Logo' className='imagem w-14 h-14'/>
                <p className="text-neutral-50 font-normal text-base">"It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment."</p>
                <div className="flex gap-2 ">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={Foto2}/>
                    </Avatar>
                    <div>
                        <p className="text-neutral-50 font-medium text-base">Joana Souza</p>
                        <p className="text-neutral-400 text-xs">Web Designer</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-6 py-8 gap-8 backdrop-blur-md bg-secondary/25 rounded-3xl">
                <img src={Quote} alt='Logo' className='imagem w-14 h-14'/>
                <p className="text-neutral-50 font-normal text-base">"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking."</p>
                <div className="flex gap-2 ">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={Foto3}/>
                    </Avatar>
                    <div>
                        <p className="text-neutral-50 font-medium text-base">Gabriela Carvalho</p>
                        <p className="text-neutral-400 text-xs">Trust Administrator</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }