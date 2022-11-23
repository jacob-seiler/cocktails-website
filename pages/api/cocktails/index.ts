import type { NextApiRequest, NextApiResponse } from 'next'
import type { Cocktail } from '../../../types';
import PocketBase from 'pocketbase'

const handleQueryParam = (param: string | string[] | undefined): string | undefined => {
    let term = param

    if (Array.isArray(term))
        term = term.length === 0 ? undefined : term[0]

    // TODO sanitize
    
    return term
}

export default async function cocktails(req: NextApiRequest, res: NextApiResponse) {
    const searchTerm = handleQueryParam(req.query.q);

    const pb = new PocketBase('http://127.0.0.1:8090')
    const records = await pb.collection('cocktails').getFullList(200, {
        sort: 'created',
        expand: 'ingredients,tags',
        filter: searchTerm ? `name~"${searchTerm}%"` : ''
    });

    const data: Cocktail[] = records.map(record => {
        const tags: string[] = record.expand.tags.map((tag: { name: string }) => tag.name)
        const ingredients: string[] = record.expand.ingredients.map(((ingredient: { name: string }) => ingredient.name))

        return {
            id: record.id,
            title: record.name,
            thumbnailURL: record.thumbnail ? pb.getFileUrl(record, record.thumbnail) : undefined,
            tags,
            ingredients,
            description: record.description,
            favourited: false,
        }
    })

    res.status(200).json(data)
}
