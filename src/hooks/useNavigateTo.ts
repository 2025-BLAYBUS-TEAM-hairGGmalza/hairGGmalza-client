"use client";

import { useRouter } from "next/navigation";

const useNavigateTo = () => {
  const router = useRouter();

  const navigateTo = (page: string) => () => {
    router.push(page);
  };

  return navigateTo;
};

export default useNavigateTo;
