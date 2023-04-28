const RoundedButton = ({ text, icon }) => {
  return (
    <>
      <button className="px-4 md:px-8 py-4 rounded-lg bg-primary-orange text-xs md:text-base font-medium text-white w-full">
        {text}
      </button>
    </>
  );
};

export default RoundedButton;
