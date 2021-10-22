import React, { Component } from 'react';
import Circle from 'react-circle';


export default class Percentage extends Component {
    render() {
        const achievedPercentage=((this.props.achieved.length/(this.props.remain.length+this.props.achieved.length))*100).toFixed(2);
        return (
            <div className="row ">
                
                <div className="col-md-5  mx-3 my-5" >
                    <div style={{fontSize:"30px"}} className="my-5 mx-4 fw-bolder">Salesperson ID :<span className="text-dark" style={{fontWeight:"bolder"}}>{" "+this.props.id}</span> </div>
                    <div className="my-5 mx-4" style={{fontSize:"30px"}}>Salesperson Name:<span style={{fontWeight:"bolder"}}> Joseph</span></div>
                    <div className="my-5 mx-4" style={{fontSize:"30px"}}>Achieved Tasks  : <span style={{fontWeight:"bolder"}}> {" "+achievedPercentage} %</span></div>
                </div>
                
                <div className="col-md-5" style={{ width: 400, height: 400 }}>
                
                    <Circle
                        animate={true} // Boolean: Animated/Static progress
                        responsive={true} // Boolean: Make SVG adapt to parent size
                        size={10} // Number: Defines the size of the circle.
                        lineWidth={24} // Number: Defines the thickness of the circle's stroke. 
                        progress={achievedPercentage} // Number: Update to change the progress and percentage.
                        progressColor="cornflowerblue"  // String: Color of "progress" portion of circle.
                        bgColor="white" // String: Color of "empty" portion of circle.
                        textColor="black" // String: Color of percentage text color.
                        textStyle={{ 
                            font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                        }}
                        percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                        
                        
                    />
                </div>
            </div>
        )
    }
}
