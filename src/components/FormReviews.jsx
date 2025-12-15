export default function FormReviews() {

    return (
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
    )
}