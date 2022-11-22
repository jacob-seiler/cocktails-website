"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Search() {
    const searchParams = useSearchParams();
    const router = useRouter()
    const [text, setText] = useState(searchParams.get("q") ?? "")

    useEffect(() => {
        router.push(`${text ? `?q=${text}` : ''}`)
    }, [router, text])
    
    return (
        <input type="text" className="border" placeholder="Search" value={text} onChange={e => setText(e.target.value)} />
    )
}
