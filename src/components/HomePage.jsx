import logo from "../assets/download.png"
import drawing from "../assets/hotpot drawing.jpg"
import normalSet from "../assets/normal-set.jpg"
import premiumSet from "../assets/wagyu-beef.jpg"
import locationIcon from "../assets/locationIcon.svg"

import "./css/HomePage.css"
const HomePage = () => {

    return (
         <div id="homePage">

            
            <div id="homePageTopsection">
                <div id="topBackground"></div>

                <div id="navBar">

                </div>
                <img id="homePageLogo" src={logo} alt="logo" width="300px" />

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
                <h2 id="setsTitile">Available sets</h2>
                <p id="setsSubTitle">Enjoy the freedom of self-serve hot pot! Upgrade to Premium Set for endless servings of our melt-in-your-mouth <span id="wagyu">Wagyu beef</span>.</p>

                <div id="sets">
                <div id="normalSet">
                    <img id="normalSetImg" src={normalSet} alt="normal set" width="300px" height="500px" />
                    <div id="normalSetInfo">
                        <p id="normalSetTitle">Normal Set</p>
                            <div className="listContainer">
                                <ul id="normalListInfo">
                                    <li className="setLists">Time limit - 1:30 hours</li>
                                    <li className="setLists">Broth - Kombu, Dashi, and Spicy Miso</li>
                                    <li className="setLists">Unlimited desserts, soft drinks and juices</li>
                                    <li className="setLists">Unlimited self-serve hot pot</li>
                                </ul>
                            </div>
                            <p className="price">$24.99 PER PERSON</p>
                    </div>
                    
                </div>

                <div id="premiumSet">
                    <img id="premiumSetImg" src={premiumSet} alt="premium set" width="300px" height="500px" />

                    <div id="premiumSetInfo">
                        <p id="premiumSetTitle">Premium Set</p>
                            <div className="listContainer">
                                <ul id="premiumListInfo">
                                    <li className="setLists">Time limit - 2:30 hours</li>
                                    <li className="setLists">Broth - Kombu, Dashi, and Spicy Miso</li>
                                    <li className="setLists">Unlimited <span id="wagyu">Wagyu beef</span></li>
                                    <li>Unlimited beer</li>
                                    <li className="setLists">Unlimited desserts, soft drinks and juices</li>
                                    <li className="setLists">Unlimited self-serve hot pot</li>
                                </ul>
                            </div>
                            <p className="price">$49.99 PER PERSON</p>
                    </div>
                </div>
                </div>
                
            </div>

            <div id="locations">
                <h1 id="locationsTitle">Proudly Serving Shabu-Shabu Delights Across the United States</h1>
                <div id="locationsLinkButton">
                    Our Locations <img id="locationIcon" src={locationIcon} alt="locationIcon" width="20px" /> 
                </div>
                
            </div>

        </div>
      
    )
}

export {HomePage} 