import { SongCard } from "./SongCard";

export const SongList = ({ list }) => {
  return (
    <>
      <div className="results mt-5 mb-10 flex justify-center items-center gap-4 flex-wrap">
        {list && list.map((song) => (
          <SongCard key={song.id} {...song} />
        ))}
      </div>
    </>
  );
};
