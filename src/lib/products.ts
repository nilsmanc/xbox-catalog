function formatProduct(p) {
  return {
    id: p.DisplaySkuAvailabilities[0].Sku.ProductId,
    img: `https:${
      p.LocalizedProperties[0].Images.find(({ ImagePurpose }) => ImagePurpose === 'Poster').Uri
    }`,
    title: p.DisplaySkuAvailabilities[0].Sku.LocalizedProperties[0].SkuTitle,
    price: p.DisplaySkuAvailabilities[0].Availabilities[0].OrderManagementData.Price.ListPrice,
    msrp: p.DisplaySkuAvailabilities[0].Availabilities[0].OrderManagementData.Price.MSRP,
  }
}

const FILTER_MAP = {
  'new-releases': 'New',
  'most-played': 'MostPlayed',
}

function getUrl(filter) {
  const params = FILTER_MAP[filter] || 'TopPaid'

  return `https://reco-public.rec.mp.microsoft.com/channels/Reco/V8.0/Lists/Computed/${params}?Market=us&Language=en&ItemTypes=Game&deviceFamily=Windows.Xbox&count=20&skipitems=0`
}

export async function fetchProducts({ filter, available: boolean }) {
  const productListReq = await fetch(getUrl(filter))
  const list = await productListReq.json()

  const productsReq = await fetch(
    `https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${list.Items.map(
      ({ Id }) => Id,
    ).join(',')}&market=US&languages=en-us&MS-CV=DGU1mcuYo0WMMp+F.1`,
  )

  const data = await productsReq.json()

  return data.Products.map(formatProduct)
}
