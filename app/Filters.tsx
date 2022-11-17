import Filter from "./Filter";

export default function Filters() {
    return (
        <>
            <Filter value={undefined} label="Base Alcohol" options={[{label: "Rum", value: 0}, {label: "Vodka", value: 1}]} />
            <Filter className="ml-3" value={undefined} label="Taste" options={[{label: "Sweet", value: 0}, {label: "Sour", value: 1}]} />
        </>
    )
}