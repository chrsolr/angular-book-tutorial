export class ProductService {
  getProducts(): object[] {
    return [
      {
        imageUrl: 'http://loremflickr.com/500/500?random=1',
        productName: 'Product 1',
        releasedDate: new Date('May 31, 2019'),
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
 Aspernatur velit corrupti eius harum sunt animi similique? Laudantium officiis laborum modi.`,
        rating: 1,
        numberOfReviews: 2,
      },
      {
        imageUrl: 'http://loremflickr.com/500/500?random=2',
        productName: 'Product 2',
        releasedDate: new Date('March 21, 2018'),
        description: 'Lorem, ipsum dolor sit amet consectetur.',
        rating: 3,
        numberOfReviews: 20,
      },
      {
        imageUrl: 'http://loremflickr.com/500/500?random=3',
        productName: 'Product 3',
        releasedDate: new Date('June 1, 2011'),
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit corrupti.',
        rating: 4,
        numberOfReviews: 2000,
      },
      {
        imageUrl: 'http://loremflickr.com/500/500?random=4',
        productName: 'Product 4',
        releasedDate: new Date('December 10, 2001'),
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        rating: 3,
        numberOfReviews: 500,
      },
    ]
  }
}
