import Feature1 from "@/assets/features/f.svg"
import Feature2 from "@/assets/features/f-1.svg"
import Feature3 from "@/assets/features/f-2.svg"

export function Features() {
    return (
        <div className="flex flex-col gap-16" style={{paddingInline:'10%'}}>
            <h2 className="text-neutral-50 text-4xl font-bold text-center">What do we offer?</h2>
            <div className="flex justify-between">
                <div className="flex gap-6">
                    <img src={Feature1} alt='Logo' className='imagem w-16 h-16'/>
                    <div className="flex flex-col gap-2 w-64">
                        <h3 className="text-neutral-50 text-2xl font-medium">Security Guarantee</h3>
                        <p className="text-neutral-400 text-base">Your data and funds will be securely protected.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <img src={Feature2} alt='Logo' className='imagem w-16 h-16'/>
                    <div className="flex flex-col gap-2 w-64">
                        <h3 className="text-neutral-50 text-2xl font-medium">Investing</h3>
                        <p className="text-neutral-400 text-base">Your data and funds will be securely protected.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <img src={Feature3} alt='Logo' className='imagem w-16 h-16'/>
                    <div className="flex flex-col gap-2 w-64">
                        <h3 className="text-neutral-50 text-2xl font-medium">Multiple Method</h3>
                        <p className="text-neutral-400 text-base">Your data and funds will be securely protected.</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }