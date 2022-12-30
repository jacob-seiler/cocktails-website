import type { Cocktail } from "../types";
import Card from "./Card"

interface CardsProps {
    className?: string;
}

export default async function Cards({ className }: CardsProps) {
    // TODO filters

    const res = await fetch('http://localhost:3000/api/cocktails')
    const data: Cocktail[] = await res.json()

    return (
        <div className={`${className} grid grid-cols-2 gap-2`}>
            {data.map((item, i) => <Card key={i} {...item} />)}
        </div>
    )
}
