import React from "react";

const ShowAll = ({ data, render }) => {
  return <>{data.map((el) => render(el))}</>;
};

export default ShowAll;
