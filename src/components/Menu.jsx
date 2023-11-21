"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/" },
    { id: 3, title: "Skills", url: "/" },
    { id: 4, title: "Projects", url: "/" },
    { id: 5, title: "Contacts", url: "/" },
];

const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Image
                src={open ? "/close.png" : "/open.png"}
                alt=""
                width={20}
                height={20}
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
            />
            {open && (
                <div className="bg-red-500 text-white absolute left-0 top-20 w-full h-[calc(100vh-5rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
                    {links.map((item) => (
                        <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                            {item.title}
                        </Link>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Menu
