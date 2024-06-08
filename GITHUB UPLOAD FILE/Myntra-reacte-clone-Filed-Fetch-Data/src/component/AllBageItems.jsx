import React from "react";
import Bag from "./Bag";
import BagItems from "./BagItems";
import { useSelector } from "react-redux";

const AllBageItems = () => {
  const bagItems = useSelector(store => store.bag)
  const items = useSelector(store => store.item)
  const FinalItem = items.filter(item => {
    const ItemFound = bagItems.indexOf(item.id) 
    return ItemFound >=0
  })
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {FinalItem.map(items => <BagItems key={items.id} item={items} />)}
      </div>
      <Bag />
      </div>

    </main>
  );
};

export default AllBageItems;
