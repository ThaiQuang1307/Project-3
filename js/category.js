import { API_CATEGORY } from "./const.js";
import { getAPI } from "./getApi.js";
import { category } from "./variable.js";

getAPI(API_CATEGORY).then((data) => {
  let htmlArray = data.map((item) => {
    return `
            <div class="category-item">
                ${item}
            </div>
        `;
  });

  let htmlString = htmlArray.join("");
  category.innerHTML = htmlString;
});
