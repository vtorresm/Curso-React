import React, { useState } from "react";

const UseState3 = () => {
  // const [state, setstate] = useState({
  //   clicks: 0,
  //   title: "",
  // });

  const [{clicks, title}, setstate] = useState({
    clicks: 0,
    title: "",
  });

  const merge = (nextState) => {
    setstate({
      ...clicks,
      ...title,
      ...nextState,
    });
  };

  const handleInput = (e) => {
    const valor = e.target.value;
    merge({ title: valor });
  };
  const addClicks = () => {
    merge({ clicks: clicks.clicks + 1 });
  };

  return (
    <div>
      <input type="text" onChange={handleInput} />
      <button onClick={addClicks}>Contador ({clicks.clicks})</button>
    </div>
  );
};

export default UseState3;
