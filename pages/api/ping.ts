import type { NextApiRequest, NextApiResponse } from 'next'

const ping = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send('Pong')
}

export default ping
