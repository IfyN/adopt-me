import { useState } from "react";

const Animals = ["bird", "cat", "dog", "parrot", "badger"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");

  function updateLocation(e) {
    setLocation(e.target.value);
  }
  function updateAnimal(e) {
    setAnimal(e.target.value);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location.toUpperCase()}
            onChange={updateLocation}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          <select id="animal" value={animal} onChange={updateAnimal}>
            <option />
            {
              //because Animals is an array and we have to map through it to create an array
              Animals.map((animal) => (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              ))
            }
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
