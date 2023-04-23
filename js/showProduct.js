import { API_PRODUCT } from "./const.js";
import { getAPI } from "./getApi.js";
import { product, params } from "./variable.js";

export const showProduct = () => {
  let api = `${API_PRODUCT}?q=${params.q}`;

  getAPI(api).then((data) => {
    console.log(data);
    let htmlArray = data.map((item) => {
      let discount = item.discountPercentage.toFixed(0);
      return `
            <div class="product-item">
              <div class="product-item__image">
                <img src="${item.thumbnail}" alt="${item.title}"/>
                <span class="product-item__discount">${discount}%</span>
              </div>
              <div class="product-item__content">
                <h3 class="product-item__title">${item.title}</h3>
                <div class="product-item__footer">
                  <span class="product-item__price">${item.price}$</span>
                  <span class="product-item__stock">Còn lại: ${item.stock} sp</span>
                </div>
              </div>
            </div>
        `;
    });

    let htmlString = htmlArray.join("");
    product.innerHTML = htmlString;
  });
};
