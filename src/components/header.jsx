function Header() {
    return(
        <header className="flex justify-between items-center p-4 gap-4">
                <div>
                    <img src="/Logo RicoRico.jpeg" alt="Logo" className="h-[53px] object-contain rounded-2xl" />
                </div>
                <nav className="flex gap-4 text-sm font-bold">
                    <a href="#">Locales</a>
                    <span>|</span>
                    <a href="#">Carta</a>
                    <span>|</span>
                    <a className="text-[#E9A299]" href="#">Reserva</a>
                </nav>
            </header>
    )
}

export default Header