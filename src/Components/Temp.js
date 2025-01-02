import React, { useEffect, useState } from "react";
import { FaStreetView } from "react-icons/fa";
import "./Style.css"


const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric
&appid=4b44e74ed7488e09a1e2b132972b3eac`;
      const response = await fetch(url);
      const data = await response.json();
      setCity(data.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="weather">
      
          <div className="searchbar">
        <input
          type="search"
          value={search}
          placeholder="Search"
          className="searchbar input"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      {!city ? (
        <p>No Data found</p>
      ) : (
        <>
          <div>
            <h2 className="city">
              <FaStreetView/>
              {search}
            </h2>
            <h1 className="temp">{city.temp}°Cel</h1>
            <h3 className="min">
              Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
            </h3>
          </div>
          <div className="wave"></div>
          <div className="wave-two"></div>
          <div className="wave-three"></div>
        </>
      )}
      </div>
      
    </>
  );
};

export default Temp;
