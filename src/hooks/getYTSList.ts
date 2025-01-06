import axios from "axios";
import { useEffect, useState } from "react";

const listEndPoint = " https://yts.mx/api/v2/list_movies.json";

export function useGetYTSList(queries?: string[][]) {
  const [resp, setResp] = useState<MovieMetaData[]>();
  const [err, setErr] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const getList = async (url: string) => {
    const resp = await axios.get(url);
    if (resp.status == 200 || resp.data.status === "ok") {
      let movies: MovieMetaData[] = resp.data.data.movies;
      setResp([]);
      for (let m of movies) {
        setResp((p): MovieMetaData[] => {
          const n: MovieMetaData = {
            title: m.title,
            year: m.year,
            rating: m.rating,
            runtime: m.runtime,
            medium_cover_image: m.medium_cover_image,
          };
          if (!p) {
            return [n];
          }
          return [...p, n];
        });
      }
    } else {
      setErr(resp.data.error);
    }
  };
  useEffect(() => {
    const url = new URL(listEndPoint);
    if (queries) {
      for (let q of queries) {
        url.searchParams.set(q[0], q[1]);
      }
    }
    getList(url.href)
      .catch((e) => {
        if (typeof e.err === "string") {
          setErr(e.err);
        } else {
          setErr("unexpected error while getting movies list");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { resp, isLoading, err };
}
