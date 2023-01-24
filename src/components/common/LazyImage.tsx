import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useState } from 'react'

interface LazyImageProps {
  src: string
  className: string
  scrollPosition: any
  placeholder: string
}

function LazyImage({
  src,
  className,
  scrollPosition,
  placeholder,
}: LazyImageProps) {
  const [loading, setLoading] = useState(true)
  const handleLoadingToggle = () => {
    setLoading(!loading)
  }
  return (
    <>
      {loading && <img src={placeholder} className="w-full" />}
      <LazyLoadImage
        src={src}
        className={className}
        afterLoad={handleLoadingToggle}
        placeholderSrc="/images/default/weapon.png"
        scrollPosition={scrollPosition}
      />
    </>
  )
}

export default LazyImage

/* 

*/
