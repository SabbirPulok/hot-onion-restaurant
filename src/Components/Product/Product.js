import React, { useState} from 'react';
import './Product.css';
import foodsInfo from '../foodsInfo';
import ProductItems from '../ProductItems/ProductItems';
import { Link } from 'react-router-dom';
const Product = (props) => {

    const food = [...foodsInfo];
    const [selectedFood, setSelectedFood] = useState("lunch");
    const foodChoice = food.filter(fd => fd.type === selectedFood);
    //console.log(foodChoice);
    
    return (
        <section>
            <div className="container my-5">
                <nav>
                    <ul className="nav justify-content-center">
                        <li onClick={()=>{setSelectedFood("breakfast")}} className="nav-item">
                            <span to="breakfast" className={selectedFood==="breakfast"? "nav-link active": "nav-link"}>Breakfast</span>
                        </li>
                        <li onClick={()=>{setSelectedFood("lunch")}} className="nav-item">
                            <span to="lunch" className={selectedFood==="lunch"? "nav-link active": "nav-link"}>Lunch</span>
                        </li>
                        <li onClick={()=>{setSelectedFood("dinner")}} className="nav-item">
                            <span to="dinner" className={selectedFood==="dinner"? "nav-link active": "nav-link"}>Dinner</span>
                        </li>
                    </ul>
                </nav>
                <div className="row justify-content-around spacing">
                    {
                        foodChoice.map(pd => <ProductItems product={pd} key={pd.key} ></ProductItems>)
                    }
                </div>
                <div className="text-center">
                    {
                        props.cart.length?
                        <Link to="/checkout">
                            <button className="btn btn-secondary btn-danger">Checkout Your Food</button>
                        </Link>
                        :
                        <button disabled className="btn btn-secondary btn-danger">Checkout Your Food</button>
                        
                    }
                    
                </div>
            </div>
        </section>   
    );
};

export default Product;