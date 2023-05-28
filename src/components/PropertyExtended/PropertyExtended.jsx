import { React, useContext,} from "react";
import { useParams } from 'react-router-dom';
import { Context } from '../../context/context';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import '../PropertyExtended/PropertyExtended.css'


function PropertyExtended() {
  const { id } = useParams();
  const {data} = useContext(Context);
 const obj = data.find(element => element.zpid == id)

  return (
    <div id="container-property">

      <div id="card-img-info">

        <div id="property-img-div"> <img id="img-itself" src={obj?.imgSrc} /></div>

        <div id="property-info">
          <div id="info-title"><h1>Property Details</h1></div>
          <div className="info-list-item" ><span className="info-list-item-icon"><LocationOnOutlinedIcon /></span>{`Location: ${obj?.city}`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><LocalAtmOutlinedIcon /></span>{`Price: ${obj?.price}$`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><SingleBedIcon /></span>{`Bedrooms: ${obj?.bedrooms}`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><BathtubIcon /></span>{`Bathrooms: ${obj?.bathrooms}`}</div>
        </div>
      </div>

      <div id="recomanded"><h2>Recomanded For You</h2></div>




    </div>
  )

}

export default PropertyExtended;


