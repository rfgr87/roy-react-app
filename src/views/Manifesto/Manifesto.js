import React from 'react'
import MainFeaturedPost from "./MainFeaturedPost.js";
import image1 from "./Aurora2.jpg";



const mainFeaturedPost = {
  title: 'Manifesto',
  image: image1,
  imgText: 'main image description',
};


const Manifesto = () => {

      return (    
        <div>
        <MainFeaturedPost/>
        </div>      
      )
  }

export default Manifesto