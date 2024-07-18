import { API } from "../api/api";

export const getComments = () => {
  return API.get("/comments", {
    params: {
      sortBy: "id",
      order: "desc",
    },
  });
};

export const addComment = (comment) => {
  return API.post("/comments", comment);
};

export const deleteComment = (id) => {
  return API.delete("/comments/" + id);
};
