
export interface ICharacteristic {
    name: string;
  }

export interface IProductCard {
  name: string;
  rating: {
    star: number;
    quantity: number;
  };
  price: {
    oldPrice: string;
    newPrice: string;
  };
  colors: string[];

  quantities: string[];

  heights: string[];
  description: string;
  characteristics: ICharacteristic[];
  reviews: string
}
