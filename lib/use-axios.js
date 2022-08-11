import axios from "axios";
import { useAppBridge } from "@shopify/app-bridge-react";
import { getSessionToken } from "@shopify/app-bridge-utils";

/*
 * It adds a session (auth bearer) token to header for all API calls when made using this function
 * which is used to get shopURL and accessToken
 */
function useAxios() {
  const app = useAppBridge();
  const instance = axios.create();
  instance.interceptors.request.use(async function (config) {
    const token = await getSessionToken(app);
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  });
  return [instance];
}

export default useAxios;
