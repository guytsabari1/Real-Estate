import { Context } from '../../context/context';
import { React, useContext, useEffect, useState } from "react";
import PropertyCard from '../PropertyCard/PropertyCard';
import FilterBarProperties from '../../components/FilterBarProperties/FilterBarProperties';
import '../Properties/Properties.css'

function Properties() {
  const { data, favArr, setFavArr, savedUserChoises } = useContext(Context);

  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    let filteredData = data;

    if (savedUserChoises.city) {
      filteredData = filteredData.filter(obj => obj.city === savedUserChoises.city);
    }
    if (savedUserChoises.type) {
      filteredData = filteredData.filter(obj => obj.homeType === savedUserChoises.type);
    }
    if (savedUserChoises.bedrooms) {
      filteredData = filteredData.filter(obj => obj.bedrooms === Number(savedUserChoises.bedrooms));
    }
    if (savedUserChoises.bathrooms) {
      filteredData = filteredData.filter(obj => obj.bathrooms === Number(savedUserChoises.bathrooms));
    }

    if (savedUserChoises.price === 'High to Low') {
      filteredData.sort((a, b) => b.price - a.price);
    } else if (savedUserChoises.price === 'Low to High') {
      filteredData.sort((a, b) => a.price - b.price);
    }

    setSortedData(filteredData);
  }, [savedUserChoises, data]);

  return (
    <div className="property-page">

      <FilterBarProperties />

      <div className='properties-main'>
      {sortedData.map((item, index) => (
        <PropertyCard favArr={favArr} setFavArr={setFavArr} value={item} index={index} key={index} />
      ))}
      </div>
      
      
    </div>
  );
}

export default Properties;