export const getAPI = async (api) => {
  let response = await fetch(api);
  let result = await response.json();
  return result;
};
