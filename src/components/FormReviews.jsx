import { useState } from "react"
import axios from "axios"

export default function FormReviews({ movieId }) {
    const initialFormState = {
        name: "",
        vote: "",
        text: ""
    }

    const [formData, setFormData] = useState(initialFormState)

    function handleSubmit(event) {
        //event.preventDefault()
        console.log('form submitted', formData)

        axios.post(`http://localhost:3000/api/movies/${movieId}/review`, formData)
            .then((response) => {
                console.log('review submitted', response.data);
                setFormData(initialFormState)
            }).catch((error) => {
                console.error('Error submitting review', error)
            })
    }


    return (
        <section className="formReviews">
            <div className="container">
                <h3>Leave your review</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            aria-describedby="nameHelper"
                            placeholder="Aurelio De Laurentis"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="vote" className="form-label">Vote</label>
                        <select
                            className="form-select"
                            name="vote"
                            id="vote"
                            value={formData.vote}
                            onChange={(e) => setFormData({ ...formData, vote: e.target.value })}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Review</label>
                        <textarea
                            className="form-control"
                            name="text"
                            id="text"
                            rows="5"
                            placeholder="This movie is great"
                            value={formData.text}
                            onChange={(e) => setFormData({ ...formData, text: e.target.value })}>
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}