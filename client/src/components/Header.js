import React, { useContext, useState } from 'react'
import { faBed, faCalendar, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import { AuthContext } from '../context/AuthContext';

const Header = ({type}) => {
    const[opendate,setOpendate] = useState(false);
    const[destination,setDestination] = useState("");
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const[opensearch,setOpensearch] = useState(false);
    const[options,setOptions] = useState({
        adult : 1,
        children : 0,
        room : 1
    })


    const handleOption = (name,operation) =>{
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const{dispatch} = useContext(SearchContext);

    const navigate = useNavigate();
    const{user} = useContext(AuthContext);

    const handlesearch = () => {
        dispatch({type : "NEW_SEARCH", payload : {destination,dates,options}});
        navigate("/hotels", { state: { destination, dates, options } });
    }
  return (
    <div className='header'>
        <div className={type === "list" ? "headercontainer listMode" : "headercontainer"}>
            <div className="headerlist">
                <div className="headerlistitems active">
                    <FontAwesomeIcon icon= {faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerlistitems ">
                    <FontAwesomeIcon icon= {faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerlistitems">
                    <FontAwesomeIcon icon= {faCar} />
                    <span>Car rentels</span>
                </div>
                <div className="headerlistitems">
                    <FontAwesomeIcon icon= {faBed} />
                    <span>Attraction</span>
                </div>
                <div className="headerlistitems">
                    <FontAwesomeIcon icon= {faTaxi} />
                    <span>Airport Taxies</span>
                </div>
            </div>
            { type !== "list" &&
            <React.Fragment>
            <h1 className='headertitle'>A lifetime discount? its genius.</h1>
            <p className='headerdesp'>Get rewards for your travels-unlock saving of 10% or more with a free Gkrbooking account.</p>
            {!user && 
                <Link to={"/login"}>
                    <button className='headerbutton'>Register/Login</button>
                </Link>
            }
            <div className="headersearch">
                <div className="headersearchitems">
                    <FontAwesomeIcon icon = {faBed} className='searchitemicons' />
                    <input 
                        className='headersearchinput' 
                        type="text" 
                        placeholder='where are you going?' 
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <div className="headersearchitems">
                    <FontAwesomeIcon icon= {faCalendar} className='searchitemicons'/>
                    <span  onClick={() => setOpendate(!opendate)}>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                    {opendate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                        className='date'
                        value={opendate}
                        minDate={new Date()}
                    />}
                </div>
                <div className="headersearchitems">
                    <FontAwesomeIcon icon= {faPerson} className='searchitemicons'/>
                    <span onClick={() => setOpensearch(!opensearch)}>{`${options.adult} adult  ${options.children} children  ${options.room} room`}</span>
                    {opensearch && <div className="options">
                        <div className="optionsitems">
                            <span>adult</span>
                            <div className="optioncounter">
                                <button 
                                    className='optioncounterbtn' 
                                    onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>-
                                </button>
                                <span>{options.adult}</span>
                                <button 
                                    className='optioncounterbtn' 
                                    onClick={() => handleOption("adult", "i")}>+
                                </button>
                            </div>
                        </div>
                        <div className="optionsitems">
                            <span>children</span>
                            <div className="optioncounter">
                                <button 
                                    className='optioncounterbtn' 
                                    onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>-
                                </button>
                                <span>{options.children}</span>
                                <button 
                                    className='optioncounterbtn' 
                                    onClick={() => handleOption("children", "i")}>+
                                </button>
                            </div>
                        </div>
                        <div className="optionsitems">
                            <span>room</span>
                            <div className="optioncounter">
                                <button 
                                    className='optioncounterbtn' 
                                    onClick={() => handleOption("room", "d")} disabled={options.room <= 1}>-
                                </button>
                                <span>{options.room}</span>
                                <button 
                                    className='optioncounterbtn' 
                                    onClick={() => handleOption("room", "i")}>+
                                </button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headersearchitems">
                    <button onClick={handlesearch} className='searchbutton'>Search</button>
                </div>
            </div> 
            </React.Fragment>}
        </div>
    </div>
  )
}

export default Header