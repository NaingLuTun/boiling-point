import { useContext } from "react"
import { LocationContext } from "../contexts/LocationContext"


const LocationPage = () => {

    const {selectedLocation, setSelectedLocation} = useContext(LocationContext)



    return (
        <>
            {/* <NavBar/>*/}
            

        </>
    )
}

export {LocationPage}