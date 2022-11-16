import Cards from "./Cards";
import Filters from "./Filters";

export default function Home() {
    return (
        <>
            <h1>Find your signature drink</h1>
            <h2>Filters</h2>
            <Filters />
            <Cards />
        </>
    )
}