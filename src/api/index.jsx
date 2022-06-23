import axios from "axios";

const url = "https://aircall-job.herokuapp.com/activities";

export const getCalls = () => axios.get(url);
export const getCall = (id) => axios.get(`${url}/${id}`);
export const postCall = (id, isArchived) =>
  axios.post(`${url}/${id}`, {
    is_archived: isArchived,
  });

export const resetCall = () =>
  axios.get(`https://aircall-job.herokuapp.com/reset`);
