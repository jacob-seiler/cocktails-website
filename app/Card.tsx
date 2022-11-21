import Image from "next/image";
import React from "react";
import Heart from "public/heart.svg";
import Tag from "./Tag";

interface CardProps {
    title: string;
    thumbnailURL: string;
    tags: string[];
    ingredients: string[];
    favourited?: boolean;
}

export default function Card({ title, thumbnailURL, tags, ingredients, favourited }: CardProps) {
    return (
        <div className="border border-black rounded-md overflow-hidden">
            {thumbnailURL &&
                <div className="relative h-[140px] overflow-hidden border-b border-black">
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
                    <h3 className="font-serif text-2xl">{title}</h3>
                    <Heart className={`w-5 ml-auto ${favourited ? `text-red-700` : `text-black`}`} />
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
