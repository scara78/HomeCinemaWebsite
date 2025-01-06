import { useGetYTSList } from "../../hooks/getYTSList";
import Movie from "../../components/Movie/Movie";
import NavBar from "../../components/Navbar";
import "./style.css";
export default function Watch() {
  const { resp, err, isLoading } = useGetYTSList([["sort_by", "like_count"]]);
  const {
    resp: respNew,
    err: errNew,
    isLoading: isLoadingNew,
  } = useGetYTSList([["sort_by", "date_added"]]);
  return (
    <>
      <NavBar />
      {!isLoading && !err && (
        <div className="ps-28 pe-28">
          <h1 className="font-extrabold text-4xl">Best Movies</h1>
          <div className="flex gap-16 overflow-x-scroll whitespace-nowrap horz-list mt-20">
            {resp?.map((m, i) => {
              return <Movie key={i} {...m} />;
            })}
          </div>
        </div>
      )}
      {!isLoadingNew && !errNew && (
        <div className="ps-28 pe-28 mt-20 mb-10">
          <h1 className="font-extrabold text-4xl">New Movies</h1>
          <div className="flex gap-16 overflow-x-scroll whitespace-nowrap horz-list mt-20">
            {respNew?.map((m, i) => {
              return <Movie key={i} {...m} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
