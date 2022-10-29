import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export const Song = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const header = "3a28efbae9msh33beba2add552bbp19053djsn4de28e3b0af3";
  const url = `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`;
  const track = useFetch(url, header).data;
  if (track === null) return;
  const { title, artist, album, preview, track_position } = track;

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      {/*<!-- Component: Horizontal card--> */}
      <div className="mt-10 animate__animated animate__fadeInDownBig flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src={album.cover_big}
            alt={album.title}
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
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
              <h3 className="text-xl font-medium text-slate-700">
                {album.title}
              </h3>
              <p className="text-sm text-slate-400"> By {artist.name}</p>
            </div>
          </header>
          <div className="card-info flex flex-col gap-2">
            <p>Song: {title}</p>
            <p>Track position: {track_position}</p>
            <audio src={preview} controls="true"></audio>
          </div>
          <div className="mt-4 flex justify-start gap-2 p-2 pt-0">
            <button
              className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-white-500 bg-amber-500 hover:text-white focus:bg-amber-200 focus:text-amber-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-amber-300 disabled:shadow-none disabled:hover:bg-transparent"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>

              <span>Come back</span>
            </button>
          </div>
        </div>
      </div>
      {/*<!-- End Horizontal card--> */}
    </>
  );
};
