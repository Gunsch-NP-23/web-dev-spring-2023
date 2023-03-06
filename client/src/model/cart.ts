import { ref } from "vue"
const cart = ref([] as CartItem[]);
import type { Product } from "./products";
export function useCart(){
    return cart;
}
export interface CartItem {
    productId: number;
    quantity: number;
    product: Product;
}