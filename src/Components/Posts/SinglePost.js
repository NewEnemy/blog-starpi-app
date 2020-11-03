import React ,{useState} from 'react';
import styles from './Posts.module.css'
import { Component } from 'react';
import Orderbox from './Orderbox.js'
import FulscreenModial from './FullscreenModial.js'



export default class singlePost extends Component {
    constructor(props){
        super(props)
     
        this.state={
            expanded:false,
            selected:false,
            fullscreen : false
        }
        
    }
 select(that){
    that.setState({selected:!that.state.selected})
 }
 fullscreen(event){

 }

 accessibilityHandler(event){
     if(event.type == 'keyup'){
        if ((event.keyCode|| event.which) === 13) {
            this.props.fullscreenFunc({image:this.props.postImage[0].formats.small.url,
                title:this.props.title})
            }
            if ((event.keyCode|| event.which) === 32 && event.shiftKey) {
               
                this.setState({selected:!this.state.selected})
            } 	
     }
     if(event.type =="focus"){
         setTimeout(()=>{this.setState({expanded:!this.state.expanded})},2000)
        this.setState({expanded:!this.state.expanded})
     }

 }

 componentDidMount(){
    this.element.addEventListener('keyup',(e)=>{ this. accessibilityHandler(e)})
    this.element.addEventListener('focus',(e)=>{ this. accessibilityHandler(e)})
 }
 componentWillUnmount(){
    this.element.removeEventListener('keyup',(e)=>{ this. accessibilityHandler(e)})
    this.element.removeEventListener('focus',(e)=>{ this. accessibilityHandler(e)})
 }
  render() {
        return (


            <div ref={elem => this.element = elem} tabindex="0" className={styles.singleContiner} >
                <i id="FullscreenIcon"  data-clicks ="0" className={"fas fa-expand " +styles.FullscreenIcon} onClick={(e)=>{this.props.fullscreenFunc({image:this.props.postImage[0].formats.small.url,
                                                                                                                                                        title:this.props.title})}}></i>
                <Orderbox function={()=>{this.select(this)}} selected = {this.state.selected}></Orderbox>
                <i className={this.state.selected?"fas fa-check-circle "+styles.selectMarker:styles.hide}></i>
            <div className={styles.postImage}>
            <img src={this.props.postImage[0].formats.thumbnail.url}></img>
            </div>
      
            <div className={styles.details}>
    
       
            <h4>{this.props.title}</h4>
           
            <p  className={this.state.expanded?styles.postBodyExpanded:styles.postBodyColapsed} >{this.props.body} </p>
    
            <span className={this.state.expanded?styles.arrowUp:styles.arrowDown} onClick={()=>{this.setState({expanded:!this.state.expanded})}} ></span>
    
    
            </div>
            <div className={styles.votingContiner}>
        <i className= {"far fa-thumbs-up "+styles.thumbUp}>{this.props.vote.likes}</i>
            <i className= {"far fa-thumbs-down " +styles.thumbDown}>{this.props.vote.dislikes}</i>
            </div>
    
        </div>
          
    
            
        );
    

  }
}

