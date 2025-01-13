import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

import Imagem from "@/assets/logo.svg"

export function Header() {
    return (
        <div className="flex justify-between items-center" style={{paddingInline:'10%'}}>
            <img src={Imagem} alt='Logo' className='imagem cursor-pointer'/>
                <div className="flex gap-8">
                <p className="text-white hover:text-primary cursor-pointer">Why Us</p>
                <p className="text-white hover:text-primary cursor-pointer">Services</p>
                <p className="text-white hover:text-primary cursor-pointer">Our Process</p>
                <p className="text-white hover:text-primary cursor-pointer">Payments</p>
                <p className="text-white hover:text-primary cursor-pointer">FAQs</p>
                </div>
                <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button size="lg" className="font-normal text-neutral-50 bg-primary hover:text-neutral-50/85 hover:bg-primary/85 shadow-none rounded-full">Contact</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
        </div>
    )
  }