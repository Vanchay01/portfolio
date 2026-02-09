import work from "../json/work.js"

export const getWorkById = (id) => {
  return work.find((p) => p.id === Number(id));
};
