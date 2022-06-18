import { ImgVid } from './imgvid.class';
import { Key } from './keys.class';
export class Product {
  public _id: any;
  public name: string;
  public shortName: string;
  public type: string;
  public title: string;
  public description: string;
  public developer: string;
  public publisher: string;
  public release_date: string;
  public platform: string;
  public purchase_price: number;
  public sale_price: number;
  public tag: string[];
  public keys: Key[];
  public images: ImgVid[];
  public videos: ImgVid[];
  public includes: Product[];
  public included_in: Product[];
  public discount_price: number;
  constructor(
    name: string,
    shortName: string,
    type: string,
    title: string,
    description: string,
    developer: string,
    publisher: string,
    release_date: string,
    platform: string,
    purchase_price: number,
    sale_price: number,
    tag: string[],
    keys: Key[],
    images: ImgVid[],
    videos: ImgVid[],
    includes: Product[],
    included_in: Product[],
    discount_price: number) {
    this.name = name;
    this.shortName = shortName;
    this.type = type;
    this.title = title;
    this.description = description;
    this.developer = developer;
    this.publisher = publisher;
    this.release_date = release_date;
    this.platform = platform;
    this.purchase_price = purchase_price;
    this.sale_price = sale_price;
    this.tag = tag;
    this.keys = keys;
    this.images = images;
    this.videos = videos;
    this.includes = includes;
    this.included_in = included_in;
    this.discount_price = discount_price;
  }
}
