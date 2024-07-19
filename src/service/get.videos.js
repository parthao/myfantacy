import client from "../http-user";

const getVideos = () => {
  return client.get("/videos");
};

export default { getVideos };
