import React from 'react';

export default background => {
    return(
        <div className="outerClass">
            <div className="top">
                <div className="innerClassTop" id="topSquare"></div>
                <div className="innerClassTop innerModTop" id="topSquareDiagonal"></div>
            </div>
            <div className="bottom">
                <div className="innerClassBottom toRight" id="bottomSquare"></div>
                <div className="innerClassBottom innerModBottom" id="bottomSquareDiagonal"></div>
            </div>
        </div>
    );
}