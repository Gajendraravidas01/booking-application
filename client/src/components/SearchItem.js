import React from 'react'
import { Link } from 'react-router-dom';

const SearchItem = ({item}) => {
    // console.log(item);
  return (
    <div className='searchitem'>
        <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            alt=""
            className="siImg"
        />
        <div className="sidesc">
            <h1 className="sititle">{item.name}</h1>
            <span className="sidistance">{item.distance}m from center</span>
            <span className="sitaxiop">Free airport taxi</span>
            <span className="sisubtitle">
            Studio Apartment with Air conditioning
            </span>
            <span className="sifeatures">
            {item.desc}
            </span>
            <span className="sicancelop">Free cancellation </span>
            <span className="sicancelopsubtitle">
            You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            {item.rating && <div className="siRating">
                <span>Excellent</span>
                <button>{item.rating}</button>
            </div>}
            <div className="siDetailTexts">
                <span className="siPrice">{item.cheapestprice}Rs.</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <Link to={`/hotels/${item._id}`}>
                    <button className="siCheckButton">See availability</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem