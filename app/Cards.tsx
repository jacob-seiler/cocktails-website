import type { Cocktail } from "../types";
import Card from "./Card"

interface CardsProps {
    className?: string;
    search?: string;
}

export default async function Cards({ className, search }: CardsProps) {
    const res = await fetch(`http://localhost:3000/api/cocktails${search ? `?q=${search}` : ''}`)
    const data: Cocktail[] = await res.json()

    return (
        <div className={`${className} grid grid-cols-2 gap-2`}>
            {data.map((item, i) => <Card key={i} {...item} />)}
        </div>
    )
}
