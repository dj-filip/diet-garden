'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {

  const pathname = usePathname();

  return (
    <ul className="mt-16">
      <li>
        <Link href="/" className={`pl-8 text-xl font-medium text-gray-500 [&.active]:text-lime-500 ${pathname === '/groceries' ? 'active' : ''}`}>GROCERIES</Link>
      </li>
      <li>
        <Link href="/meals" className={`pl-8 text-xl font-medium text-gray-500 [&.active]:text-lime-500 ${pathname === '/meals' ? 'active' : ''}`}>MEALS</Link>
      </li>
    </ul>
  )
}
