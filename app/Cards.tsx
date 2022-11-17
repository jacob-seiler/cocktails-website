import Card from "./Card"
import mojito from "public/mojito.webp"

interface CardsProps {
    className?: string;
}

const Cards: React.FC<CardsProps> = ({className}) => {
    return (
        <div className={`${className} grid grid-cols-2 gap-2`}>
            <Card title="Mojito" thumbnail={mojito} tags={['Rum', 'Sweet', 'Popular']} />
            <Card title="Pina Colada" thumbnail={mojito} tags={['Rum', 'Sweet', 'Popular']} />
            <Card title="Strawberry Daiquiri" thumbnail={mojito} tags={['Rum', 'Sweet', 'Popular']} />
            <Card title="Negroni" thumbnail={mojito} tags={['Rum', 'Sweet', 'Popular']} />
            <Card title="Whisky Sour" thumbnail={mojito} tags={['Rum', 'Sweet', 'Popular']} />
            <Card title="Gin and Tonic" thumbnail={mojito} tags={['Rum', 'Sweet', 'Popular']} />
            <Card title="Rum and Coke" thumbnail={mojito} tags={['Rum', 'Sweet', 'Popular']} />
        </div>
    )
}

export default Cards