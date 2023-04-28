import { BsArrowRight } from "react-icons/bs";
const ButtonWithIconRight = ({ text }) => {
  return (
    <center className="mt-4 md:mt-8">
      <button className="px-4 md:px-8 py-4 rounded-lg text-sm md:text-lg font-medium text-primary-green ">
        <div className="flex items-center">
          {text}
          <BsArrowRight className="mx-2" />
        </div>
      </button>
    </center>
  );
};

export default ButtonWithIconRight;
