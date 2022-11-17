import Card from "./Card"
import mojito from "public/mojito.webp"

export default function Cards() {
    return (
        <div className="grid grid-cols-2">
            <Card title="Mojito" thumbnail={mojito} />
            <Card title="Pina Colada" />
            <Card title="Strawberry Daiquiri" />
            <Card title="Negroni" />
            <Card title="Whisky Sour" />
            <Card title="Gin and Tonic" />
            <Card title="Rum and Coke" />
        </div>
    )
}