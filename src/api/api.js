import axios from "axios";
import config from "../config.json";
const getQueryParams = (term) => (term && `?term=${term}`) || "";
export default {
  getLocks: async (term) => {
    try {
      const queryParams = getQueryParams(term);
      const resp = await axios.get(`${config.ApiUrl}/lock${queryParams}`);
      return resp.data.data;
    } catch (e) {
      console.log(e);
    }
  },
  getGroups: async (term) => {
    try {
      const queryParams = getQueryParams(term);
      const resp = await axios.get(`${config.ApiUrl}/group${queryParams}`);
      return resp.data.data;
    } catch (e) {
      console.log(e);
    }
  },
  getMedia: async (term) => {
    try {
      const queryParams = getQueryParams(term);
      const resp = await axios.get(`${config.ApiUrl}/medium${queryParams}`);
      return resp.data.data;
    } catch (e) {
      console.log(e);
    }
  },
  getBuildings: async (term) => {
    try {
      const queryParams = getQueryParams(term);
      const resp = await axios.get(`${config.ApiUrl}/building${queryParams}`);
      return resp.data.data;
    } catch (e) {
      console.log(e);
    }
  },
};
