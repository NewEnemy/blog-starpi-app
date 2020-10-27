import React from 'react';
import SinglePost from './SinglePost.js'
import { useQuery,gql } from '@apollo/client';
import styles from './Posts.module.css'

export default function Posts(){

    const postQuery = gql`
    query {
      artPosts{
        title
        body
        id
        likes
        dislikes
       imagePost{
         formats
       }
       
      }
    }
    `
    const{loading,error,data} = useQuery(postQuery)
    if(loading)return <h1>Loading..</h1>
  if(error) return <h1>Error :{console.warn(error)}</h1>


    return( 
      <div className={styles.continer} id="postContiner" style={{left:0}}>

    
      {
      data.artPosts.map(({title,body,id,likes,dislikes,imagePost})=>{
        return(
          <SinglePost id={id} title={title} body={body} postImage = {imagePost} vote={{likes,dislikes}}></SinglePost>
           )
      }
    )
}
    </div>
    )

}



