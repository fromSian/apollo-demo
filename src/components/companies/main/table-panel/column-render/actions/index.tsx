import TooltipSimple from "@/components/ui/tooltip-simple";
import { PlusCircledIcon, PlusIcon } from "@radix-ui/react-icons";
import React, { useEffect, useRef, useState } from "react";
import Detail from "./detail";

const ActionsCell = () => {
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
    }, 1000);
  };
  return (
    <div>
      {saved ? (
        <Detail />
      ) : loading ? (
        <TooltipSimple
          content={"loading"}
          className="border-button opacity-30 flex gap-1 items-center "
        >
          <PlusIcon />
          Save
        </TooltipSimple>
      ) : (
        <button
          className="flex gap-1 items-center border-button active:scale-95"
          onClick={handleSave}
        >
          <PlusIcon />
          Save
        </button>
      )}
    </div>
  );
};

export default ActionsCell;
