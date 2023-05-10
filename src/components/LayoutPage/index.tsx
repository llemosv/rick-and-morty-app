import { PropsWithChildren } from "react";
import { Header } from "../Header";
import { ThemeButton } from "../ThemeButton";
import { SelectPage } from "../SelectPage";

export function LayoutPage({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen h-full py-0 px-4 z-10">
            <Header />

            <main className="w-full max-w-[85rem] my-0 mx-auto ">
                <div className="w-full flex justify-center items-end mt-8 px-2">
                    <SelectPage />
                </div>
                {children}
            </main>

            <ThemeButton />
        </div>
    )
}