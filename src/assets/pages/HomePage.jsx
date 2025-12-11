import axios from "axios"
import { useEffect, useState } from "react"

export default function HomePage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                console.log(response);
                setMovies(response.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])


    return (
        <h1>movies</h1>
    )
}