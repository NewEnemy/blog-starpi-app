import React, { useState } from 'react';
import SinglePost from './SinglePost.js'
import { useQuery,gql } from '@apollo/client';
import styles from './Posts.module.css'
import FulscreenModial from './FullscreenModial.js'


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
    const [fullscreen,setFullscreen] = useState(false);
    const{loading,error,data} = useQuery(postQuery)
    const [modialData,setModialData]= useState({
      image:'',
      title:''
    })


    
    function swithFullscreen(args){
      if(args=="close"){
        setFullscreen(!fullscreen)
        return
      }
      setFullscreen(!fullscreen)
     setModialData({
       image:args.image,
       title:args.title
     })
 


    }


    if(loading)return <h1>Loading..</h1>
  if(error) return <h1>Error :{console.warn(error)}</h1>

    if(fullscreen){
return(<FulscreenModial modialData = {modialData} closeFunction={swithFullscreen}></FulscreenModial>)
    }


    return( 
      <div className={styles.continer} id="postContiner" style={{left:0}}>
  
      {
      data.artPosts.map(({title,body,id,likes,dislikes,imagePost})=>{
        return(
          <SinglePost fullscreenFunc={swithFullscreen} id={id} title={title} body={body} postImage = {imagePost} vote={{likes,dislikes}}></SinglePost>
           )
      }
    )
}
    </div>
    )

}



