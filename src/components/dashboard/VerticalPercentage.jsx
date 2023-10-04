const VerticalPercentage = ({ progress, bg, text }) => {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between">
        <h2 className="text-heading dark:text-darkHeading text-base font-medium">
          {text}
        </h2>
        <h6 className="text-base font-semibold text-heading dark:text-darkHeading ">
          {progress}%
        </h6>
      </div>

      <div className="w-full h-2 bg-[#e4e8e4] rounded-md relative mt-[10px]">
        <div
          className="absolute top-0 left-0 transition-all duration-300 h-full rounded-md"
          style={{
            width: `${progress}%`,
            backgroundColor: `${bg}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default VerticalPercentage;
