import useBackNavigation from "@/hooks/useBackNavigation";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const StyledFichevronLeft = () => {
  const goBack = useBackNavigation();

  return <FiChevronLeft cursor="pointer" size="26px" onClick={goBack} />;
};

export default StyledFichevronLeft;
