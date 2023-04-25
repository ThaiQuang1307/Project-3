import { getAPI } from "./getApi.js";
import { API_PRODUCT } from "./const.js";
import { showProduct } from "./showProduct.js";
import {
  buttonSearch,
  inputSearch,
  params,
  paginatePre,
  paginateNext,
  paginateNumber,
  filterPrice,
} from "./variable.js";

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

// paginate
paginatePre.addEventListener("click", function () {
  if (params.page > 1) {
    params.page = params.page - 1;
    paginateNumber.innerHTML = params.page;
    showProduct();
  }
});

paginateNext.addEventListener("click", function () {
  params.page = params.page + 1;
  paginateNumber.innerHTML = params.page;
  showProduct();
});

// End paginate

// Filter Price
filterPrice.addEventListener("change", function (e) {
  if (e.target.value == "mac-dinh") {
    params.sort = "";
    params.order = "";
  } else if (e.target.value == "gia-thap-den-cao") {
    params.sort = "price";
    params.order = "asc";
  } else if (e.target.value == "gia-cao-den-thap") {
    params.sort = "price";
    params.order = "desc";
  } else if (e.target.value == "giam-gia-nhieu") {
    params.sort = "discountPercentage";
    params.order = "desc";
  }
  showProduct();
});
// End Filter Price
