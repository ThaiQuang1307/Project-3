import { showProduct } from "./showProduct.js";
import { buttonSearch, inputSearch, params } from "./variable.js";

// show list product
showProduct();
// end show list product

// Search product
const search = () => {
  let value = inputSearch.value;
  params.q = value;
  showProduct();
};

buttonSearch.addEventListener("click", function () {
  search();
});

inputSearch.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    search();
  }
});
// End Search product
