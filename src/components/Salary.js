import React from "react";

const Salary = ({ number }) => {
  let value = [];

  for (let index = 1; index < 13; index++) {
    value.push(number * index);
  }

  return (
    <div className="salary">
      {value.map((item) => (
        <h3>{item}</h3>
      ))}
    </div>
  );
};

export default Salary;
