import { useCompaniesUI } from "@/stores/companies-ui";

const OperateBar = () => {
  const toggleShowFilterShow = useCompaniesUI(
    (state) => state.toggleShowFilterShow
  );
  return (
    <div className="operate-bar border-b">
      <button onClick={toggleShowFilterShow}>toggle</button>
    </div>
  );
};

export default OperateBar;
