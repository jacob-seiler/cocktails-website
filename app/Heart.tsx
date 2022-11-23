"use client";

import HeartSVG from "public/heart.svg";
import { MouseEventHandler, useState } from "react";

interface HeartProps {
    favourited: boolean;
    className?: string;
}

export default function Heart({ favourited, className }: HeartProps) {
    const [filled, setFilled] = useState(favourited)

    const handleClick = () => {
        setFilled(prevFilled => !prevFilled)

        // TODO api call?
    }

    return <HeartSVG onClick={handleClick} className={`${className ? `${className} ` : ''}ml-auto cursor-pointer stroke-2 stroke-black ${filled ? `fill-red-500` : `fill-none`}`} />
}