import Cards from "./Cards";
import Filters from "./Filters";
import Search from "./Search";

export default function Home() {
    return (
        <>
            <h1 className="font-serif">Find your signature drink</h1>
            <Search />
            <h2 className="mt-6">Filters</h2>
            <Filters />
            {/* @ts-ignore */}
            <Cards className="mt-6" />
        </>
    )
}