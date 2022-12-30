import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';
import { Cocktail } from '../../../types';

const handleQueryParam = (param: string | string[] | undefined): string | undefined => {
    if (Array.isArray(param)) return param ? param[0] : undefined;
    return param;
}

export default async function search(req: NextApiRequest, res: NextApiResponse) {
    const searchTerm = handleQueryParam(req.query.q);

    // TODO throw error? missing parameter?
    if (!searchTerm)
        return res.status(200).json([]);

    const pb = new PocketBase('http://127.0.0.1:8090');
    const records = await pb.collection('cocktails').getFullList(200, {
        sort: 'created',
        filter: searchTerm ? `name~"${searchTerm}%"` : ''
    });

    const data: Partial<Cocktail>[] = records.map(({ id, name }) => {return {id, name}})

    res.status(200).json(data)
}