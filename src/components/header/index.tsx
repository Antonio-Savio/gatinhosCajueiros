"use client"
import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import GatinhosLogo from '@/../public/logo.png'
import { Menu, X } from 'lucide-react';

export function Header(){
    const [atTop, setAtTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    function handleScroll(){
        if(window.scrollY > 10){
            setAtTop(false)
        } else {
            setAtTop(true)
        } 
    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [atTop])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as HTMLElement)) {
                if (menuRef.current?.contains(event.target as HTMLDivElement)) return;
                setMenuOpen(false);
            }
        }; 

        document.addEventListener("mousedown", handleClickOutside)

        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return(
        <header className={`${styles.header} ${!atTop ? styles.fixed : ''}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    
                    <Link href="/">
                        <Image 
                            src={GatinhosLogo}
                            alt="Logo Gatinhos Cajueiros"
                            width={100}
                            quality={100}
                        />
                    </Link>

                    <nav
                        className={`${styles.nav} ${menuOpen ? styles.show : ''}`}
                        aria-label="Nav"
                        ref={navRef}
                    >
                        <Link href="/#animais">
                            Adote
                        </Link>

                        <Link href="/#lojinha">
                            Lojinha Caju
                        </Link>

                        <Link href="/#comoajudar">
                            Como Ajudar
                        </Link>

                        <Link href="/#quemsomos">
                            Quem Somos
                        </Link>
                    </nav>

                    <div className={styles.menu} ref={menuRef} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                        {menuOpen ? <X /> : <Menu />}
                    </div>
                </div>
            </div>
        </header>
    )
}