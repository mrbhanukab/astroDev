import { useState } from "react";
import "./Input.css";

function Input() {
  const options = [
    {
      image: "https://img.icons8.com/fluency/96/null/google-logo.png",
      label: "Google",
    },
    {
      image: "https://img.icons8.com/fluency/96/null/youtube-play.png",
      label: "Youtube",
    },
    {
      image: "https://img.icons8.com/color/48/null/wikipedia-logo.png",
      label: "Wikipedia",
    },
    {
      image: "https://img.icons8.com/fluency/96/null/stackoverflow.png",
      label: "Stackoverflow",
    },
    {
      image: "https://img.icons8.com/fluency/96/null/github.png",
      label: "Github",
    },
    {
      image: "https://img.icons8.com/fluency/96/null/dribbble.png",
      label: "Dribbble",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [search, setSearch] = useState();

  const handleChange = (event) => {
    const { value } = event.target;
    const selected = options.find((option) => option.label === value);
    console.log(selected);
    setSelectedOption(selected);
  };

  const onInputChange = (event) => {
    setSearch(event.target.value);
  };

  const onSubmit = (e) => {
    switch (selectedOption.label) {
      case "Google":
        window.open("https://www.google.com/search?q=" + search, "_self");
        break;
      case "Youtube":
        window.open(
          "https://www.youtube.com/results?search_query=" + search,
          "_self"
        );
        break;
      case "Wikipedia":
        window.open("https://en.wikipedia.org/wiki/" + search, "_self");
        break;
      case "Stackoverflow":
        window.open("https://stackoverflow.com/search?q=" + search, "_self");
        break;
      case "Github":
        window.open("https://github.com/search?q=" + search, "_self");
        break;
      case "Dribbble":
        window.open("https://dribbble.com/search/" + search, "_self");
        break;
      default:
        window.open("https://www.w3schools.com", "_self");
    }
    e.preventDefault();
  };

  return (
    <form className="Search" onSubmit={onSubmit}>
      <div className="select">
        <img src={selectedOption.image} alt={selectedOption.label} />
        <select
          className="sel"
          value={selectedOption.label}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        placeholder="Search Anything ..."
        autoFocus
        onChange={onInputChange}
      />
      <img
        src="https://img.icons8.com/tapes/80/000000/experimental-search-tapes.png"
        className="searchIcon"
        onClick={onSubmit}
      />
    </form>
  );
}

export default Input;
