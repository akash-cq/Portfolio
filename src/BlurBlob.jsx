import React from 'react'
import PropTypes from "prop-types"; 
export default function BlurBlob({position,size}) {
    const {top,left} = position
    const {height , width} = size
  return (
    <div className='absolute' style={{top:top,left:left,width:width,height:height,tranform:'translate(-50%,-50%'}}>
    <div className='w-full h-full bg-purple-500 rounded-full opacity-40 blur-3xl animate-blob'></div>
    </div>
  )
}
BlurBlob.PropTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};
