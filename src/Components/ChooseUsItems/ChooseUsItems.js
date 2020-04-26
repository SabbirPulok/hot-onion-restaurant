import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight,faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './ChooseUsItems.css';
const ChooseUsItems = (props) => {
    const {title,image,icon} = props.chooseUs;

    const text = "Our order for two plates of mutton biriyani was delivered at the table almost immediately and we wondered how our senior citizen appetites could handle the generous quantity. We ate (almost) one and packed the other."

    const [isCollapse, setIsCollapse] = useState(false);

    const handleShowMore = ()=> 
    {
        setIsCollapse(true)
    }
    const handleShowLess = () =>{
        setIsCollapse(false)
    }
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={image} className="card-image-top" style={{height:"auto"}} alt=""/>
                <div className="card-body">
                    <div className="d-flex">
                        <img src={icon} className="mr-2"alt=""/>
                        <div>
                            <h5>{title}</h5>
                            <p>
                                {
                                    isCollapse?text:text.substr(0,35)+"..."
                                }
                            </p>
                            {
                                isCollapse?
                                <span onClick={handleShowLess} className="card-link collapse-btn">See Less <FontAwesomeIcon icon={faArrowAltCircleLeft} className="icon"></FontAwesomeIcon></span>
                                :
                                <span onClick={handleShowMore} className="card-link collapse-btn">See More <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon"></FontAwesomeIcon></span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default ChooseUsItems;