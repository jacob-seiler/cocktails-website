import Card from "./Card"

interface CardsProps {
    className?: string;
}

interface CocktailsResponse {
    title: string;
    thumbnailURL: string;
    tags: string[];
    ingredients: string[];
}

export default async function Cards({ className }: CardsProps) {
    const res = await fetch('http://localhost:3000/api/cocktails')
    const data: CocktailsResponse[] = await res.json()

    return (
        <div className={`${className} grid grid-cols-2 gap-2`}>
            {data.map((item, i) => <Card key={i} {...item} />)}
        </div>
    )
}
