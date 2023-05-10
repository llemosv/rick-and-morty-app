import { PropsWithChildren } from "react";
import { Header } from "../Header";
import { ThemeButton } from "../ThemeButton";


export function LayoutPage({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen h-full py-0 px-4 z-10">
            <Header />

            <main className="w-full max-w-[85rem] my-0 mx-auto ">
                {children}
            </main>

            <ThemeButton />
        </div>
    )
}