export const SearchPage = () => {
  return (
    <main className="flex flex-col justify-center h-60">
      <h1 className="text-center text-2xl">Search All Songs</h1>
      <form action="" className="my-4 flex justify-center items-center gap-2">
        <input
          type="text"
          className="border-2 border-amber-500 rounded-md p-2 focus:outline-none w-full md:w-1/3"
          placeholder="Search song"
        />
        <button>
          <img src="./micro-off.png" alt="micro" className="micro" />
        </button>
      </form>
    </main>
  );
};
