"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Search() {
    const searchParams = useSearchParams();
    const router = useRouter()
    const [text, setText] = useState(searchParams.get("q") ?? "")

    // TODO when implemented into Next 13, replace with shallow routing
    useEffect(() => {
        router.replace(`/?q=${encodeURIComponent(text)}`)
    }, [router, text])
    
    return (
        <input type="text" className="border" placeholder="Search" value={text} onChange={e => setText(e.target.value)} />
    )
}
