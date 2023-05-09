import './explanation.css'
import { useState, useEffect } from 'react';

export default function Explanation() {
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
        <h2 className='h2'>{data.explanation}</h2>
    )
}