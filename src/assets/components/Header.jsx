import { NavLink } from "react-router-dom";

export default function Header() {

    const menu = [
        {
            id: 1,
            text: 'home',
            link: '/'
        },
        {
            id: 2,
            text: 'contacts',
            link: '/contacts'
        }
    ]

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">MOVIES</a>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#main-menu-nav"
                        aria-controls="main-menu-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main-menu-nav">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            {menu.map((item) => (
                                <li className="nav-item" key={item.id}>
                                    <NavLink className="nav-link" to={item.link} aria-current="page">
                                        {item.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}