import Logo from "@/assets/logo.svg"
import Imagem from "@/assets/footer.svg"

import BadgeGoogle from "@/assets/badges/Google_Play.svg"
import BadgeApple from "@/assets/badges/App_Store.svg"

export function Footer() {
    return (
        <div>
            <div className="grid grid-cols-2 gap-8" style={{paddingInline:'10%'}}>
                <div className="flex flex-col gap-8 w-10/12">
                    <h1 className="text-neutral-50 scroll-m-20 text-5xl font-bold  lg:text-5xl">Easy Way to manage your finances</h1>
                    <p className="text-neutral-400 hover:text-primary cursor-pointer text-lg leading-6">Easy to use mobile app that support on android and ios.</p>
                    <div className="flex gap-6">
                        <img src={BadgeApple} alt='Logo' className='imagem cursor-pointer'/>
                        <img src={BadgeGoogle} alt='Logo' className='imagem cursor-pointer'/>
                    </div>
                </div>
                <div>
                    <img src={Imagem} alt='Logo' className='imagem'/>
                </div> 
            </div>
            <div className="flex flex-col gap-20 pt-16 pb-4 backdrop-blur-md bg-black/25" style={{paddingInline:'10%'}}>
                <div className="grid grid-cols-6 gap-8">
                    <div className="flex flex-col col-span-2 gap-2">
                        <div>
                            <img src={Logo} alt='Logo' className='imagem h-6'/>
                        </div>
                        <p className="text-neutral-400 text-lg w-4/5">Discover the power of our secure and rewarding credit cards</p>
                    </div>
                    <div className="flex flex-col gap-4 py-2">
                        <h3 className="text-neutral-50 font-bold">About us</h3>
                        <div className="flex flex-col gap-2">
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">Investors</p>
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">Features</p>
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">Book a demo</p>
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">Security</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-2">
                        <h3 className="text-neutral-50 font-bold">Products</h3>
                        <div className="flex flex-col gap-2">
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">Credits Cards</p>
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">Gift Cards</p>
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">Savings accounts</p>
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">NFTs</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-2">
                        <h3 className="text-neutral-50 font-bold">Useful Links</h3>
                        <div className="flex flex-col gap-2">
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">Free rewards</p>
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">Documentation</p>
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">Affiliate program</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-2">
                        <h3 className="text-neutral-50 font-bold">Social</h3>
                        <div className="flex flex-col gap-2">
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">Changelog</p>
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">License</p>
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">Site Maps</p>
                            <p className="text-neutral-400 hover:text-primary cursor-pointer">News</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-neutral-400 text-xs">copyright 2025 Thales Souza All Rights Reserved</p>
                    <p className="text-neutral-400 text-xs">This page uses cookies. See cookies details <span className="hover:text-primary hover:underline cursor-pointer">here</span></p>
                </div> 
            </div>
        </div>
    )
  }