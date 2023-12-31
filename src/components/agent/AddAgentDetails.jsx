const AddAgentDetails = () => {
  return (
    <div className="">
      <h2 className="text-lg font-semibold text-heading dark:text-darkHeading">
        My Details
      </h2>
      {/* agent input form */}

      <form className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[20px]">
          {/* first name */}
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-semibold text-heading dark:text-darkHeading mb-[8px] block"
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="Ex: Jobnane"
              className="px-[15px] py-[11px] border border-[#e4e4e4] dark:border-[#272B30] rounded-[9px] outline-none bg-transparent w-full"
            />
          </div>
          {/* last name */}
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-semibold text-heading dark:text-darkHeading mb-[8px] block"
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Ex: Alam"
              className="px-[15px] py-[11px] border border-[#e4e4e4] dark:border-[#272B30] rounded-[9px] outline-none bg-transparent w-full"
            />
          </div>

          {/* Phone number */}
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-semibold text-heading dark:text-darkHeading mb-[8px] block"
            >
              Phone
            </label>
            <input
              type="text"
              placeholder="+0715845462**"
              className="px-[15px] py-[11px] border border-[#e4e4e4] dark:border-[#272B30] rounded-[9px] outline-none bg-transparent w-full"
            />
          </div>

          {/* date of birth */}
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-semibold text-heading dark:text-darkHeading mb-[8px] block"
            >
              Date of Birth
            </label>
            <input
              type="date"
              placeholder="Ex: Alam"
              className="px-[15px] py-[11px] border border-[#e4e4e4] dark:border-[#272B30] rounded-[9px] outline-none bg-transparent w-full"
            />
          </div>

          {/* Gender */}
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-semibold text-heading dark:text-darkHeading mb-[8px] block"
            >
              Gender
            </label>
            <input
              type="text"
              placeholder="Male"
              className="px-[15px] py-[11px] border border-[#e4e4e4] dark:border-[#272B30] rounded-[9px] outline-none bg-transparent w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-semibold text-heading dark:text-darkHeading mb-[8px] block"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="example@exp.com"
              className="px-[15px] py-[11px] border border-[#e4e4e4] dark:border-[#272B30] rounded-[9px] outline-none bg-transparent w-full"
            />
          </div>

          {/* Country */}
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-semibold text-heading dark:text-darkHeading mb-[8px] block"
            >
              Country
            </label>
            <input
              type="text"
              placeholder="Bangladesh"
              className="px-[15px] py-[11px] border border-[#e4e4e4] dark:border-[#272B30] rounded-[9px] outline-none bg-transparent w-full"
            />
          </div>

          {/* Properties */}
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-semibold text-heading dark:text-darkHeading mb-[8px] block"
            >
              Properties
            </label>
            <input
              type="text"
              placeholder="12"
              className="px-[15px] py-[11px] border border-[#e4e4e4] dark:border-[#272B30] rounded-[9px] outline-none bg-transparent w-full"
            />
          </div>
        </div>
        {/* file upload drag and drop */}
        <div className="mt-5">
          <div className="w-full">
            <label
              for="dropzone-file"
              className="flex flex-col items-center w-full  p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-darkWhite dark:border-gray-700 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-text dark:text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>

              <p className="mt-2 text-sm text-text dark:text-darkText text-center leading-[22px]">
                Click to upload or drag and drop <br /> SVG, PNG, JPG or GIF
                (max, 800x400px)
              </p>

              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAgentDetails;
