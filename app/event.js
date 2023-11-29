function Event({ data }) {
  const eventDate = new Date(data.date);

  return (
    <div className={"bg-dark-blue rounded-xl md:w-1/5 w-full "}>
      <div
        style={{ "--image-url": `url(${data.picture_url})` }}
        className={" h-40 rounded-t-xl  bg-cover bg-[image:var(--image-url)]"}
      >
        <div className={"bg-blue-gray rounded-tl-xl w-14 rounded-br-lg pt-3 "}>
          <p className={"uppercase text-white text-sm text-center"}>
            {eventDate.toLocaleString("default", { month: "short" })}
          </p>
          <p className={"text-white font-avenir-black text-3xl  text-center"}>
            {eventDate.getDate()}
          </p>
        </div>
      </div>

      <div className={"p-5"}>
        <h1 className={"text-white font-avenir-black text-left mb-3"}>
          {data.title}
        </h1>

        <div className={"bg-blue-gray rounded-full"}>
          <p className={"text-white text-sm  text-center"}>
            <span
              className={
                "inline-flex mr-2 items-center justify-center w-3 h-3 bg-white rounded-full "
              }
            ></span>
            {data.date}
          </p>
        </div>

        {data.register_url && (
          <a
            href={data.register_url}
            target="_blank"
            className={
              " text-center block px-6 py-1 mt-4 text-sm text-pale-red bg-white uppercase font-avenir-black text-blue-100 no-underline rounded hover:bg-pale-red  hover:text-white"
            }
          >
            Register now
          </a>
        )}
      </div>
    </div>
  );
}

export default Event;
