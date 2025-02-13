"use client";

import { useRouter } from "next/navigation";

const useBackNavigation = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return handleBack;
};

export default useBackNavigation;
