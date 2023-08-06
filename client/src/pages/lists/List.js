import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem';
import useFetch from '../../hooks/useFetch';
import { RotatingLines } from  'react-loader-spinner'



const List = () => {
  const location = useLocation();
  // console.log(location);
  const[destination,setDestination] = useState(location.state.destination);
  const[dates,setDates] = useState(location.state.dates);
  const[options,setOptions] = useState(location.state.options);
  const[opendate,setOpendate] = useState(false);
  const[min, setMin] = useState(undefined);
  const[max, setMax] = useState(undefined);

  const { data, loading, error,reFetch } = useFetch(`/hotels?city=${destination}&min=${min || 0 }&max=${max || 6000}`);

  const handleSearch = () => {
    reFetch();
  }
  return (

    <div>
      <Navbar/>
      <Header type="list" />
      <div className="listcontainer">
        <div className="listwrapper">
          <div className="listsearch">
            <h1>search</h1>
            <div className="lsitem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="lsitem">
              <label htmlFor="">check-in date</label>
              <span className='lsitemdate' onClick={() => setOpendate(!opendate)}>{`${format(
                dates[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
              {opendate && <DateRange
                onChange={(item) => setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
              />}
            </div>
            <div className="lsitem ">
                <label htmlFor="">options</label>
                <div className="isoptions">
                  <div className="lsoptionitem">
                    <span className="lsoptiontext">
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className="lsoptioninput" onChange={(e) => setMin(e.target.value)}/>
                  </div>
                  <div className="lsoptionitem">
                    <span className="lsoptiontext">
                      max price <small>per night</small>
                    </span>
                    <input type="number" className="lsoptioninput" onChange={(e) => setMax(e.target.value)}/>
                  </div>
                  <div className="lsoptionitem">
                    <span className="lsoptiontext">
                      Adult 
                    </span>
                    <input type="number" min={1} className="lsoptioninput" placeholder={options.adult}/>
                  </div>
                  <div className="lsoptionitem">
                    <span className="lsoptiontext">
                      Children
                    </span>
                    <input type="number" min={0} className="lsoptioninput" placeholder={options.children}/>
                  </div>
                  <div className="lsoptionitem">
                    <span className="lsoptiontext">
                      Room
                    </span>
                    <input type="number" min={1} className="lsoptioninput" placeholder={options.room}/>
                  </div>
                </div>
            </div>
            <button className='lsbtn' onClick={handleSearch}>Search</button>
          </div>
          <div className="listresult">
            {loading ? 
              <div className="spinner">
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={true}
              />
              </div>
              :<React.Fragment>
              {data.map((item) => (

                <SearchItem item = {item} key={item._id}/>

              ))}
              </React.Fragment>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List