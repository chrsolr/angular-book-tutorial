export class ProductService {
  getProducts(): object[] {
    return [
      {
        imageUrl: "http://lorempixel.com/150/150/people/1/",
        productName: "Product 1",
        releasedDate: "May 31, 2019",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit corrupti eius harum sunt animi similique? Laudantium officiis laborum modi.",
        rating: 4,
        numberOfReviews: 2
      },
      {
        imageUrl: "http://lorempixel.com/150/150/people/2/",
        productName: "Product 2",
        releasedDate: "March 21, 2018",
        description: "Lorem, ipsum dolor sit amet consectetur.",
        rating: 1,
        numberOfReviews: 20
      },
      {
        imageUrl: "http://lorempixel.com/150/150/people/3/",
        productName: "Product 3",
        releasedDate: "June 1, 2011",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit corrupti.",
        rating: 5,
        numberOfReviews: 2000
      }
    ];
  }
}
