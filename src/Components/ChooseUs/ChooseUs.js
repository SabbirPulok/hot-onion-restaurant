import React, { useState, useEffect } from 'react';
import './ChooseUs.css';
import ChooseUsItems from '../ChooseUsItems/ChooseUsItems';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const ChooseUs = () => {
    const [chooseUsElement, setChooseUsElement] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:4000/chooseUs')
        .then(res=>res.json())
        .then(data=>
            {
                setChooseUsElement(data)
                setLoading(false);
            })
        .catch(error=>{
            console.log("error: ",error);
        })
    },[chooseUsElement])
    
    return (
        <section className="choose mt-5">
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <h2>Why you choose us</h2>
                            <p className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore.</p>
                        </div>
                    </div>
                    <div className="row">  
                        <LoaderSpinner loader={loading}></LoaderSpinner>
                        {
                            chooseUsElement.map(element=><ChooseUsItems chooseUs={element} key={element.key}></ChooseUsItems>)
                        }
                     </div>   
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;