import React from 'react'
import withImageLoader from 'react-image-loader-hoc';

const Image = () => {
    const Image = props => (<img alt="/logo192.png" {...props} />);
    const ImageWithLoader = withImageLoader(Image);
  return (
    <div>
        <ImageWithLoader
            src="/logo192.png"
            width="400px"
            height="200px"
          />
    </div>
  )
}

export default Image
