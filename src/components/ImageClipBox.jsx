const ImageClipBox = ({src, containerClass}) => {
  return (
    <div className={containerClass}>
      <img src={src} alt="Image" />
    </div>
  )
}
export default ImageClipBox
