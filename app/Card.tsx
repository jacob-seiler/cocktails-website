import Image, { StaticImageData } from "next/image";
import React from "react"

interface CardProps {
    title: string;
    thumbnail?: StaticImageData; // TODO use remote image instead
    favorited?: boolean;
}

const Card: React.FC<CardProps> = ({ title, thumbnail, favorited }) => {
    return (
        <div className="border border-black">
            {thumbnail && <Image src={thumbnail} alt="Thumbnail" />}
            <h3>{title}</h3>
            <p>{favorited ? "Heart" : "No heart"}</p>
        </div>
    )
}

export default Card