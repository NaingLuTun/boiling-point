import waitListPageBG from "../assets/bg-1.png"
import "./css/WatiListPage.css"
import starLogo from "../assets/star.svg"
import halfStarLogo from "../assets/halfStar.svg"

const WaitListPage = () => {

    const selectedLocation = JSON.parse(localStorage.getItem("selected location"))

    const fourStars = [1, 2, 3, 4]
    const RatingDisplay = () => (
        <div id="ratingStarsContainer">
            {fourStars.map(stars => (
                <img key={stars} src={starLogo} alt="rating-image" className="ratingStars" />
            ))}
            <img src={halfStarLogo} alt="half-rating-image" className="ratingStars"/>
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

                </div>
            </div>
        </div>

    )
}


export {WaitListPage}