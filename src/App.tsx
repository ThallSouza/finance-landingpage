import { About } from "./components/about"
import { Banner } from "./components/banner"
import { Faqs } from "./components/faqs"
import { Features } from "./components/features"
import { Header } from "./components/header"
import { SectionOne } from "./components/section-one"
import { SectionTwo } from "./components/section-two"
import { SliderLogo } from "./components/slider-logo"
import { Testimonial } from "./components/testimonial"
import { Footer } from "./components/footer"

export function App() {
  return (
    <div className="bg-[url('@/assets/bg.svg')] bg-cover">
      <div className="flex flex-col gap-32 pt-8">
        <Header/>
        <Banner/>
        <About/>
        <SliderLogo/>
        <Features/>
        <SectionOne/>
        <SectionTwo/>
        <Testimonial/>
        <Faqs/>
        <Footer/>
      </div>
    </div>

    
  )
}
