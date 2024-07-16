import client from "../http-user";

const getImages = () => {
  return client.get("/images");
};

export default { getImages };
