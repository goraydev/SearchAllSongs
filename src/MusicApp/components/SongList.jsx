import { SongCard } from "./SongCard";

export const SongList = ({ list }) => {
  console.log(list);
  return (
    <>
      <div className="animate__animated animate__backInUp results pt-5 pb-40 flex justify-center items-center gap-4 flex-wrap -z-10">
        {list && list.map((song) => (
          <SongCard key={song.id} {...song} />
        ))}
      </div>
    </>
  );
};
