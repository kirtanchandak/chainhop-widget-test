import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="relative z-10 flex items-center justify-center text-white min-h-[calc(100vh-80px)]">
        <div className="px-44">
          <div>
            <h1 className="text-[45px] leading-[52px] font-bold">
              Empowering Lives Through <br /> Innovative AI Technologies.
            </h1>
            <p className="mt-2 text-white text-lg">
              Finding new horizons for visionaries to accelerate their
              innovation and progress.
            </p>
          </div>
          <div className="mt-4 flex gap-4">
            <button className="bg-[#6A35FF] rounded-lg py-2 px-6 font-bold">
              Explore Our Services
            </button>
            <button className="border-[#6A35FF] border rounded-lg py-2 px-4 font-bold">
              Learn more
            </button>
          </div>
          <div>
            <p className="mt-16 text-[18px] font-medium">
              <span className="text-gradient-1">
                From Ideas to Software Solutions
              </span>{" "}
              💡✨
              <span className="text-[#D1D1D1]">
                From Ideas to Software Solutions
              </span>{" "}
              🌟✨
              <span className="text-gradient-2">From Ideas to</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
