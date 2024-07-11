import { useContext, useState } from "react"
import "./css/NavBar.css"
import { LocationContext } from "../contexts/LocationContext"

const NavBar = () => {
    const {CAlocationConcard, CAlocationMilpitas, TXlocationAustin, TXlocationHouston, NVlocationLasVegas, NYlocationNewYorkCity} = useContext(LocationContext)

    const locationsArray = [CAlocationConcard, CAlocationMilpitas, TXlocationAustin, TXlocationHouston, NVlocationLasVegas, NYlocationNewYorkCity]
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    const handleNavButtonClick = () => {
        setIsButtonClicked(!isButtonClicked)
    }

    const handleViewLocation = (location) => {
        localStorage.setItem("selected location", JSON.stringify(location))
    }

    return (
        <div className="navBar">
            <button className={`menu-button ${isButtonClicked? "active" : ""}`}  onClick={handleNavButtonClick}>
                <div className="menu-icon"></div>
            </button>

            {isButtonClicked? (
                <div className="navBarLinksContainer">
                    <a className="navBarLinks" href="home-page">Home</a>
                    <a className="navBarLinks" href="location-page" onClick={() => handleViewLocation(locationsArray[0])}>Concard</a>
                    <a className="navBarLinks" href="location-page" onClick={() => handleViewLocation(locationsArray[1])}>Milpitas</a>
                    <a className="navBarLinks" href="location-page" onClick={() => handleViewLocation(locationsArray[2])}>Austin</a>
                    <a className="navBarLinks" href="location-page" onClick={() => handleViewLocation(locationsArray[3])}>Houston</a>
                    <a className="navBarLinks" href="location-page" onClick={() => handleViewLocation(locationsArray[4])}>Las Vegas</a>
                    <a className="navBarLinks" href="location-page" onClick={() => handleViewLocation(locationsArray[5])}>New York City</a>
                </div>
            ):
            (
                <></>
            )}
        </div>
    )
}

export {NavBar}