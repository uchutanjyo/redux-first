import { useSelector } from "react-redux";



const Navbar = () => {

    const { amount } = useSelector(store => store.cart )

    console.log(useSelector((store) => {
        console.log(store)
    }))
    

    return (
        <>
        <nav>
            <div className="nav-center">Navbar</div>
            </nav>
        </>
    )
}
export default Navbar;