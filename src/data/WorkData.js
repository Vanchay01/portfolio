import work from "../json/work"

export const getWorkById = (id) => {
  return work.find((p) => p.id === Number(id));
};
