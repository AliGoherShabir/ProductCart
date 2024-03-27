export interface Product {
    id:     number;
    colour: string;
    name:   string;
    price:  number;
    img:    string;
}
export interface CartProduct extends Product {
    quantity:     number;
}