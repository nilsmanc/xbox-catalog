import { NextApiRequest, NextApiResponse } from 'next'

import { fetchProducts } from '../../lib/products'

export default async function productsController(req: NextApiRequest, res: NextApiResponse) {
  const products = await fetchProducts({
    filter: req.query.filter,
    available: req.query.available,
  })

  res.json(products)
}
