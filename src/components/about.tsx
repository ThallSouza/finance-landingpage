export function About() {
    return (
        <div  style={{paddingInline:'10%'}}>
            <div className="flex justify-between items-center p-16 backdrop-blur-md bg-secondary/25 rounded-3xl">
                <div className="flex flex-col gap-2 w-60">
                    <h2 className="text-neutral-50 text-5xl font-bold text-center">16y</h2>
                    <p className="text-primary font-medium text-base text-center">Experience</p>
                </div>
                <div className="flex flex-col gap-2 w-60">
                    <h2 className="text-neutral-50 text-5xl font-bold text-center">250+</h2>
                    <p className="text-primary font-medium text-base text-center">Merchant Partner</p>
                </div>
                <div className="flex flex-col gap-2 w-60">
                    <h2 className="text-neutral-50 text-5xl font-bold text-center">18+</h2>
                    <p className="text-primary font-medium text-base text-center">Years Experience</p>
                </div>
                <div className="flex flex-col gap-2 w-60">
                    <h2 className="text-neutral-50 text-5xl font-bold text-center">10.2k+</h2>
                    <p className="text-primary font-medium text-base text-center">Worldwide Clients</p>
                </div>
            </div>
        </div>
    )
  }