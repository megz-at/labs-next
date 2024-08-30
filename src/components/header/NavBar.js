"use client";
import React from 'react'
import { navItems } from './navItems'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const path = usePathname();

    return (
        <ul className="navbar-nav ">
            {
                navItems.map((item) =>
                    <li className='nav-item ' key={item.route}>
                        <Link className={`nav-link text-white ${path == item.route && "active"}`} href={item.route}>{item.title}</Link>
                    </li>
                )
            }

        </ul>
    )
}
