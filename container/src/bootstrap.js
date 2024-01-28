console.log("container app");
import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/cartIndex";

productsMount(document.querySelector("#container-products"));
cartMount(document.querySelector("#container-cart"));
