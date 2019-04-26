import React, { Component } from 'react';
import './StyleComponent.css';


class StyleComponent extends Component {
   render() {
     return (
			<div className="StyleBlock">
                <form>
        			<div className="radio">
        			    <label >
        			    	Text Size:
		          				<label>
		          				  12pt
												<input 
												  onClick={this.props.fontSizeChange}
		            					type="radio"
		            					value="12pt"
													name="textSize" 
		            					/>
		          				</label>

		          				<label>
		          				  14pt
												<input 
													onClick={this.props.fontSizeChange}
		            					type="radio" 
		            					value="14pt"
		            					name="textSize"/>
					          	</label>

					          	<label>
					          	   16pt
												<input 
												  onClick={this.props.fontSizeChange}
		            				 	type="radio"
		            				 	value="16pt" 
		            				 	name="textSize"/>
		          				</label>

		          				<label>
		          				    18pt
													<input 
														onClick={this.props.fontSizeChange}
		            				  	type="radio" 
		            				  	value="18pt" 
		            				  	name="textSize"/>
		          				</label>
          				 </label>
        			</div>

        			<label>
          					Font Family: 
          					<select >
            					<option onClick={this.props.fontFamilyChange} value="Tahoma">Tahoma</option>
            					<option onClick={this.props.fontFamilyChange} value="Vernada">Vernada</option>
         						<option onClick={this.props.fontFamilyChange} value="Times new roman">Times new roman</option>
             				 </select>
        			</label>
        		</form>

        		<form>

        			<label>
          				Bold
				          <input
						    onChange = {this.props.fontBoldChange}
						    defaultChecked = {this.props.FontNormalChange}
				            name="bold"
							type="checkbox"
							value="normal" />
        			</label>

        			<label>
          				Italic
				          <input
				            name="italic"
				            type="checkbox" />
        			</label>

        			<label>
          				Underline
				          <input
				            name="underline"
				            type="checkbox" />
        			</label>
        		</form>

      			
             </div>
        	);
 }
}

export default StyleComponent;