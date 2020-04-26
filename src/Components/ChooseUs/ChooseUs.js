import React from 'react';
import './ChooseUs.css';
import chooseUsInfo from '../chooseUsInfo';
import ChooseUsItems from '../ChooseUsItems/ChooseUsItems';



const ChooseUs = () => {
    const chooseUsEle = [...chooseUsInfo];

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
                        {
                            chooseUsEle.map(element=><ChooseUsItems chooseUs={element} key={element.key}></ChooseUsItems>)
                        }
                     </div>   
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;