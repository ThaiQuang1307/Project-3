import { API_CATEGORY } from "./const.js";
import { getAPI } from "./getApi.js";
import { showProduct } from "./showProduct.js";
import { category, params } from "./variable.js";

getAPI(API_CATEGORY).then((data) => {
  let htmlArray = data.map((item) => {
    return `
            <div class="category-item" data-category="${item}">
                ${item}
            </div>
        `;
  });

  let htmlString = htmlArray.join("");
  category.innerHTML = htmlString;

  let listCategory = document.querySelectorAll("#category .category-item");
  // console.log(listCategory);
  listCategory.forEach((itemCategory) => {
    itemCategory.addEventListener("click", function () {
      params.category = itemCategory.dataset.category;
      showProduct();
    });
  });
});
