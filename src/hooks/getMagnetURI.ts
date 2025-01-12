import axios from "axios";
import { useEffect, useState } from "react";

export const api: string = "http://localhost:8080/";

export const streamEndPoint = "/api/stream";
const magnetURIEndpoint = "/api/get_magnet_uri";

export function useGetMagnetURI(hash: string) {
  const [resp, setResp] = useState<string>("");
  const [err, setErr] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  if (!hash) {
    setIsLoading(false);
    setErr("hash is required");
  }
  const get = async (url: string) => {
    const resp = await axios.get(url);
    if (resp.status === 200) {
      let m: string = resp.data.magnetURI;
      setResp(m);
    } else {
      setErr("unexpected error while getting magnet URI");
    }
  };
  const fetch = () => {
    setIsLoading(true);
    const url = new URL(magnetURIEndpoint, api);
    url.searchParams.set("hash", hash);
    get(url.href)
      .catch((e) => {
        setErr(e);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    fetch();
  }, []);
  return {
    resp,
    err,
    isLoading,
    setErr,
  };
}
