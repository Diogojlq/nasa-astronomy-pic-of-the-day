import './picturediv.css'
import { useState, useEffect } from 'react'

export default function PictureDiv() {
  const [image, setImage] = useState([])

  useEffect(() => {
  fetch('http://localhost:5000')
  .then((res) => res.json())
    .then((resJson) => {
      const image = resJson.url
      setImage(image)
  })
}, [])
    return (
        <div className="div">
            <img src={image} alt="astronomy.jpg" class="center"></img>
        </div>
    )
}