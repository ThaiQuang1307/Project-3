export let params = {
  q: "",
  page: 1,
  limit: "12",
  sort: "",
  order: "",
  category: "",
};

export let category = document.querySelector("#category");
export let product = document.querySelector("#products");

export let inputSearch = document.querySelector("#search input");
export let buttonSearch = document.querySelector("#search button");

export let filterPrice = document.querySelector("#filter-price");

export let paginatePre = document.querySelector("#paginate-pre");
export let paginateNext = document.querySelector("#paginate-next");
export let paginateNumber = document.querySelector("#paginate-number");
