import { useState } from "react"
import logo from "../assets/bpLogo-removebg-preview.png"
import "./css/LocationPage.css"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"



const LocationPage = () => {

    const [showSetInfo, setShowSetInfo] = useState("normalSet")

    const [isBtnActive, setIsBtnActive] = useState("normalSet")

    const normalSetInfo = {
        price: 24.99,
        childIn40To50InchesPrice: Math.floor(24.99 / 2) + 0.99,
        appetizers: {
            app1: "Gyoza",
            app1Description: "Lightly Fried Chicken Dumplings.",
            app2: "Chicken Karaage",
            app2Description: "Fried & Marinated Chicken with Sweet Soy Sauce.",
            app3: "Soy Glazed Chicken Karaage",
            app3Description: "Fried Chicken with Spicy Mayo Drizzle.",
            app4: "Volcano Chicken Karaage",
            app4Description: "Fried & Marinated Chicken with Spicy Sauce."
        },

        broths: {
            broth1: "Original House",
            broth1Description: "A Clear Broth of Dashi, Kombu, Fresh Vegetables, and a House Made Secret Blend of Spices, Stewed to Perfection.",
            broth2: "Tonkotsu",
            broth2Description: "A Creamy, Rich, Garlic Pork Broth, Combined with a Fresh Vegetable Broth.",
            broth3: "Miso",
            broth3Description: "A Perfect Combination of Both Red and White Miso Flavors, Combined with a Fresh Vegetable Broth.",
            broth4: "Spicy Miso",
            broth4Description: "A Spicy Spin on our Unique Miso Broth. A Perfect Combination of Both Spicy Red and White Miso Flavors, Combined with a Fresh Vegetable Broth.",
            broth5: "Sukiyaki",
            broth5Description: "A Combination of Smoked Vegetable Broth and a House Made Secret Blend of Spices.",

        },

        drinks: {
            soda1: "Coke",
            soda2: "Diet Coke",
            soda3: "Sprite",
            soda4: "Fanta Orange",
            tea1: "Sweetened Black Tea",
            tea2: "Unsweetened Black Tea",
            tea3: "Iced Tea",
            tea4: "Hot Tea",
            fruitDrink1: "Mango",
            fruitDrink2: "Strawberry",
            fruitDrink3: "Peach"
        }
        
    }

    const premiumSetInfo = {
        ...normalSetInfo,
        price: 49.99,
        childIn40To50InchesPrice: Math.floor(49.99 / 2) + 0.99,
        premiumMeat: "Wagyu beef",
        premiumMeatDescription: "Enjoy our rich and juicy wagyu beef that melts in your mouth",
        premiumDrinks: "beers, sakes, and cocktails",
        premiumDrinksDescription: "Enjoy our variety of beers, sakes and cocktails",
        drinks: {
            ...normalSetInfo.drinks,
            beer1: "Terra",
            beer2: "Asahi",
            beer3: "Corona",
            beer4: "Heineken",
            sake1: "Sbc Créme De Sake",
            sake1Description: "Nigori | 15% Abv Vibrant, Rich but Delicate Aroma. Lingering Finish of Honeydew Melon.",
            sake2: "Sho Chiku Bai",
            sake2Description: "Junmai Ginjo | 15% Abv Delicate, Dry, and Silky Smooth. Fruity Aroma with Rich Flavor & Texture.",
            sake3: "Kikusui",
            sake3Description: "Junmai Ginjo | 15% Abv Light, Dry, Aroma of Fresh Cantaloupe & Banana. Medium Body with Refreshing Mandarin Orange like Overtones.",
            cocktail1: "Margarita",
            cocktail2: "Mojito",
            cocktail3: "Martini",
            cocktail4: "Manhattan"
        }
    }


    const handleViewInfoButtonClick = (selectedSet) => {
        setIsBtnActive(selectedSet)
        setShowSetInfo(selectedSet)
    }



    const selectedLocation = JSON.parse(localStorage.getItem("selected location"))



    return (
        <>
            <div id="homePageLinkImage">
                <a href="home-page"><img id="logo" src={logo} alt="logo" width="300px" /></a>
            </div>
            <NavBar className="navBar"/>
            <div id="location-page">
                
                
                <div id="locationImageContainer">
                    <div id="locationImageContent">
                        <img id="locationImage" src={selectedLocation.image} alt="location image" />
                    </div>
                </div>

                <div id="waitlistAndLocationInfo">
                    <div id="waitlist">
                        <p id="waitlistText">Waitlist</p>
                        <div id="waitTimeContainer">
                            <p id="waitTime">5-12 mins <span className="liveText">Live <span className="forPulsingAnimation"></span></span></p> 
                            
                            
                            
                            <p className="waitTimeForTwoPerson">wait time for 2 people</p>
                        </div>
                        
                        <a href="waitlist-page"><button id="joinWaitlistBtn">Join waitlist</button></a>
                    </div>
                    <div id="locationInfo">
                        <div id="locationAddressAndPhNumContainer">
                            <p className="address locationAddressAndPhNum">{selectedLocation.address}</p>
                            <p className="phNum locationAddressAndPhNum">{selectedLocation.phNum}</p>
                        </div>
                        

                        <hr />

                        <div id="openingAndClosingTimeContainer">
                            <p className="sat-thur">Sunday - Thursday 11:30 AM - 10:00 PM</p>
                            <p className="fri-sat">Friday - Saturday 11:30 AM - 11:00 PM </p>
                        </div>
                    </div>
                </div>

                <hr id="sectionDivider"/>

                <div id="setsContainer">
                    <div id="selectViweSetsInfo">
                        <button className={`setInfoButton ${isBtnActive === "normalSet" ? "active" : ""}`} onClick={() => handleViewInfoButtonClick("normalSet")}>Normal set</button>
                        <button className={`setInfoButton ${isBtnActive === "premiumSet" ? "active" : ""}`} onClick={() => handleViewInfoButtonClick("premiumSet")}>Premium set</button>
                    </div>

                    <div id="setInfoContainer">
                        <div className="setInfoSections">
                            <h2 className="priceHeader infoHeaders">
                                ${showSetInfo === "normalSet"? normalSetInfo.price: premiumSetInfo.price} PER PERSON
                            </h2>
                            <p className="childrenPrice">
                                Children under 40 inches eat free | Children between 40-50 inches ${showSetInfo === "normalSet"? normalSetInfo.childIn40To50InchesPrice: premiumSetInfo.childIn40To50InchesPrice} | Any children over 50 inches will be charged full price
                            </p>
                        </div>

                        <div className="setInfoSections">
                            <h2 className="appetizersHeader infoHeaders">
                                APPETIZERS
                            </h2>

                            <div className="infoListContainer">

                                <div className="individualListContainer">
                                    <p className="infoListItems">{normalSetInfo.appetizers.app1}</p>
                                    <p className="listItemsDescription">{normalSetInfo.appetizers.app1Description}</p>
                                </div>
                                <div className="individualListContainer">
                                    <p className="infoListItems">{normalSetInfo.appetizers.app2}</p>
                                    <p className="listItemsDescription">{normalSetInfo.appetizers.app2Description}</p>
                                </div>
                                <div className="individualListContainer">
                                    <p className="infoListItems">{normalSetInfo.appetizers.app3}</p>
                                    <p className="listItemsDescription">{normalSetInfo.appetizers.app3Description}</p>
                                </div>
                                <div className="individualListContainer">
                                    <p className="infoListItems">{normalSetInfo.appetizers.app4}</p>
                                    <p className="listItemsDescription">{normalSetInfo.appetizers.app4Description}</p>
                                </div>
                                
                            </div>
                        </div>

                    

                        <div className="setInfoSections">
                            <h2 className="brothsHeader infoHeaders">
                                BROTHS
                            </h2>

                            <div className="infoListContainer">
                                <div className="individualListContainer">
                                    <p className="infoListItems">
                                        {normalSetInfo.broths.broth1}
                                    </p>
                                    <p className="listItemsDescription">
                                        {normalSetInfo.broths.broth1Description}
                                    </p>
                                </div>
                                <div className="individualListContainer">
                                    <p className="infoListItems">
                                        {normalSetInfo.broths.broth2}
                                    </p>
                                    <p className="listItemsDescription">
                                        {normalSetInfo.broths.broth2Description}
                                    </p>
                                </div>
                                <div className="individualListContainer">
                                    <p className="infoListItems">
                                        {normalSetInfo.broths.broth3}
                                    </p>
                                    <p className="listItemsDescription">
                                        {normalSetInfo.broths.broth3Description}
                                    </p>
                                </div>
                                <div className="individualListContainer">
                                    <p className="infoListItems">
                                        {normalSetInfo.broths.broth4}
                                    </p>
                                    <p className="listItemsDescription">
                                        {normalSetInfo.broths.broth4Description}
                                    </p>
                                </div>
                                <div className="individualListContainer">
                                    <p className="infoListItems">
                                        {normalSetInfo.broths.broth5}
                                    </p>
                                    <p className="listItemsDescription">
                                        {normalSetInfo.broths.broth5Description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {showSetInfo === "premiumSet"? 
                        (
                            <>
                                <div className="setInfoSections">
                                    <h2 className="premiumMeatHeader infoHeaders">
                                        PREMIUM PERKS
                                    </h2>

                                    <div className="infoListContainer">
                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                Unlimited servings of <span className="wagyu">{premiumSetInfo.premiumMeat}</span>
                                            </p>
                                            <p className="listItemsDescription">
                                                {premiumSetInfo.premiumMeatDescription}
                                            </p>
                                        </div>

                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                Unlimited {premiumSetInfo.premiumDrinks}
                                            </p>
                                            <p className="listItemsDescription">
                                                {premiumSetInfo.premiumDrinksDescription}
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="setInfoSections">
                                    <h2 className="premiumBeers infoHeaders">
                                        BOTTLED BEER
                                    </h2>

                                    <div className="infoListContainer">
                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                {premiumSetInfo.drinks.beer1}
                                            </p>
                                            <p className="listItemsDescription">
                                                
                                            </p>
                                        </div>
                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                {premiumSetInfo.drinks.beer2}
                                            </p>
                                            
                                        </div>
                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                {premiumSetInfo.drinks.beer3}
                                            </p>
                                            
                                        </div>
                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                {premiumSetInfo.drinks.beer4}
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="setInfoSections">
                                    <h2 className="premiumSakes infoHeaders">
                                        SAKE
                                    </h2>

                                    <div className="infoListContainer">
                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                {premiumSetInfo.drinks.sake1}
                                            </p>
                                            <p className="listItemsDescription">
                                                {premiumSetInfo.drinks.sake1Description}
                                            </p>
                                        </div>
                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                {premiumSetInfo.drinks.sake2}
                                            </p>
                                            <p className="listItemsDescription">
                                                {premiumSetInfo.drinks.sake2Description}
                                            </p>
                                        </div>
                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                {premiumSetInfo.drinks.sake3}
                                            </p>
                                            <p className="listItemsDescription">
                                                {premiumSetInfo.drinks.sake3Description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="setInfoSections">
                                    <h2 className="premiumCocktails infoHeaders">
                                        COCKTAILS
                                    </h2>

                                    <div className="infoListContainer">
                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                {premiumSetInfo.drinks.cocktail1}
                                            </p>
                                            
                                        </div>
                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                {premiumSetInfo.drinks.cocktail2}
                                            </p>
                                            
                                        </div>
                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                {premiumSetInfo.drinks.cocktail3}
                                            </p>
                                        
                                        </div>
                                        <div className="individualListContainer">
                                            <p className="infoListItems">
                                                {premiumSetInfo.drinks.cocktail4}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                            
                        )
                        :
                        (
                            <></>
                        )}

                        <div className="setInfoSections">
                            <h2 className="nonAlcoholicDrinksHeader infoHeaders">
                                NON ALCOHOLIC DRINKS
                            </h2>
                            
                            <div className="infoListContainer">

                                <div className="individualListContainer">
                                    <h2 className="typeOfDrinkNoAlco">SODA</h2>
                                    <p className="infoListItems">
                                        {normalSetInfo.drinks.soda1} | {normalSetInfo.drinks.soda2} | {normalSetInfo.drinks.soda3} | {normalSetInfo.drinks.soda4}
                                    </p>
                                </div>


                                <div className="individualListContainer">
                                    <h2 className="typeOfDrinkNoAlco">JUICE</h2>
                                    <p className="infoListItems">
                                        {normalSetInfo.drinks.fruitDrink1} | {normalSetInfo.drinks.fruitDrink2} | {normalSetInfo.drinks.fruitDrink3}
                                    </p>
                                </div>


                                <div className="individualListContainer">
                                    <h2 className="typeOfDrinkNoAlco">TEA</h2>
                                    <p className="infoListItems">
                                        {normalSetInfo.drinks.tea1} | {normalSetInfo.drinks.tea2} | {normalSetInfo.drinks.tea3} | {normalSetInfo.drinks.tea4}
                                    </p>
                                </div>

                            </div>
                            
                        </div>
                        
                    </div>

                    
                </div>

                

            </div>

            <Footer/>
        </>
    )
}

export {LocationPage}