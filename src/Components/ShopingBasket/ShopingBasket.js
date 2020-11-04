import React, { Component,useState } from 'react';
import ModialBasket from './Components/ModialDetails.js'
import basketControler,{basketInit} from '../ShopingBasket/scripts/shopingBasket'
import styles from './ShopingBasket.module.css'

export default class ShopingBasket extends Component {
  constructor(props){
    super(props)
    this.state={
      basket:0,
      expanded:false
    }
  }
upd = (itemsInBasket)=>{
  this.setState({basket:itemsInBasket})
  }
  componentDidMount(){
    basketInit(this.upd)
    this.setState({basket:basketControler.countItems()})
  }
  
  render() {
    return (
      <>
      <div className={styles.basketContiner} onClick={()=>{this.setState({expanded:!this.state.expanded})}}> 
      <div className={styles.circle}>{this.state.basket}</div>
        <i class="fas fa-shopping-basket"></i>
        </div>
        {this.state.expanded?<ModialBasket controler = {basketControler}></ModialBasket>:""}
        </>
    );
  }
}
