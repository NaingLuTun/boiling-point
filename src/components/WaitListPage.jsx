import waitListPageBG from "../assets/bg-1.png"
import starLogo from "../assets/star.svg"
import halfStarLogo from "../assets/halfStar.svg"
import facebookLogo from "../assets/faceboolLogoForWL.svg"
import instagramLogo from "../assets/instagramLogoForWL.svg"

import "./css/WatiListPage.css"
import "./css/Modal.css"

import { useEffect, useMemo, useState } from "react"
import {validate} from "react-email-validator"
import PhoneInput from 'react-phone-number-input/input'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import { Footer } from "./Footer"

const WaitListPage = () => {


    const [waitTimeUpTo3People, setWaitTimeUpTo3People] = useState("5-12 mins")
    const [waitTimeUpTo6People, setWaitTimeUpTo6People] = useState("8-15 mins")

    const[selectedPartySize, setSelectedPartySize] = useState(1)

    const[firstName, setFirstName] = useState({
        value: "",
        isTouched: false,
    })
    const[lastName, setLastName] = useState({
        value: "",
        isTouched: false,
    })
    const[mobileNum, setMobileNum] = useState()
    const[moblieNumTouched, setMobileNumTouched] = useState(false)

    const[email, setEmail] = useState({
        value: "",
        isTouched: false,
    })
    const[request, setRequest] = useState("")

    const[modal, setModal] = useState(false)

    /* useEffect(() => {
        const handleClickOutside = () => {
            setModal(false)
            console.log("click outside function called")
        }

        window.addEventListener("click", handleClickOutside)

        return () => {
            window.removeEventListener("click", handleClickOutside)
        }
    }, [firstName]) */

    const errorMessage = {
        EmptyMessage: () => (<span className="errorMessage smallText redText">Please fill out this field.</span>),
        InvalidPhNum: () => (<span className="errorMessage smallText redText">Please enter a valid moblie number. (US moblie numbers only)</span>),
        InvalidEmail: () => (<span className="errorMessage smallText redText">Please enter a valid email.</span>)
    }


    const selectedLocation = JSON.parse(localStorage.getItem("selected location"))

    const handleSelectedPartySize= (partySize) => {
        setSelectedPartySize(partySize)
    }

    const fourStars = [1, 2, 3, 4]
    const RatingDisplay = () => useMemo(() => (
        <div id="ratingStarsContainer">
            {fourStars.map(stars => (
                <img key={stars} src={starLogo} alt="rating-image" className="ratingStars" />
            ))}
            <img src={halfStarLogo} alt="half-rating-image" className="ratingStars"/>
        </div>
    ), [fourStars])
    const radioCount = [1, 2, 3, 4, 5, 6, "7+"]
    const RadioDisplay = () => (
        <div className="selectPartySizeContainer">
            
            {radioCount.map((radio) => (
                <div key={radio}>
                    <label onClick={() => handleSelectedPartySize(radio)} className={`partySizeLabel ${selectedPartySize === radio? "activeRadio": ""}`} htmlFor={`radio-${radio}`}>{radio}</label>
                    <input className="partySizeInput" type="radio" id={`radio-${radio}`}name="partySize"/>
                </div>
                
            ))}
        </div>
    )


    const isFormValid = () => {
        if (
            firstName.value.length !== 0 &&
            lastName.value.length !== 0 && 
            validate(email.value) &&
            mobileNum !== undefined
        ) {
            return true
        } else {
            return false
        }
    }

    const clearForm = () => {
        setFirstName({
            value: "",
            isTouched: false,
        })
        setLastName({
            value: "",
            isTouched: false,
        })
        setMobileNum()
        setMobileNumTouched(false)
        setEmail({
            value: "",
            isTouched: false,
        })
        setRequest("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setModal(true)
        console.log("handle submit called")
        
    }

    const handleCloseModal = () => {
        setModal(false)
        clearForm()
    }


    return (
        <div id="WaitListPage">
            <div id="waitListMainContent">
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
                                {selectedPartySize !== "7+"&&
                                <span className="liveText">
                                Live 
                                <span className="forPulsingAnimation"></span>
                                </span>}

                                {selectedPartySize < 4 && 
                                <h2 className="largeText waitTimeText">Wait time: <span className="tealText">{waitTimeUpTo3People}</span></h2>}
                                
                                {selectedPartySize >= 4 &&  <h2 className="largeText waitTimeText">Wait time: <span className="tealText">{waitTimeUpTo6People}</span></h2>
                                }

                                {selectedPartySize === "7+" && <h2 className="largeText waitTimeText waitTimeUnavailableText">Wait time unavailable</h2>}
                            </div>
                        </div>


                            <h2 className="radioHeader mediumText radioAndInfoHeader">Select your party size</h2>
                            <RadioDisplay/>

                            {selectedPartySize === "7+" && <p className="smallText redText largePartyText">For parties of 7 or more please call the restaurant.</p>}

                            <form id="inputFieldSection" onSubmit={handleSubmit} >
                                <h2 className="inputFieldHeader mediumText radioAndInfoHeader">Your Information</h2>
                                <div className="firstNameAndLastNameInput twoInputDisplayContainer">
                                    <div className="firstNameInputContainer individualInputContainer">
                                        <input type="text" 
                                        placeholder="First name" 
                                        className="smallText inputFields" 
                                        value={firstName.value} 
                                        onChange={e => setFirstName({...firstName, value: e.target.value})} 
                                        onBlur={() => setFirstName({...firstName, isTouched: true})}
                                        disabled={selectedPartySize === "7+"}
                                        />
                                        
                                        {firstName.value.length === 0 && firstName.isTouched && selectedPartySize !== "7+" ? errorMessage.EmptyMessage(): null}
                                    </div>
                                    
                                    <div className="lastNameInputContainer individualInputContainer">
                                        <input 
                                        type="text" 
                                        placeholder="Last name" 
                                        className="smallText inputFields" 
                                        value={lastName.value} 
                                        onChange={e => setLastName({...lastName, value: e.target.value})}
                                        onBlur={() => setLastName({...lastName, isTouched: true})}
                                        disabled={selectedPartySize === "7+"}
                                        />

                                        {lastName.value.length === 0 && lastName.isTouched && selectedPartySize !== "7+" ? errorMessage.EmptyMessage() : null}
                                    </div>
                                    
                                </div>
                                
                                <div className="phNumAndEmailInput twoInputDisplayContainer">

                                    <div className="moblieNumberInputContainer individualInputContainer">
                                    <PhoneInput
                                    country="US"
                                    placeholder="Moblie Number"
                                    className="smallText inputFields" 
                                    value={mobileNum}
                                    onChange={setMobileNum}
                                    onBlur={() => setMobileNumTouched(true)}
                                    disabled={selectedPartySize === "7+"}
                                    />
                                    {mobileNum === undefined && moblieNumTouched && selectedPartySize !== "7+" ? (
                                        errorMessage.EmptyMessage()
                                    ) : null}

                                    {mobileNum !== undefined && isPossiblePhoneNumber(String(mobileNum)) === false && selectedPartySize !== "7+" ? errorMessage.InvalidPhNum() : null}
                                    </div>
                                    
                                    <div className="emailInputContainer individualInputContainer">
                                        <input 
                                        type="email" 
                                        placeholder="Email" 
                                        className="smallText inputFields" 
                                        value={email.value} 
                                        onChange={e => setEmail({...email, value: e.target.value})}
                                        onBlur={() => setEmail({...email, isTouched: true})}
                                        disabled={selectedPartySize === "7+"}
                                        />
                                        {email.value.length === 0 && email.isTouched && selectedPartySize !== "7+" ? errorMessage.EmptyMessage() : null}

                                        {email.value.length !== 0 && validate(email.value) === false && selectedPartySize !== "7+" ? errorMessage.InvalidEmail() : null}
                                    </div>
                                    
                                </div>
                                
                                <div className="requestInputContainer individualInputContainer">
                                    <input 
                                    type="text" 
                                    placeholder="Requests (Optional)" 
                                    className="smallText inputFields" 
                                    value={request} 
                                    onChange={e => setRequest(e.target.value)}
                                    disabled={selectedPartySize === "7+"}
                                    />
                                </div>
                                
                                

                                <button className="submitBtn" type="submit" disabled={!isFormValid()}>Confirm</button>

                            </form>  

                            
                    </div>


                </div>
            </div>
            
            
            {modal && (
                <div className="modal">
                <div className="overlay" onClick={handleCloseModal}></div>
                <div className="modal-content">
                    <h2>
                    {`You have successfully joined the waitlist for this fake restaurant, ${firstName.value} ${lastName.value}. ^^`}
                    </h2>
                </div>
                </div>
            )}

             
             <footer className="waitListFooter">

                <h2>Follow Us</h2>
                <div id="socialLogosContainer">
                    <img className="socialLogos" src={facebookLogo} alt="facebook logo" width="13px"/>
                    <img className="socialLogos" src={instagramLogo} alt="instagram logo" width="20px" />
                </div>
                
                <p>&copy; BOILING POINT RESTAURANT. All rights Reserved</p>
            </footer>
        </div>

    )
}


export {WaitListPage}