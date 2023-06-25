import React from "react";
import MyTable from "../MyTable";
const Table = () => {
  return (
    <div>
      <MyTable nColumns={76} nRows={5} />
      <MyTable nColumns={10} nRows={10} />
      <MyTable nColumns={76} nRows={5} />
      <MyTable nColumns={10} nRows={10} />
      <MyTable nColumns={76} nRows={5} />
    </div>
  );
};
export default Table;
