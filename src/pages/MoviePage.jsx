import { useParams } from "react-router-dom"

export default function MoviePage() {

    const { id } = useParams()

    return (
        <div>
            <h1>Movie Page: {id}</h1>
        </div>
    )
}