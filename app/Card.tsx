"use client";

import Image from "next/image";
import Tag from "./Tag";
import Heart from "./Heart";
import { useRouter } from "next/navigation";
import type { Cocktail } from "../types";

export default function Card({ id, name: title, thumbnailURL, tags, ingredients, favourited }: Cocktail) {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/${id}`);
    }

    return (
        <div className="border border-black rounded-md overflow-hidden">
            {thumbnailURL &&
                <div className="relative h-[140px] overflow-hidden border-b border-black cursor-pointer" onClick={handleClick}>
                    <Image
                        src={thumbnailURL}
                        fill
                        sizes="100%" // TODO
                        alt="Thumbnail"
                        className="object-cover object-top"
                    />
                </div>
            }
            <div className="mx-2">
                <div className="flex mb-2">
                    <h3 className="font-serif text-2xl cursor-pointer" onClick={handleClick}>{title}</h3>
                    <Heart className="w-5" favourited={favourited} />
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
            </div>
        </div>
    )
}
