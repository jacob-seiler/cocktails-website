import Image, { StaticImageData } from "next/image";
import React from "react";
import Heart from "public/heart.svg";
import Tag from "./Tag";

interface CardProps {
    title: string;
    thumbnail?: StaticImageData; // TODO use remote image instead
    favorited?: boolean;
    tags?: string[];
}

const Card: React.FC<CardProps> = ({ title, thumbnail, favorited, tags }) => {
    return (
        <div className="border border-black rounded-md">
            {thumbnail && <Image src={thumbnail} alt="Thumbnail" className="rounded-t-md" />}
            <div className="mx-2">
                <div className="flex mb-2">
                    <h3 className="font-serif">{title}</h3>
                    <Heart className={`w-4 ml-auto ${favorited ? `text-red-700` : `text-black`}`} />
                </div>
                {tags && tags.map((tag, index) => {
                    return (
                        <Tag
                            key={index}
                            className={`mb-2 ${index === tags.length - 1 ? undefined : "mr-2"}`}
                        >
                            {tag}
                        </Tag>
                    )
                })}
            </div>
        </div>
    )
}

export default Card