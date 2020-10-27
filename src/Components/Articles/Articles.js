import React, { Component } from 'react';
import Article from './Article.js'
import { useQuery,gql } from '@apollo/client';


import styles from './Articles.module.css'
const postQuery = gql`
query {
  articles{
    title
    content
  }
}`

export default function Articles (){

    const{loading,error,data} = useQuery(postQuery)
    
    if(loading){
        return <h1>Just wait a sec</h1>
    }

    if(error){
        return <h4>ERROR</h4>
    }
return(
    <div className={styles.articlesContiner}>
    {
    data.articles.map(({title,content})=>{
      return <Article title={title} content={content} ></Article>
        
     })
    }
    </div>

     )
 
 
    
    

}