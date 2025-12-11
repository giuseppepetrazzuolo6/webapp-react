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
        <section className="my-4 py-3">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                    {
                        movies.map(movie =>
                            <div className="col" key={movie.id}>
                                <div className="card">
                                    <img src={`http://localhost:3000/${movie.image}`} alt="" className="card-img-top img-fluid"
                                        style={{ maxHeight: '400px', objectFit: 'fill' }} />
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            {movie.title}
                                        </h3>
                                        <p>{movie.genre}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}