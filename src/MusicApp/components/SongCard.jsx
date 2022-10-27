export const SongCard = ({ id, title, duration, rank, artist, album }) => {
  return (
    <>
      {/*<!-- Component: Blog card with action button --> */}
      <div className="card overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src="https://picsum.photos/id/1081/800/600"
            alt="card image"
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
                src="https://i.pravatar.cc/48?img=25"
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                In the urban Jungle
              </h3>
              <p className="text-sm text-slate-400"> By Mary Jay, jun 3 2023</p>
            </div>
          </header>
          <p>Duration</p>
          <p>Rank</p>
        </div>
        {/*  <!-- Action base sized link button --> */}
        <div className="flex justify-end gap-2 p-2 pt-0">
          <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-gray-500 hover:bg-amber-500 hover:text-white focus:bg-amber-200 focus:text-amber-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-amber-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span>Read more</span>
          </button>
        </div>
      </div>
      {/*<!-- End Blog card with action button --> */}
    </>
  );
};
