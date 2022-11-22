declare module 'public/*.svg' {
    import React from 'react'
    
    const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

    export default Component
}

// TODO replace with tRPC
export interface Cocktail {
    id: string;
    title: string;
    thumbnailURL: string | undefined;
    tags: string[];
    ingredients: string[];
    favourited: boolean;
}