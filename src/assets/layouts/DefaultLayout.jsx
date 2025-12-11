import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {

    return (
        <>
            <Header />
            <main className="vh-100">
                <Outlet />
            </main>
            <footer>footer</footer>
        </>
    )
}