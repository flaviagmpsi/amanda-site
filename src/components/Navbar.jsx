import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'py-[0.9rem] px-6 md:px-16 lg:px-20 bg-[rgba(250,246,240,0.92)] backdrop-blur-[20px] border-b border-bean/6'
          : 'py-5 px-6 md:px-16 lg:px-20'
      }`}
    >
      <a href="#" className="font-display text-[1.3rem] font-medium text-bean tracking-[-0.02em] no-underline">
        Amanda
      </a>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-8 list-none">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-body text-[0.78rem] font-normal text-text-secondary no-underline uppercase tracking-[0.1em] relative transition-colors duration-300 hover:text-cornell group"
            >
              {link.label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-cornell transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contato"
            className="font-body text-[0.78rem] font-normal text-cornell uppercase tracking-[0.1em] no-underline py-[0.55rem] px-6 border border-cornell/60 rounded-full transition-all duration-350 hover:bg-cornell hover:text-white hover:border-cornell"
          >
            Contato
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
        aria-label="Menu"
      >
        <span className={`block w-5 h-[1.5px] bg-bean transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
        <span className={`block w-5 h-[1.5px] bg-bean transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-[1.5px] bg-bean transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[rgba(250,246,240,0.97)] backdrop-blur-[20px] border-b border-bean/8 py-8 px-6 flex flex-col gap-5">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-[0.85rem] text-text-secondary no-underline uppercase tracking-[0.1em] hover:text-cornell transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="font-body text-[0.82rem] text-cornell uppercase tracking-[0.1em] no-underline py-3 px-6 border border-cornell/60 rounded-full text-center mt-2 hover:bg-cornell hover:text-white transition-all"
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  )
}
