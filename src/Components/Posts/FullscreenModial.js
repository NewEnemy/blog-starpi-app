import React, { Component } from 'react';
import styles from './Posts.module.css'


export default class FullscreenModial extends Component {
    constructor(props){
      super(props)
      this.element =''
    }
 
  accessibilityHandler(event){

    if((event.keyCode|| event.which) === 13){
      this.props.closeFunction("close")
    }

  }
  componentDidMount(){
    this.element.addEventListener('keyup',(e)=>{this.accessibilityHandler(e)})
    this.element.focus()
  }
  componentWillUnmount(){
    this.element.removeEventListener('keyup',(e)=>{this.accessibilityHandler(e)})
  }
  render() {
    
    return (
      <div className={styles.GreyOut}>

     
      <div tabIndex="0" ref={elem => this.element = elem}  className={styles.FullscreenModial}>
     
      <div className={styles.closeButton} onClick={()=>{this.props.closeFunction("close")}}>
        <i class="fas fa-times"></i>
        </div>


      <div className={styles.imageContiner}>
      <img src={this.props.modialData.image}></img>
      </div>
   
        </div>
        </div>
    );
  }
}
