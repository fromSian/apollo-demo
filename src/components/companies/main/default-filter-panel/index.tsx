import React from "react";

const DefaultFilterPanel = () => {
  return (
    <div className="w-48 border-r flex h-full flex-col max-h-full">
      <div className="h-6">top</div>
      <div
        className="border-x overflow-y-auto"
        style={{
          height: "calc(100vh - 10rem)",
        }}
      >
        <div className="h-[800px]">middle</div>
      </div>
      <div className="h-6">bottom</div>
    </div>
  );
};

export default DefaultFilterPanel;
