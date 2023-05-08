const API_URL = 'http://localhost:5000'

export default async function Requests () {
    const data =  await fetch(`${API_URL}`);
    console.log(data)
    return data.json()
}