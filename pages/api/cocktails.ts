import type { NextApiRequest, NextApiResponse } from 'next'
import PocketBase from 'pocketbase'

const cocktails = async (_req: NextApiRequest, res: NextApiResponse) => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const records = await pb.collection('cocktails').getFullList(200, {
        sort: 'created',
        expand: 'ingredients,tags',
    });

    const data = records.map(record => {
        const tags: string[] = record.expand.tags.map((tag: { name: string }) => tag.name)
        const ingredients: string[] = record.expand.ingredients.map(((ingredient: { name: string }) => ingredient.name))

        return {
            title: record.name,
            thumbnailURL: record.thumbnail ?  `${pb.baseUrl}/api/files/${record.collectionId}/${record.id}/${record.thumbnail}` : undefined,
            tags,
            ingredients
        }
    })

    res.status(200).json(data)
}

export default cocktails
