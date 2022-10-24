import koseki from "../assets/koseki.png";
import { Link, animateScroll as scroll } from "react-scroll";
const Header = () => {
  return (
    <div class="  bg-[url('/src/assets/bg.jpg')] flex justify-center bg-cover drop-shadow-2xl text-white md:py-44  xl:py-28">
      <div className=" max-w-sm  ">
        <div className="flex justify-center">
          <img src={koseki} className="text-center w-80" alt="koseki" />
        </div>

        <div className="p-5 text-center  rounded-xl px-10   ">
          <h3 class="text-xl italic text-white font-normal drop-shadow-2xl  mb-8 ">
            "Your next hit music could be starts from here"
          </h3>
          <a
            class="inline-block px-10 py-2.5 bg-white hover:text-white hover:bg-secondary text-bg font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="/search"
            role="button"
          >
            Let's start
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
