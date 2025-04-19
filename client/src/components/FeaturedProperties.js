import React from 'react'
import useFetch from '../hooks/useFetch';
import { RotatingLines } from  'react-loader-spinner'



const FeaturedProperties = () => {
    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
    console.log(data);
  return (
    <div className='fp'>

        {loading?
            <div className="spinner">
                <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={true}
                />
            </div> 
            : <React.Fragment>
            {data.map((item) => (
                <div className="fpItems" key={item._id}>
                <img
                    src={item.photos[0]}
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from {item.cheapestprice}Rs.</span>
                {item.rating && <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                </div>}
            </div>
            ))}
            </React.Fragment>
        }
        
    </div>
  )
}

export default FeaturedProperties