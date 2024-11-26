import TooltipSimple from "@/components/ui/tooltip-simple";
import React, { useEffect, useRef, useState } from "react";
import Detail from "./detail";

const ActionsCell = ({ row }) => {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSave = () => {
    setLoading(true);
    timerRef.current = setTimeout(() => {
      setSaved((v) => !v);
      setLoading(false);
    }, 4000);
  };
  return (
    <div>
      {saved ? (
        <Detail />
      ) : loading ? (
        <TooltipSimple content={"loading"} className="text-gray-400 hover-gray">
          save
        </TooltipSimple>
      ) : (
        <button
          className="hover-gray hover:bg-hover_gray active:scale-95"
          onClick={handleSave}
        >
          save
        </button>
      )}
    </div>
  );
};

export default ActionsCell;
