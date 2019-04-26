import React, { Component } from 'react';
import './EditComponent.css';

class EditComponent extends Component {
   render() {
     return (
			<div className="EditBlock">
                  <textarea value={this.props.textarea} onChange={this.props.changer}></textarea>
              </div>
        	);
 }
}

export default EditComponent;