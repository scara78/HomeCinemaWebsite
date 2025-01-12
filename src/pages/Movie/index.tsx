import { useParams } from "react-router";
import { useGetYTSMovieDetails } from "../../hooks/getMoviesDetails";
import Button from "../../components/Button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function MoviePage() {
  const params = useParams();
  const { resp, isLoading } = useGetYTSMovieDetails(params.id as string);

  return (
    <>
      <div className="lg:ps-28 lg:pr-28 ps-8 pr-8 md:mt-20 mt-10">
        <div
          className="md:mb-20 mb-10 cursor-pointer"
          onClick={() => {
            location.href = "/watch";
          }}
        >
          <FontAwesomeIcon className="h-8" icon={faChevronLeft} />
        </div>
        <div className="flex items-center md:items-start flex-col-reverse md:flex-row gap-16 flex-wrap md:justify-start justify-center md:flex-nowrap">
          <div className={"blur-[100px] absolute z-0"}>
            <img src={resp?.medium_cover_image} alt="" />
          </div>
          <div
            className={
              "z-20" +
              (isLoading
                ? " loading-background lg:h-[345px] lg:w-[230px] w-[115px] h-[172px]"
                : "")
            }
          >
            <img src={resp?.medium_cover_image} alt="" />
          </div>
          <div className="lg:text-lg flex flex-col gap-3 z-20">
            <h1
              className={
                "text-3xl font-extrabold" +
                (isLoading ? " loading-background w-20" : "")
              }
            >
              {resp?.title} {resp?.year ? `(${resp.year})` : ""}
            </h1>
            <p className={"" + (isLoading ? " loading-background w-10" : "")}>
              Genres : {resp?.genres.join(" / ")}
            </p>
            <div className="flex gap-5 flex-wrap">
              <p>Available in : </p>
              {resp?.torrents.map((t, i) => {
                return (
                  <div
                    key={i}
                    className="lg:text-base text-sm h-fit border-[1px] border-white ps-2 pr-2 cursor-pointer"
                    onClick={() => {
                      if (t.quality === "2160p") {
                        location.href = `/watch/${params.id}/play/${t.hash}?vd_type=mkv`;
                      }
                      location.href = `/watch/${params.id}/play/${t.hash}`;
                    }}
                  >
                    <p
                      className={
                        "" + (t.quality === "2160p" ? "text-yellow-500" : "")
                      }
                    >
                      {t.quality}
                      {""}
                      {t.video_codec === "x265" ? (
                        <span className="text-green-600">.{t.video_codec}</span>
                      ) : (
                        ""
                      )}
                      {t.type != "bluray" ? "." + t.type : ""}
                    </p>
                  </div>
                );
              })}
            </div>
            <p>Rating : {resp?.rating}</p>
            <p>
              Duration : {Math.floor((resp?.runtime as number) / 60)}h{" "}
              {(resp?.runtime as number) -
                Math.floor((resp?.runtime as number) / 60) * 60}
              min
            </p>
            <div className="flex gap-5">
              <Button className="md:text-xl text-lg">Watch</Button>
              <Button
                onClick={() => {
                  location.href =
                    "https://www.youtube.com/watch?v=" + resp?.yt_trailer_code;
                }}
                className="md:text-xl text-lg"
              >
                Trailer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
