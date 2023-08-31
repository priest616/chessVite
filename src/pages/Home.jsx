const Home = () => {
  return (
    <>
      <div className="relative flex items-center justify-between w-full px-20">
        <div className="absolute inset-0 bg-[#000] blur z-[-1] opacity-[.7] motion-safe:animate-pulse"></div>
        <div className="w-full space-y-6">
          <h2 className="font-[900] font-[Capriola] uppercase bg-gradient-to-tr from-[#C99C3E] via-[#9b7df2] to-[#9C84E1] bg-clip-text text-transparent">
            take your chess game to the next level
          </h2>
          <p>
            Connect with top ranked chess players from around the world and
            learn the secrets to becoming a chess master
          </p>
          <button className="px-4 py-2 capitalize border shadow-2xl rounded-2xl shadow-[#888]">
            become a master
          </button>
        </div>
        <div className="absolute inset-0 bg-[#c2bfbf] opacity-[.2] blur-3xl"></div>
        <div className="flex items-center justify-end w-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/3d-people-playing-pack/512/playing_chess.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
