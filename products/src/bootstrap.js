import faker from "faker";

export const mount = (element) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.product();
    products += `<div>${name}</div>`;
  }
  element.innerHTML = products;
};

// There are 2 scenarios which needs to be taken care of.

if (process.env.NODE_ENV === "development") {
  // 1) If env is development and using our local index.html file, mount it in local element which already has an element with id.
  // 2) If env is development/production and running through container app, there is no guarantee if element will exist.
  const element = document.querySelector("#dev-products");
  // This assumes that container does not have the element with cart-dev id and this code only runs in local app.
  if (element) {
    mount(element);
  }
}
