import '../FavCard/FavCard.css'

function FavCard({value}) {

    return(
        <div className='fav-card'>

            <img className='images' src={`${value.imgSrc}`} alt="" />
            <div>{value.city}</div>
            <div>{value.price}</div>
            <div>{value.bathrooms}</div>
            <div>{value.bedrooms}</div>


        </div>
    )
    
}

export default FavCard;

