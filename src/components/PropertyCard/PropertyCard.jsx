
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../PropertyCard/PropertyCard.css';

function PropertyCard({ value, setFavArr }) {
  const cardStatusKey = `cardStatus_${value.zpid}`;
  const [cardStatus, setCardStatus] = useState(() => {
    const storedStatus = localStorage.getItem(cardStatusKey);
    return storedStatus ? JSON.parse(storedStatus) : false;
  });

  useEffect(() => {
    localStorage.setItem(cardStatusKey, JSON.stringify(cardStatus));
  }, [cardStatus, cardStatusKey]);

  function addToFav() {
    const newCardStatus = !cardStatus;
    setCardStatus(newCardStatus);

    if (newCardStatus) {
      setFavArr(prev => [...prev, value]);
      setFavArr(prev => [...new Set(prev)]);
    } else {
      setFavArr(prev => prev.filter(property => property.zpid !== value.zpid));
    }
  }

  return (
    <div key={value.zpid} className="property-card">
      <Link to={`/properties/${value.zpid}`}>
        <img className="images" src={value.imgSrc} alt="Failed to import the property pic" />
      </Link>
      <div>{value?.city}</div>
      <div>{value?.price}</div>
      <div>{value?.bathrooms}</div>
      <div>{value?.bedrooms}</div>
      <button className="add-to-fav-btn" onClick={addToFav}>{cardStatus ? "Remove from" : "Add to"} fav list</button>
    </div>
  );
}

export default PropertyCard;