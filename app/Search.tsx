"use client";

import { useEffect, useState } from "react";

export default function Search() {
    const [text, setText] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    const [results, setResults] = useState<string[]>([]);

    useEffect(() => {
        const updateResults = async () => {
            if (!text) {
                setResults([])
                return;
            }

            setIsFetching(true);
            
            const res = await fetch(`http://localhost:3000/api/search?q=${text}`);
            const data: string[] = await res.json();
            
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
                {results.map((result, i) => <li key={i}>{result}</li>)}
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
