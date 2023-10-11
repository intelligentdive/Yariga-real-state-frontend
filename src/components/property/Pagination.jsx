const Pagination = () => {
  return (
    <div class="flex">
      <a
        href="#"
        class="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed rtl:-scale-x-100 dark:bg-darkWhite dark:text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>

      <a
        href="#"
        class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors bg-main duration-300 transform  rounded-md sm:inline dark:bg-main dark:text-gray-200 hover:bg-main dark:hover:bg-main hover:text-white dark:hover:text-white"
      >
        1
      </a>

      <a
        href="#"
        class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-darkWhite dark:text-gray-200 hover:bg-main dark:hover:bg-main hover:text-white dark:hover:text-white"
      >
        2
      </a>

      <a
        href="#"
        class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-darkWhite dark:text-gray-200 hover:bg-main dark:hover:bg-main hover:text-white dark:hover:text-white"
      >
        3
      </a>

      <a
        href="#"
        class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-darkWhite dark:text-gray-200 hover:bg-main dark:hover:bg-main hover:text-white dark:hover:text-white"
      >
        4
      </a>

      <a
        href="#"
        class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-darkWhite dark:text-gray-200 hover:bg-main dark:hover:bg-main hover:text-white dark:hover:text-white"
      >
        5
      </a>

      <a
        href="#"
        class="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-darkWhite dark:text-gray-200 hover:bg-main dark:hover:bg-main hover:text-white dark:hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

export default Pagination;
