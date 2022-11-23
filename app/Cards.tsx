import type { Cocktail } from "../types";
import Card from "./Card"

interface CardsProps {
    className?: string;
    search?: string;
}

export default async function Cards({ className, search }: CardsProps) {
    // TODO: sanitize searchParams

    const res = await fetch(`http://localhost:3000/api/cocktails${search ? `?q=${search}` : ''}`)
    const data: Cocktail[] = await res.json()

    if (data.length === 0)
        return (
            <div className="mt-5">
                <p>No results for &quot;{search}&quot;</p>
            </div>
        )

    return (
        <div className={`${className} grid grid-cols-2 gap-2`}>
            {data.map((item, i) => <Card key={i} {...item} />)}
        </div>
    )
}
