import { SongCard } from "./SongCard";

export const SongList = ({ list }) => {
  return (
    <>
      <div className="results pt-5 pb-40 flex justify-center items-center gap-4 flex-wrap">
        {list && list.map((song) => (
          <SongCard key={song.id} {...song} />
        ))}
      </div>
    </>
  );
};
