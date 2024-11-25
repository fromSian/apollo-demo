import Header from "@/components/companies/header";
import Main from "@/components/companies/main";
import React, { useState } from "react";

const Companies = () => {
  const [showRightPanel, setShowRightPanel] = useState(false);

  return (
    <>
      <div className="flex flex-col flex-1">
        <Header />
        <Main />
      </div>
      {showRightPanel && <div className="border">123</div>}
    </>
  );
};

export default Companies;
