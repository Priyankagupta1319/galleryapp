// Write your code here.
const ThumbnailItem = props => {
  const {gallarydetails} = props
  const {thumbnailUrl, thumbnailAltText} = gallarydetails

  return (
    <li>
      <img src={thumbnailUrl} alt={thumbnailAltText} />
    </li>
  )
}

export default ThumbnailItem
