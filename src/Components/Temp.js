import React, { useEffect, useState } from "react";
import { FaStreetView } from "react-icons/fa";


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
      <div className="container">
        <div className="card">
          <div>
        <input
          type="search"
          value={search}
          className="inputField"
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
            <h2>
              <FaStreetView/>
              {search}
            </h2>
            <h1>{city.temp}°Cel</h1>
            <h3>
              Min : {city.temp_min}°Cel | Max : {city.temp_mix}°Cel
            </h3>
          </div>
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
        </>
      )}
      </div>
      </div>
    </>
  );
};

export default Temp;
