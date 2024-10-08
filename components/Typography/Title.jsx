const Title = ({
  intro,
  titleInitial,
  titleEnding,
  subtitle,
  introRequired,
  subtitleRequired,
  bgLineRequired,
}) => {
  return (
    <>
      <div>
        {" "}
        {introRequired === true ? (
          <>
            <p className="capitalize leading-6 font-bold md:font-medium text-center text-primary-orange text-xs md:text-xl mb-1">
              {intro}
            </p>
          </>
        ) : (
          <></>
        )}
        <h2
          className={`text-3xl md:text-5xl mb-2 text-center md:mx-0 leading-normal md:items-center p-2 `}
        >
          {titleInitial} <span className={`font-black ${
            bgLineRequired === true
              ? "bg-title-line bg-no-repeat bg-bottom  "
              : "bg-none"
          }`}>{titleEnding}</span>
        </h2>
        {subtitleRequired === true ? (
          <>
            <p className="leading-5 md:leading-loose font-normal text-center text-primary-grey text-xs md:text-lg mx-8 md:mx-12 mb-8">
              {subtitle}
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Title;


{/* <div className="flex justify-between">
      <div>Child 1</div>
      <div>Child 2</div>
    </div> */}