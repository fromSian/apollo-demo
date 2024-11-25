import Title from "@/components/common/title";
import React from "react";
import HeaderRightOperator from "./header-right-operator";

const Header = () => {
  return <Title name="Companies" Extra={<HeaderRightOperator />} />;
};

export default Header;
