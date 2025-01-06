import { faStar, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Movie(m: MovieMetaData) {
  return (
    <>
      <div
        className="w-[230px] relative h-[345px] shrink-0 cursor-pointer"
        style={{
          backgroundImage: `url("${m.medium_cover_image}")`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full opacity-0 hover:opacity-100 relative pt-10 bg-[#0000009c] duration-300">
          <h1 className="text-center text-wrap font-bold">{m.title}</h1>
          <div className="flex flex-col-reverse gap-2 mt-5 justify-center">
            <h1 className="font-extrabold text-center">{m.rating} / 10 </h1>{" "}
            <FontAwesomeIcon icon={faStar} className="h-5" />
          </div>
          <div className="flex justify-center gap-1 mt-5">
            <FontAwesomeIcon icon={faStopwatch} className="h-5" />
            <h1>{m.runtime} min</h1>
          </div>
        </div>
      </div>
    </>
  );
}
