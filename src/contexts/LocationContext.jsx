import { createContext, useState } from "react"

import concardLocationImg from "../assets/concardLocationImg.png"
import milpitasLocationImg from "../assets/milpitasLocationImg.png"
import austinLocationImg from "../assets/austinLocationImg.png"
import houstonLocationImg from "../assets/houstanLocationImg.png"
import newYorkCityLocationImg from "../assets/newYorkCityLocationImg.png"
import lasVegasLocationImg from "../assets/lasVegasLocationImg.png"


const LocationContext = createContext()

const LocationContextProvider = ({children}) => {

    const [selectedLocation, setSelectedLocation] = useState()

    const CAlocationConcard = {
        id: 3100,
        image: concardLocationImg,
        cityName: "Concard",
        address: "3100 Willow Pass Rd, Concord, CA 94519, USA",
        phNum: "(925) 123-4567"
    }
    
      const CAlocationMilpitas = {
        id: 1688,
        image: milpitasLocationImg,
        cityName: "Milpitas",
        address: "1688 E Calaveras Blvd, Milpitas, CA 95035, USA",
        phNum: "(408) 345-6789"
      }
    
      const TXlocationAustin = {
        id: 2100,
        image: austinLocationImg,
        cityName: "Austin",
        address: "2100 Barton Springs Rd, Austin, TX 78704, USA",
        phNum: "(512) 987-654"
      }
    
      const TXlocationHouston = {
        id: 1800,
        image: houstonLocationImg,
        cityName: "Houston",
        address: "1800 Allen Pkwy & Memorial Dr, Houston, TX 77019, USA",
        phNum: "(281) 654-7894"
      }
    
      const NVlocationLasVegas = {
        id: 3600,
        image: lasVegasLocationImg,
        cityName: "Las Vegas",
        address: "3600 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
        phNum: "(702) 456-9876"
      }
    
      const NYlocationNewYorkCity = {
        id: 10024,
        image: newYorkCityLocationImg,
        cityName: "New York City",
        address: "New York City, NY 10024, USA",
        phNum: "(646) 345-1235"
      }

      return (


          <LocationContext.Provider value={{selectedLocation, setSelectedLocation, CAlocationConcard, CAlocationMilpitas, TXlocationAustin, TXlocationHouston, NVlocationLasVegas, NYlocationNewYorkCity}}>
            {children}
          </LocationContext.Provider>
      
        
      )
}

export {LocationContext, LocationContextProvider}