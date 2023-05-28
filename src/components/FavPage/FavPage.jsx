import React from 'react';
import { Context } from '../../context/context';
import { useContext } from "react";
import FavCard from '../FavCard/FavCard'
import '../FavPage/FavPage.css'

function FavPage() {
  const {favArr} = useContext(Context);
    return(
      <div className='fav-page'>
      {favArr.map((item, index) => (<FavCard value={item} index={index} key={index} />))}
    </div>
    )
    
  }
  
  export default FavPage

