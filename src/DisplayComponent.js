import  React,{ Component } from 'react';
import './DisplayComponent.css';

class DisplayComponent extends Component {
   render() {
     return (
			<div className="DisplayBlock">
                 <p className="DisplayComponentP"
                    style = {{fontSize: this.props.fontSize, 
                              fontFamily: this.props.fontName,
                              fontWeight: this.props.fontWeight}}>
                      {this.props.par}
                 </p>
            </div>
        	);
 }
}

export default DisplayComponent;