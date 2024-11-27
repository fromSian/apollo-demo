import { UpdateIcon } from "@radix-ui/react-icons";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <UpdateIcon width={120} height={120} className="animate-spin" />
    </div>
  );
};

export default Loading;
