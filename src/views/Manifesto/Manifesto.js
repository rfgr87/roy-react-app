import React from 'react'
import MainFeaturedPost from "/Users/royguzman/Documents/My Web Apps 2/My Web Projects/roy-react-app/src/views/Manifesto/MainFeaturedPost.js";
import image1 from "/Users/royguzman/Documents/My Web Apps 2/My Web Projects/roy-react-app/src/roy-fotos/Aurora2.jpg";



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