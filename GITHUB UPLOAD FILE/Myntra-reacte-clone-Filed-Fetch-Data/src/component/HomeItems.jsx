import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
const HomeItems = ({ item }) => {
  const dispatch = useDispatch();

  const addAndRemoveBtn = useSelector((item) => item.bag);
  const elementFound = addAndRemoveBtn.indexOf(item.id) >= 0;

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {!elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={() => dispatch(bagAction.addTobag(item.id))}
        >
          ADD TO BAG
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={() => dispatch(bagAction.removeTobag(item.id))}
        >
          REMOVE
        </button>
      )}
    </div>
  );
};

export default HomeItems;
