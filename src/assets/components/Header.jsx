import NavBar from "./NavBar";

export default function Header() {

    const menu = [
        {
            id: 1,
            text: 'Home',
            link: '/'
        },
        {
            id: 2,
            text: 'Contacts',
            link: '/contacts'
        }
    ]

    return (
        <header>
            <NavBar menu={menu} />
        </header >
    )
}