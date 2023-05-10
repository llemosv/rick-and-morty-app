import { IconNothingFound } from './IconNothingFound'

export function NothingFound() {
    return (
        <div className="text-center  h-full w-fuyll flex items-center flex-col justify-center">
            <strong className="text-center text-2xl py-6">Nada encontrado! 😥</strong>
            <IconNothingFound className="mx-auto max-w-xs h-auto" />
        </div>
    )
}