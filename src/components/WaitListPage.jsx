import waitListPageBG from "../assets/bg-1.png"
import "./css/WatiListPage.css"
import starLogo from "../assets/star.svg"
import halfStarLogo from "../assets/halfStar.svg"
import { useEffect, useRef, useState } from "react"

const WaitListPage = () => {


    const [waitTimeUpTo3People, setWaitTimeUpTo3People] = useState("5-12 mins")
    const [waitTimeUpTo6People, setWaitTimeUpTo6People] = useState("8-15 mins")

    const[selectedPartySize, setSelectedPartySize] = useState(1)

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[mobileNum, setMobileNum] = useState("")
    const[email, setEmail] = useState("")
    const[request, setRequest] = useState("")


    const selectedLocation = JSON.parse(localStorage.getItem("selected location"))

    const handleSelectedPartySize= (partySize) => {
        setSelectedPartySize(partySize)
    }

    const fourStars = [1, 2, 3, 4]
    const RatingDisplay = () => (
        <div id="ratingStarsContainer">
            {fourStars.map(stars => (
                <img key={stars} src={starLogo} alt="rating-image" className="ratingStars" />
            ))}
            <img src={halfStarLogo} alt="half-rating-image" className="ratingStars"/>
        </div>
    )
    const radioCount = [1, 2, 3, 4, 5, 6, "7+"]
    const RadioDisplay = () => (
        <div className="selectPartySizeContainer">
            
            {radioCount.map((radio, index) => (
                <>
                    <label key={`radioLabel-${radio}`} onClick={() => handleSelectedPartySize(radio)} className={`partySizeLabel ${selectedPartySize === radio? "activeRadio": ""}`} htmlFor={`radio-${radio}`}>{radio}</label>
                    <input key={`radioInout-${radio}`} className="partySizeInput" type="radio" id={`radio-${radio}`}name="partySize"/>
                </>
                
            ))}
        </div>
    )


    return (
        <div id="WaitListPage">
            <img id="waitListPageBG" src={waitListPageBG} alt="Background Image" />

            <div id="locationInfoAndInputFieldContainer">
                <div id="locationInfoContainer">
                    <h2 id="restaurantName">Boiling Point</h2>
                    <div id="ratingContainer">
                        <RatingDisplay/> 
                        <span className="reviewText smallText lowOpacityText">2546 reviews</span>  
                    </div>
                    <p className="priceOfRestaurantText smallText">$$ - Japanese, Hot Pot</p>
                    

                    <p className="locationText mediumText">{selectedLocation.address}</p>


                    <div id="waitListDetailsContainer">
                        <p className="waitListDetailsHeader mediumText">Waitlist Details</p>
                        <ul className="waitListDetailsUnOrderedList">
                            <li className="waitListDetailsList smallText">Check-in with the host upon arrival</li>
                            <li className="waitListDetailsList smallText">Full party required to be seated</li>
                            <li className="waitListDetailsList smallText">If the restaurant is busy, there may be a short wait</li>
                        </ul>
                    </div>

                </div>

                <div id="inputFieldContainer">
                    <div id="waitListInputHeader">
                        <h2 className="largeText">Join the Waitlist</h2>
                        <div className="waitTimeDisplayContainer">
                            <span className="liveText">
                            Live 
                            <span className="forPulsingAnimation"></span>
                            </span>
                            {selectedPartySize < 4 && 
                            <h2 className="largeText waitTimeText">Wait time: <span className="tealText">{waitTimeUpTo3People}</span></h2>}
                            
                            {selectedPartySize >= 4 &&  <h2 className="largeText waitTimeText">Wait time: <span className="tealText">{waitTimeUpTo6People}</span></h2>
                            }

                            {selectedPartySize === "7+" && <h2 className="largeText waitTimeText">Wait time: <span className="redText">Unavailable</span></h2>}
                        </div>

                        <h2 className="radioHeader mediumText radioAndInfoHeader">Select your party size</h2>
                        <RadioDisplay/>

                        <div id="inputFieldSection">
                            <h2 className="inputFieldHeader mediumText radioAndInfoHeader">Your Information</h2>
                            <div className="firstNameAndLastNameInput twoInputDisplayContainer">
                                <input type="text" placeholder="First name" className="smallText inputFields" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                                <input type="text" placeholder="Last name" className="smallText inputFields" value={lastName} onChange={e => setLastName(e.target.value)}/>
                            </div>
                            
                            <div className="phNumAndEmailInput twoInputDisplayContainer">
                                <input type="tel" placeholder="Moblie number" className="smallText inputFields" value={mobileNum} onChange={e => setMobileNum(e.target.value)}/>
                                <input type="email" placeholder="Email" className="smallText inputFields" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            
                            <input type="text" placeholder="Requests (Optional)" className="smallText inputFields" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export {WaitListPage}