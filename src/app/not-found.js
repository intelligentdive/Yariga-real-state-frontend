"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
  const router = useRouter();
  setInterval(() => {
    router.push("/dashboard");
  }, 5000);
  return (
    <div className="flex items-center justify-center flex-col gap-5 h-screen w-full">
      <h1 className="text-7xl font-extrabold text-heading">404</h1>
      <h6 className="text-2xl font-semibold text-heading">
        Page nothing found
      </h6>
    </div>
  );
};

export default NotFoundPage;
