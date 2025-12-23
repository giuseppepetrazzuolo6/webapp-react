import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useGlobalContext } from "../contexts/GlobalContext";


export default function DefaultLayout() {
    const { loading } = useGlobalContext

    return (
        <>
            <Header />
            {loading && <div className="loader">loading...</div>}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}