"use client";

import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 h-screen w-full">
      <h1 className="text-7xl font-extrabold text-heading dark:text-darkHeading">
        404
      </h1>
      <h6 className="text-2xl font-semibold text-heading dark:text-darkHeading">
        Page nothing found
      </h6>
    </div>
  );
};

export default NotFoundPage;
