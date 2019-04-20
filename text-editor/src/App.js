import React, { Component } from 'react';
import './App.css';
import TitleComponent from './TitleComponent.js';
import DisplayComponent from './DisplayComponent.js';
import ButtonComponent from './ButtonComponent.js';
import EditComponent from './EditComponent.js';
import StyleComponent from './StyleComponent.js';

  

class App extends Component {
 constructor(props){
	super(props);
	this.state = {
		par: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" ,
		textarea: '',
    fontSize: '',
    fontName: '',
    fontBold: ''
    }
  }

  toTextarea(){
    this.setState({
      textarea: this.state.par
    });
  }

  changer(e){
    this.setState({
      par: e.target.value,
      textarea: e.target.value
    });
  }

  safer(){
    this.setState({
      textarea: ''
    });
  }
  fontSizeChange(e){
    this.setState({
      fontSize: e.target.value
    });
  }
  fontFamilyChange(e){
    this.setState({
      fontName: e.target.value
    });
  }
  fontBoldChange(e){
    this.setState({
      fontBold: e.target.value 
    });
  }

   render() {
     return (
      <div className="TextEditor">
            <TitleComponent/>
        
            <DisplayComponent
                par = {this.state.par}
                fontSize = {this.state.fontSize}
                fontFamily = {this.state.fontName}
                fontBold = {this.state.fontBold}
            />

            <ButtonComponent
              toTextarea = {this.toTextarea.bind(this)}
              safer = {this.safer.bind(this)}
            />

            <EditComponent 
                textarea = {this.state.textarea}
                changer = {this.changer.bind(this)}
            />  
            <StyleComponent
               fontSize = {this.state.fontSize}
               fontSizeChange = {this.fontSizeChange.bind(this)}
               fontName = {this.state.fontName}
               fontFamilyChange = {this.fontFamilyChange.bind(this)}  
               fontBold = {this.state.fontBold}  
               fontBoldChange = {this.fontBoldChange.bind(this)}     
            />

      </div>
    );
  }
}


export default App;

