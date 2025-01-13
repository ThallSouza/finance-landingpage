import Logo1 from "@/assets/slider-logos/upwork.svg"
import Logo2 from "@/assets/slider-logos/dell.svg"
import Logo3 from "@/assets/slider-logos/nyt.svg"
import Logo4 from "@/assets/slider-logos/petal.svg"
import Logo5 from "@/assets/slider-logos/rakuten.svg"
import Logo6 from "@/assets/slider-logos/vice.svg"

export function SliderLogo() {
    return (
        <div className="flex justify-between items-center" style={{paddingInline:'10%'}}>
            <img src={Logo1} alt='Logo' className='imagem'/>
            <img src={Logo2} alt='Logo' className='imagem'/>
            <img src={Logo3} alt='Logo' className='imagem'/>
            <img src={Logo4} alt='Logo' className='imagem'/>
            <img src={Logo5} alt='Logo' className='imagem'/>
            <img src={Logo6} alt='Logo' className='imagem'/>
        </div>
    )
  }