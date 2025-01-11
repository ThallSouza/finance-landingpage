import { About } from "./components/about"
import { Banner } from "./components/banner"
import { Header } from "./components/header"

export function App() {
  return (
    <div className="flex flex-col gap-32 bg-neutral-900 pt-8" style={{paddingInline:'10%'}}>
      <Header/>
      <Banner/>
      <About/>
    </div>
    
  )
}
