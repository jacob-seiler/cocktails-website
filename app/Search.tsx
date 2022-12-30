"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Search() {
    const [text, setText] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    const [results, setResults] = useState<{id: string, name: string}[]>([]);

    useEffect(() => {
        const updateResults = async () => {
            if (!text) {
                setResults([])
                return;
            }

            setIsFetching(true);
            
            const res = await fetch(`http://localhost:3000/api/search?q=${text}`);
            const data: {id: string, name: string}[] = await res.json();
            
            setResults(data)
            setIsFetching(false);
        }

        updateResults();
    }, [text])

    // TODO memo?
    const resultsDropdown = () => {
        if (isFetching)
            return <div>Loading...</div>

        if (text && results.length === 0)
            return <div>No results</div>

        return (
            <ul>
                {results.map(({id, name}) => <li key={id}><Link href={`/${id}`}>{name}</Link></li>)}
            </ul>
        )
    }
    
    return (
        <>
            <input type="text" className="border" placeholder="Search" value={text} onChange={e => setText(e.target.value)} />
            {resultsDropdown()}
        </>
    )
}
