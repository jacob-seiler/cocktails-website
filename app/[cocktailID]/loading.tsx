import type { Cocktail } from "../../types"
import Heart from "../Heart"
import Tag from "../Tag"
import Image from "next/image";

export default async function CocktailPage() {
    const {thumbnailURL, name, favourited, tags, ingredients, description}: Partial<Cocktail> = {
        thumbnailURL: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        name: "Loading...",
        favourited: false,
        tags: ["..."],
        ingredients: ["..."],
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et laborum ipsa totam commodi est delectus neque voluptatem, illum pariatur, iste rem numquam doloribus incidunt, ea recusandae vero culpa eos. Iste."
    }

    return (
        <>
            <div className="relative h-[300px] overflow-hidden border-b border-black">
                <Image
                    src={thumbnailURL}
                    fill
                    sizes="100%" // TODO
                    alt="Thumbnail"
                    className="object-cover object-top"
                />
            </div>
            <div className="mt-2">
                <div className="flex mb-4">
                    <h3 className="font-serif text-4xl">{name}</h3>
                    <Heart className="w-7" favourited={favourited} />
                </div>
                {ingredients &&
                    <Tag className={`mb-2${tags ? " mr-2" : ""}`}>{ingredients[0]}</Tag>
                }
                {tags && tags.map((tag, index) => {
                    return (
                        <Tag
                            key={index}
                            className={`mb-2${index === tags.length - 1 ? "" : " mr-2"}`}
                        >
                            {tag}
                        </Tag>
                    )
                })}
                {description &&
                    <p className="mt-3">{description}</p>
                }
            </div>
        </>
    )
}
