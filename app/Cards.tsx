import Card from "./Card"
import mojito from "public/mojito.webp"

interface CardsProps {
    className?: string;
}

const Cards: React.FC<CardsProps> = ({className}) => {
    const data = [
        {
            title: "Mojito",
            thumbnail: mojito,
            tags: ['Rum', 'Sweet', 'Popular']
        },
        {
            title: "Pina Colada",
            thumbnail: mojito,
            tags: ['Rum', 'Sweet', 'Popular']
        },
        {
            title: "Strawberry Daiquiri",
            thumbnail: mojito,
            tags: ['Rum', 'Sweet', 'Popular']
        },
        {
            title: "Negroni",
            thumbnail: mojito,
            tags: ['Rum', 'Sweet', 'Popular']
        },
        {
            title: "Whisky Sour",
            thumbnail: mojito,
            tags: ['Whisky', 'Sour', 'Popular']
        },
        {
            title: "Gin and Tonic",
            thumbnail: mojito,
            tags: ['Gin', 'Sweet', 'Popular']
        },
        {
            title: "Rum and Coke",
            thumbnail: mojito,
            tags: ['Rum', 'Sweet', 'Popular']
        },
    ]

    return (
        <div className={`${className} grid grid-cols-2 gap-2`}>
            {data.map((item, i) => <Card key={i} title={item.title} thumbnail={item.thumbnail} tags={item.tags} />)}
        </div>
    )
}

export default Cards