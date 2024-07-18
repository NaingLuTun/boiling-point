import { useContext, useEffect, useMemo, useState } from "react"
import { LocationContext } from "../contexts/LocationContext"
import LazyLoad from "react-lazyload"

import logo from "../assets/bpLogo-removebg-preview.png"
import drawing from "../assets/hotpot drawing.jpg"
import normalSet from "../assets/normal-set.jpg"
import premiumSet from "../assets/wagyu-beef.jpg"
import locationIcon from "../assets/locationIcon.svg"
import mapOfUSA from "../assets/mapOfUSA.jpg"
import restaurantImageOne from "../assets/restaurantImg1.jpg"
import restaurantImageTwo from "../assets/restaurantImg2.jpg"
import restaurantImageThree from "../assets/restaurantImg3.jpg"
import restaurantImageFour from "../assets/restaurantImg4.jpg"
import homepageTopBackgroundImg from "../assets/bg-1.png"

import { NavBar } from "./NavBar"
import { Footer } from "./Footer"


import "./css/HomePage.css"
const HomePage = () => {


    const {CAlocationConcard, CAlocationMilpitas, TXlocationAustin, TXlocationHouston, NVlocationLasVegas, NYlocationNewYorkCity} = useContext(LocationContext)


    const locationsIconArray = [1, 2, 3, 4]


    const LocationIcons = () => locationsIconArray.map(location => (
        <img 
        key={location}
        src={locationIcon}
        alt="locationIcon"
        className={`locationIconOnMap location${location}`}
        width="10px"/>
    ))

    const restaurantImagesArray = [restaurantImageOne, restaurantImageTwo, restaurantImageThree, restaurantImageFour]

    const RestaurantImages = () => (
        restaurantImagesArray.map((images, index) => (
            <img
            key={index}
            src={images}
            alt="restaurantImages"
            className={`retaurantImages restaurant${index}`}
            width="250px"
            height="160px"/>
        )))

    
    const locationsArray = [CAlocationConcard, CAlocationMilpitas, TXlocationAustin, TXlocationHouston, NVlocationLasVegas, NYlocationNewYorkCity]

    useEffect(() => {
        localStorage.setItem("selected location", "home-page")
    }, [])

    const handleViewLocation = (selectedLocation) => {
        localStorage.setItem("selected location", JSON.stringify(selectedLocation))
        
    }

    const Locations = () => (
        locationsArray.map(location => (
            <div key={location.id} className="locationsDetails">
                <h2>{location.cityName}</h2>
                <p>{location.address}</p>
                <p>{location.phNum}</p>

                <a href="location-page"><button className="locationsDetailsButtton" onClick={() => handleViewLocation(location)}>Details</button></a>
                <hr />
            </div>
        ))
    )

    return (
         <div id="home-page">
            
            <NavBar className="navBar"/>
            <div id="homePageTopsection">
                <div id="hompagebackgroundAndLogoContainer">
                    <img id="topBackground" src={homepageTopBackgroundImg} alt="homePageBackground-image"/>

                    <div id="homePageLogoContainer">
                        <a href="home-page" id="homePageLogo"><img  src={logo} alt="logo" width="300px" /></a>
                    </div>
                    
                </div>
                

                <h1 id="mainSlogan">Your All-You-Can-Eat-Hot-Pot Paradise</h1>
                <div id="hotpotInfoContainer">
                    <img id="hotPotDrawing" src={drawing} alt="hot pot drawing" />

                    <div id="hotpotInfo">
                    <p id="aboutBoilingPoint">
                    Unleash endless flavor at Boiling Point Shabu Shabu! Our all-you-can-eat-hot-pot experience lets you customize simmering broths with thinly sliced meats, fresh veggies, and a symphony of dipping sauces. It's a feast for your senses and a social gathering unlike any other.
                    </p>


                    <div id="whatIsShabuShabu"> 
                        <p className="what">What</p> 
                        <p className="is">is </p> 
                        <p className="shabu">Shabu </p> 
                        <p className="shabuu">Shabu?</p>   
                    </div> 
                    <p id="aboutShabuShabu">
                        <br />
                    Shabu-shabu ("swish-swish") is a Japanese hot pot where diners cook ultra-thin meat by swirling it in a savory kombu and dashi broth. Fresh veggies join the party, and everyone customizes their bites with dipping sauces. It's a fun, interactive feast!
                    </p>
                    </div>
                    
                </div>
                
            </div>

            <div id="setSection">
                <h2 id="setsTitle">Available sets</h2>
                <p id="setsSubTitle">Enjoy the freedom of self-serve hot pot! Upgrade to Premium Set for endless servings of our melt-in-your-mouth <span className="wagyu">Wagyu beef</span>.</p>

                <div id="sets">
                    <LazyLoad>
                        <div id="normalSet">
                            <img id="normalSetImg" src={normalSet} alt="normal set" width="300px" height="500px" />
                            <div id="normalSetInfo">
                                <p id="normalSetTitle">Normal Set</p>
                                <div className="listContainer">
                                    <ul id="normalListInfo">
                                        <li className="setLists">Time limit - 1:30 hours</li>
                                        <li className="setLists">Unlimited broth refill</li>
                                        <li className="setLists">Unlimited desserts, soft drinks and juices</li>
                                        <li className="setLists">Unlimited self-serve hot pot</li>
                                    </ul>
                                </div>
                                <p className="price">$24.99 PER PERSON</p>
                            </div>
                            
                        </div>
                    </LazyLoad>
                    
                
                    <LazyLoad>
                        <div id="premiumSet">
                            <img id="premiumSetImg" src={premiumSet} alt="premium set" width="300px" height="500px" />

                            <div id="premiumSetInfo">
                                <p id="premiumSetTitle">Premium Set</p>
                                    <div className="listContainer">
                                        <ul id="premiumListInfo">
                                            <li className="setLists">Time limit - 2:30 hours</li>
                                            <li className="setLists">Unlimited broth refill</li>
                                            <li className="setLists">Unlimited <span className="wagyu">Wagyu beef</span></li>
                                            <li className="setLists">Unlimited beers, sakes, and cocktails</li>
                                            <li className="setLists">Unlimited desserts, soft drinks and juices</li>
                                            <li className="setLists">Unlimited self-serve hot pot</li>
                                        </ul>
                                    </div>
                                    <p className="price">$49.99 PER PERSON</p>
                            </div>
                        </div>
                    </LazyLoad>
                
                </div>
                
            </div>

            <div id="locations">
                <h1 id="locationsTitle">Proudly Serving Shabu-Shabu Delights Across the United States</h1>

                <div id="restaurantImagesContainer">
                    
                    <RestaurantImages/>

                </div>
                
                <div id="mapAndButton">
                    <div id="locationMap">
                        <img src={mapOfUSA} id="mapOfUSA" alt="map of usa" width="400px"  />
                        <LocationIcons/>
                    </div>
                
                    
                    <div id="bookingText">
                        Book a table at the nearest location <img id="locationIcon" src={locationIcon} alt="locationIcon" width="20px" /> 
                    </div>
                </div>

                <div id="locationDetailsContainer">
                    <Locations/>
                </div>
                
                
            
            </div>

            <Footer/>

        </div>
      
    )
}

export {HomePage} 