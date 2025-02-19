"use client";

import { useRouter } from "next/navigation";

const useNavigateTo = (page: string) => {
  const router = useRouter();

  const navigateTo = () => {
    router.push(page);
  };

  return navigateTo;
};

export default useNavigateTo;
