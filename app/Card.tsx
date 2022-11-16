import Image from "next/image";
import React from "react"

interface CardProps {
    title: string;
    // picture: string; // TODO is this the right type?
    // TODO tags: string;
    favorited?: boolean;
}

const Card: React.FC<CardProps> = ({ title, favorited }) => {
    return (
        <div className="border border-black">
            {/* <Image src={picture} alt="picture" width={50} height={50} /> */}
            <h3>{title}</h3>
            <p>{favorited ? "Heart" : "No heart"}</p>
        </div>
    )
}

export default Card