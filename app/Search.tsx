"use client";

import { useState } from "react";

export default function Search() {
    const [text, setText] = useState("")
    
    return (
        <>
            <input type="text" className="border" placeholder="Search" value={text} onChange={e => setText(e.target.value)} />
            <p>{text}</p>
        </>
    )
}
