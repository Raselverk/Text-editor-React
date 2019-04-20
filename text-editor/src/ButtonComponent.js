import React, { Component } from 'react';
import './ButtonComponent.css';

class ButtonComponent extends Component {
   render() {
     return (
			<div className="ButtonBlock">
                 <button onClick={this.props.toTextarea}>Edit</button>
                 <button>Style</button> 
                 <button onClick={this.props.safer}>Safe</button> 
                 <button>Add</button>  
                 <button>Block</button>  
              </div>
		
        	);
 }
}

export default ButtonComponent;