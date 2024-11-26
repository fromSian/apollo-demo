const NameCell = ({ row }) => (
  <div className="flex gap-2 items-center">
    <img
      className="rounded-md w-8 h-8"
      src={
        "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/672dd601edde28000154296c/picture"
      }
    />
    <a className="underline" href="www.google.com">
      Google
    </a>
  </div>
);
export default NameCell;
