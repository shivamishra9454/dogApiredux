function User({ data }: any) {
  // const {data} = props

  return (
    <figure className="md:flex flex bg-blue-100  h-20 text-2xl text-center	 items-center	 rounded-xl p-8 md:p-0 dark:bg-gray-800">
      <div className="flex items-center justify-space text-sky-500 dark:text-sky-400">

      </div>

      <div>
        <h1 className="text-sky-500 dark:text-sky-400">
          {data.name} Component
        </h1>
        <h1 className="text-sky-500 dark:text-sky-400">{data.age} </h1>
      </div>
    </figure>
  );
}

export default User;
