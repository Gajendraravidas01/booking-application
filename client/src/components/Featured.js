import React from 'react'
import useFetch from '../hooks/useFetch'
import { RotatingLines } from  'react-loader-spinner'


const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=jamshedpur,bokaro,varanasi");

  return (
    <div className='featured'>

        {loading ? (
            <div className="spinner">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={true}
            />
            </div>
            ):
            (<React.Fragment>
            <div className="featureitem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" />
            <div className="featuretitle">
                <h1>Jamshedpur</h1>
                <h2>{data[0]} properties</h2>
            </div>
            </div>
            <div className="featureitem">
                <img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" alt="" />
                <div className="featuretitle">
                    <h1>Bokaro</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featureitem">
                <img src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" alt="" />
                <div className="featuretitle">
                    <h1>Varanasi</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div>
        </React.Fragment>)}

    </div>
  )
}

export default Featured