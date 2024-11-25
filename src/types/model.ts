export type IReview = {
    comment: string,
    date: string,
    rating: number,
    reviewerEmail: string,
    reviewerName: string
}

export type IProduct = {
    id: number,
    images: string[],
    price: number,
    rating: number
    title: string,
    category: string,
    description: string,
    brand: string,
    stock: number,
    tags: string[],
    reviews: IReview[],
    shippingInformation:string
  }

  export type IProductResponse = {
    limit: number,
    products: IProduct[],
    skip: number,
    total: number
  }
  
  export type categorisedCartItem = {
    cartItem: IProduct | undefined,
    quantity: number,
    totalPrice: number
}

  export type ICategorisedProduct = {category: string, data: IProduct[]}