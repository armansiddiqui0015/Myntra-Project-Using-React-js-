import React from "react";
import Bag from "./Bag";
import BagItems from "./BagItems";

const AllBageItems = () => {
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
      <BagItems />
      </div>
      <Bag />
      </div>

    </main>
  );
};

export default AllBageItems;
