import type { Cocktail } from "../../types"
import Heart from "../Heart"
import Tag from "../Tag"
import Image from "next/image";

export default async function CocktailPage({ params }: { params: { cocktailID: string } }) {
    const res = await fetch(`http://localhost:3000/api/cocktails/${params.cocktailID}`)
    const {thumbnailURL, name: title, favourited, tags, ingredients, description}: Cocktail = await res.json()

    return (
        <>
            {thumbnailURL &&
                <div className="relative h-[300px] overflow-hidden border-b border-black">
                    <Image
                        src={thumbnailURL}
                        fill
                        sizes="100%" // TODO
                        alt="Thumbnail"
                        className="object-cover object-top"
                    />
                </div>
            }
            <div className="mt-2">
                <div className="flex mb-4">
                    <h3 className="font-serif text-4xl">{title}</h3>
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
