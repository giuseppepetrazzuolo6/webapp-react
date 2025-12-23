import { DotWave } from 'ldrs/react'
import 'ldrs/react/DotWave.css'

export default function Loader() {

    return (
        <div className="loader">
            <DotWave
                size="47"
                speed="1"
                color="white"
            />
        </div>
    )
}