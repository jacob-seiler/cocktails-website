import type { NextApiRequest, NextApiResponse } from 'next'
import type { Cocktail } from '../../types';
import PocketBase from 'pocketbase'

export default async function search(req: NextApiRequest, res: NextApiResponse) {
    const pb = new PocketBase('http://127.0.0.1:8090')

    const term = req.query.q

    // TODO improve and handle 404
    const records = await pb.collection('cocktails').getFullList(200, {
        sort: 'created',
        filter: `name~"${term}%"`,
        expand: 'ingredients,tags',
    })

    const data: Cocktail[] = records.map(record => {
        const tags: string[] = record.expand.tags.map((tag: { name: string }) => tag.name)
        const ingredients: string[] = record.expand.ingredients.map(((ingredient: { name: string }) => ingredient.name))

        return {
            id: record.id,
            title: record.name,
            thumbnailURL: record.thumbnail ? pb.getFileUrl(record, record.thumbnail) : undefined,
            tags,
            ingredients,
            favourited: false,
        }
    })

    res.status(200).json(data)
}
