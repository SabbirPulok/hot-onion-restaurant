import React from 'react';
import reactangleSpinner from '../../images/icon/rectangleSpinner.gif';
import earthSpinner from '../../images/icon/earthSpinner.gif';

const LoaderSpinner = (props) => {
    const loader = props.loader?"block":"none";

    return (
        <div className="text-center col-12 py-5 my-5" style={{display: loader}}>
            <img src={earthSpinner} alt=""/>
        </div>
    );
};

export default LoaderSpinner;