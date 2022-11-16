import Cards from "./Cards";
import Filters from "./Filters";
import Search from "./Search";
import { Raleway, Playfair_Display } from "@next/font/google"

const playfairDisplay = Playfair_Display({
  subsets: ['latin']
})

const raleway = Raleway({
  subsets: ['latin']
})

export default function Home() {
    return (
        <>
            <h1>Find your signature drink</h1>
            <Search />
            <h2>Filters</h2>
            <Filters />
            <Cards />
        </>
    )
}