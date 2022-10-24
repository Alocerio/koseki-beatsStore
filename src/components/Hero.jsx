import koseki from "../assets/koseki.png";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <div className=" h-screen  bg-[url('/src/assets/bg.jpg')] flex justify-center bg-cover drop-shadow-2xl text-white ">
      <div className="max-w-sm p-12 ">
        <div className="flex justify-center">
          <img src={koseki} className="text-center w-80" alt="koseki" />
        </div>

        <div className="p-5 text-center  rounded-xl px-10   ">
          <h3 className="text-xl italic text-white font-normal drop-shadow-2xl  mb-8 ">
            "Your next hit music could be starting from here"
          </h3>
          <a
            className="inline-block px-10 py-2.5 bg-white hover:text-white hover:bg-secondary text-bg font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="/search"
            role="button"
          >
            Let's start
          </a>
        </div>
        <div className="flex justify-center aspect-video ">
          <ReactPlayer
            volume={0.3}
            playing="true"
            className="aspect-video md:w-4 sm-w-1"
            loop="true"
            url="https://www.youtube.com/watch?v=FmalodIhcK4&ab_channel=Koseki"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
