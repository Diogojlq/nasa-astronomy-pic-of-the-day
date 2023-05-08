import './picturediv.css'
import { useState, useEffect } from 'react'

export default function PictureDiv() {
    const [data, setData] = useState([])

    useEffect(() => {
    fetch('http://localhost:5000')
    .then((res) => res.json())
      .then((resJson) => {
        const data = resJson
        setData(data)
    })
  }, [])
    return (
        <div className="div">
            <img src="{url}" alt="astronomy.jpg" class="center"></img>
            <h2 className='h2'>{data.explanation}</h2>
        </div>
    )
}