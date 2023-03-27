import React, { useEffect, useState } from "react";
import Model from "../../Model/Model";
import SingleData from "../../SingleData/SingleData";
import Buttun from "../Button/Buttun";

const Cart = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);

  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [uniqueId]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const data = await res.json();
      setData(data.data.tools);
    };
    loadData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-4 my-6">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => {
          // console.log(singleData);
          return (
            <SingleData
              data={singleData}
              setUniqueId={setUniqueId}
              key={singleData.id}
            ></SingleData>
          );
        })}
      </div>
      {!showAll && (
        <label onClick={handleShowAll}>
          <Buttun>See More</Buttun>
        </label>
      )}
      <Model singleData={singleData}></Model>
    </>
  );
};

export default Cart;
