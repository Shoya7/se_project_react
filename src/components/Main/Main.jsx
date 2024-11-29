// import React from "react";
// import WeatherCard from "../WeatherCard/WeatherCard";
// import ItemCard from "../ItemCard/ItemCard.jsx";
// import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.jsx";
// import "./Main.css";

// function Main({
//   weatherData,
//   handleCardClick,
//   clothingItems,
//   handleCardLike,
//   isLiked,
//   isLoggedIn,
//   onCardLike,
// }) {
//   const { currentTemperatureUnit } = React.useContext(
//     CurrentTemperatureUnitContext
//   );

//   return (
//     <main>
//       <WeatherCard weatherData={weatherData} />
//       <section className="cards">
//         <p className="cards__text">
//           Today is {weatherData.temp[currentTemperatureUnit]}
//           &deg; {currentTemperatureUnit} / You may want to wear:
//         </p>
//         <ul className="cards__list">
//           {clothingItems
//             .filter((item) => {
//               return item.weather === weatherData.type;
//             })
//             .map((item) => {
//               return (
//                 <ItemCard
//                   key={item._id}
//                   item={item}
//                   onCardClick={handleCardClick}
//                   clothingItems={clothingItems}
//                   handleCardLike={handleCardLike}
//                   isLiked={isLiked}
//                   isLoggedIn={isLoggedIn}
//                   onCardLike={onCardLike}
//                 />
//               );
//             })}
//         </ul>
//       </section>
//     </main>
//   );
// }

// export default Main;
import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import "./Main.css";

function Main({
  weatherData,
  handleCardClick,
  clothingItems,
  handleCardLike,
  isLiked,
  isLoggedIn,
  onCardLike,
}) {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );

  const filteredClothingItems = React.useMemo(() => {
    if (!weatherData || !clothingItems) return [];
    return clothingItems.filter(
      (item) => item && item.weather === weatherData.type
    );
  }, [clothingItems, weatherData]);

  if (!weatherData) {
    return (
      <main>
        <div>Loading weather data...</div>
      </main>
    );
  }

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]}
          &deg; {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {filteredClothingItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
              clothingItems={clothingItems}
              handleCardLike={handleCardLike}
              isLiked={isLiked}
              isLoggedIn={isLoggedIn}
              onCardLike={onCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
