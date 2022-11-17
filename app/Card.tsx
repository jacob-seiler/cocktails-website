import Image, { StaticImageData } from "next/image";
import React from "react";
import Heart from "public/heart.svg";
import Tag from "./Tag";

interface CardProps {
    title: string;
    thumbnail?: StaticImageData; // TODO use remote image instead
    favorited?: boolean;
}

const Card: React.FC<CardProps> = ({ title, thumbnail, favorited }) => {
    return (
        <div className="border border-black">
            {thumbnail && <Image src={thumbnail} alt="Thumbnail" />}
            <div className="flex">
                <h3 className="font-serif">{title}</h3>
                <Heart className={`w-4 ml-auto ${favorited ? `text-red-700` : `text-black`}`} />
            </div>
            <Tag>Rum</Tag>
            <Tag>Sweet</Tag>
            <Tag>Popular</Tag>
        </div>
    )
}

export default Card