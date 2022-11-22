import type { NextApiRequest, NextApiResponse } from 'next'
import type { Cocktail } from '../../../types';
import PocketBase from 'pocketbase'

export default async function cocktail(req: NextApiRequest, res: NextApiResponse) {
    const pb = new PocketBase('http://127.0.0.1:8090')
    const id = req.query.id as string
    const record = await pb.collection('cocktails').getOne(id, { expand: 'ingredients,tags' }) // TODO handle 404

    const tags: string[] = record.expand.tags.map((tag: { name: string }) => tag.name)
    const ingredients: string[] = record.expand.ingredients.map(((ingredient: { name: string }) => ingredient.name))

    // TODO return more (description, total favourited, etc)
    const data: Cocktail = {
        id: record.id,
        title: record.name,
        thumbnailURL: record.thumbnail ? pb.getFileUrl(record, record.thumbnail) : undefined,
        tags,
        ingredients,
        favourited: false,
    }

    res.status(200).json(data)
}
