"use client"

import { signIn, signOut } from "next-auth/react"
import { Button } from "../ui/button"
import { LogOut, User2Icon } from "lucide-react"

export function ButtonLogin() {

    return (
        <Button className="flex gap-1  rounded-full" variant={"outline"} onClick={() => signIn()} title="Fazer login">
            <User2Icon />
        </Button>
    )
}


export function ButtonLogoff() {

    return (
        <Button variant="outline" className="w-full h-12 gap-2" onClick={() => signOut()}>
            <LogOut /> Sair
        </Button>
    )
}