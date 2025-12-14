import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

export default function MoviePage() {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(response => {
                console.log(response);
                setMovie(response.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])

    function getRating(vote) {

        let stars = []

        for (let i = 1; i <= vote; i++) {
            stars.push(<i className="bi bi-star-fill"></i>)
        }
        for (let i = 1; i <= 5 - vote; i++) {
            stars.push(<i className="bi bi-star"></i>)
        }
        return stars

    }

    return (
        <>
            <div className="container mt-4">
                <div className="row g-3">
                    <div className="col-12 col-md-4">
                        <div className="card_image">
                            <img src={`http://localhost:3000/${movie?.image}`} alt=""
                                style={{ width: '250px' }} />
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <h2 className="my-3">{movie?.title}</h2>
                        <p><b>Director:</b> <em>{movie?.director}</em></p>
                        <p><b>Genre:</b> <em>{movie?.genre}</em></p>
                        <p><b>Release year:</b> <em>{movie?.release_year}</em></p>
                        <p><b>Plot:</b> {movie?.abstract}</p>
                        <Link className='btn btn-dark mt-5' to={`/`}>Back to Movies</Link>
                    </div>
                </div>
            </div>
            <hr />
            <section className="formReviews">
                <div className="container">
                    <h3>Leave your review</h3>
                    <form>
                        <div className="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="name"
                                id="name"
                                aria-describedby="nameHelper"
                                placeholder="Aurelio De Laurentis" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="vote" class="form-label">Vote</label>
                            <select
                                class="form-select"
                                name="vote"
                                id="vote">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="review" className="form-label">Review</label>
                            <textarea
                                className="form-control"
                                name="review"
                                id="review"
                                rows="5"
                                placeholder="This movie is great"
                            ></textarea>
                        </div>
                        <button type="submit" class="btn btn-dark">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
            <hr />
            <section id="reviewsList">
                <div className="container">
                    <h3 className="mb-4">Reviews</h3>
                    {movie?.reviews.map(review =>
                        <div className="card p-3 mb-3" key={review.id}>
                            <strong>{review.name}</strong>
                            <p>
                                {review.text}
                            </p>
                            <div className="rating">
                                {getRating(review.vote)}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>

    )
}