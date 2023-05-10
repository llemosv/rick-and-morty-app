import Logo from '../../assets/Rick-and-Morty-Logo.png'

export function Header() {
    return (
        <header className="w-full h-48 flex items-center justify-center z-50 relative">
            <img
                className="h-56"
                src={Logo}
                alt="Logo Rick and Morty"
                loading="lazy"
            />
        </header>
    )
}