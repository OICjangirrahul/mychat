import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../ui/button'
import  Image  from "next/image";
import { signIn } from "next-auth/react"
export default function LoginModal(){
    const handelLogin = () => {
        signIn("google",{
            callbackUrl: "/dashboard",
            redirect: true
        })
    } 
    return(
        <Dialog>
        <DialogTrigger asChild><Button>Getting Start</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-2xl'>Welcome to MyChat?</DialogTitle>
            <DialogDescription>
              MyChat makes secure chat links and start conversation in seconds
            </DialogDescription>
          </DialogHeader>
          <Button variant={'outline'} onClick={handelLogin}>
           <Image
           src="/images/google.png"
           className='mr-4'
           width={25}
           height={25}
           alt='google_logo'
           ></Image>
           Contunue with Google
          </Button>
        </DialogContent>
      </Dialog>
      
    )
}