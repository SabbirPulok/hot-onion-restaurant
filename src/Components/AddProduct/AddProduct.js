import React from 'react';
import foodsInfo from '../foodsInfo';
import chooseUsInfo from '../chooseUsInfo';

const AddProduct = () => {
    const handleAddAllProdcut = () =>{
        const allFoods = foodsInfo;
        fetch('http://localhost:4000/addAllProducts',{
            method: 'POST',
            body: JSON.stringify(allFoods),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=> console.log(data))
    }
    const handleAddAllChooseUS = () =>{
        const allChooseUs = chooseUsInfo;
        console.log(allChooseUs);
        fetch('http://localhost:4000/addAllChooseUs',{
            method: 'POST',
            body: JSON.stringify(allChooseUs),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=> console.log(data))
    }
    return (
        <div>
            <h1>Add Product</h1>
            <button onClick={handleAddAllProdcut} className="btn btn-lg btn-info" disabled>Add All Product</button>
            <h1>Add Choose Us</h1>
            <button onClick={handleAddAllChooseUS} className="btn btn-lg btn-info" disabled>Add All Choose Us</button>
        </div>
    );
};

export default AddProduct;