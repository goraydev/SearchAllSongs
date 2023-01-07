import { useNavigate } from "react-router-dom";

export const SongCard = ({
  id,
  title_short,
  duration,
  rank,
  artist,
  album,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/song/${id}`);
  };

  return (
    <>
      {/*<!-- Component: Blog card with action button --> */}
      <div className="card overflow-hidden bg-white dark:bg-slate-700 rounded shadow-md text-slate-500 dark:text-slate-400 shadow-slate-300 dark:shadow-slate-900">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={album.cover_big}
            alt={album.title}
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="flex gap-4 mb-4">
            <a
              href="#"
              className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
            >
              <img
                src={artist.picture_small}
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <div>
              <h3 className="text-xl font-medium text-slate-700 dark:text-white">
                {title_short.slice(0, 20)}
              </h3>
              <p className="text-sm text-slate-400"> By {artist.name}</p>
            </div>
          </header>
          <p>Duration: {duration}</p>
          <p>Rank: {rank} </p>
        </div>
        {/*  <!-- Action base sized link button --> */}
        <div className="flex justify-end gap-2 p-2 pt-0">
          <button
            className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-gray-500 hover:bg-amber-500 hover:text-white focus:bg-amber-200 focus:text-amber-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-amber-300 disabled:shadow-none disabled:hover:bg-transparent dark:text-slate-400 dark:hover:text-white"
            onClick={handleClick}
          >
            <span>Read more</span>
          </button>
        </div>
      </div>
      {/*<!-- End Blog card with action button --> */}
    </>
  );
};
