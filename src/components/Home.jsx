import React from 'react'
import ImgUpload from './ImgUpload'
import ImgPreview from './ImgPreview'
import { useState } from 'react'
import { enhancedImageAPI } from "../utils/enhanceImageApi";



const Home = () => {

  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setloading(true);
    try {
      const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            setloading(false);
      } catch (error) {
            console.log(error);
            alert("Error while enhancing the image. Please try again later.");
        }
};
  return (
    <>
        <ImgUpload UploadImageHandler={UploadImageHandler}/>
        <ImgPreview
                loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage?.image}
         />
    </>
  )
}

export default Home