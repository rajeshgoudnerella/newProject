import './index.css'

const DestinationItem = props => {
  const {eachItem} = props

  return (
    <li>
      <img src={eachItem.imgUrl} alt={eachItem.name} className="image" />
      <p className="name">{eachItem.name}</p>
    </li>
  )
}
export default DestinationItem
