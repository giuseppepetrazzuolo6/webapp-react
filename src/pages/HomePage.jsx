import { Link } from 'react-router-dom';
import axios from "axios"
import { useEffect, useState } from "react"
import { useGlobalContext } from '../contexts/GlobalContext';

export default function HomePage() {
    const [movies, setMovies] = useState([])

    const { setLoading } = useGlobalContext()

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                console.log(response);
                setMovies(response.data)
            })
            .catch(err => {
                console.log(err.message);
            }).finally(() => {
                setLoading(false)
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
                                        <p><b>Genre:</b> {movie.genre}</p>
                                        <Link className='btn btn-dark mt-1' to={`/movies/${movie.id}`}>View Details</Link>
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