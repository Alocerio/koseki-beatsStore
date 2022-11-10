//https://www.youtube.com/watch?v=FmalodIhcK4&ab_channel=Koseki
const Hero = () => {
  return (
    <section className="flex justify-center items-center sx:px-3 sx:pt-10  xl:pt-32">
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <p className="text-lg font-medium leading-8">KRS-ONE once said: </p>
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
            "Hip hop is a human skill, and the practice of real hip hop should
            remind us of our humanity."
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            Welcome to the web, here you will find the compilation of my work
            and more important you can listen and buy my instrumentals directly.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            type="button"
            href="/beats"
            class="transform rounded-md bg-black px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Find your beat
          </a>
          <a
            href="/"
            className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
          >
            {" "}
            Licences{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
