import React, { ReactNode } from "react";

type TitleProps = {
  name: string;
  Extra?: ReactNode;
};
const Title = ({ name, Extra }: TitleProps) => {
  return (
    <div className="flex w-full justify-between items-center border-b-2 rounded-sm p-4 h-16">
      <p className="text-xl font-bold">{name}</p>
      {Extra && Extra}
    </div>
  );
};

export default Title;
