function Card() {
  return (
    <figure className="md:flex bg-blue-100 rounded-xl p-8 md:p-0 dark:bg-blue-800">
      <img
        className="w-24 h-24 md:w-48 p-2 border border-sky-500 md:h-auto md:rounded-none rounded-full mx-auto"
        src="https://upload.wikimedia.org/wikipedia/en/f/fb/Katara.png"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium  p-2 border-4 border-blue-500  ">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
          <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
