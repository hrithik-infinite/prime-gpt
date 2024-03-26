import React from 'react'

const VideoTitle = ({movie}) => {
    const { adult, title, original_language, vote_average, id, backdrop_path, description } = movie;
    

    console.log(adult, title, original_language, vote_average, id, backdrop_path, description);
  return (
    <div className="bg-black w-full h-[250px]">VideoTitle</div>
  )
}

export default VideoTitle