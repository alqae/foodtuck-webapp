export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public image: string,
    public categories: string[],
    public rating: number,
    public reviews: number,
    public stock: number,
    public quantity: number,
  ) {}
}