import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Search_API } from "../utils/helper";
import { cacheResults } from "../utils/searchSlice";
//import { Link } from "react-router-dom";

const Head = () => {
  const [SearchQuery, setsearchQuery] = useState("");
  const [Suggestion, setSuggestion] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const getSearchSuggestions = useCallback(async () => {
    console.log("api call - " + SearchQuery);
    const data = await fetch(Search_API + SearchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    console.log(json[1]);
    dispatch(
      cacheResults({
        [SearchQuery]: json[1],
      })
    );
  }, [SearchQuery, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[SearchQuery]) {
        setSuggestion(searchCache[SearchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [SearchQuery, searchCache, getSearchSuggestions]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-2 p-1 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 mx-2 mt-2 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb5+fmFhYXHx8eSkpJnZ2ezs7Oqqqp3d3cWFhbk5OT19fU/Pz9aWlra2tqkpKTu7u4PDw+9vb1gYGB9fX0zMzMkJCQaGhqbm5s4ODjLy8tQUFACQSuFAAACZ0lEQVR4nO3d7VLCMBCF4VipfKMiAorI/d+lVmHQP7spyczObt/nCs4Za7RhSVICAAAAAAAAAAAAAAAAgAEYT6b3fkwn4371Nvs7f/ab/IIT67A3mmT2a4/WSW92bLMKLq1zFljmVHyzTlnkTS/4YJ2x0INWcGWdsNhKaTi1DlhsKhd8tM5XwaPYcGYdr4KZ2HBhHa+ChdjwyTpeBU9iw1freBW8ig2t01UhNny3TlfBu9jw2TpeBc9iw5F1vApGYsPGOl4FjdgwwGIqL6Upza0DFpsrDdPBOmGhg1Ywra0jFlqrDZ0/p+oz2nmxTlngJadgSmPrnDfL3hZufb5ELbL2Es82H942TY8fPba8z1aNH9r2EwAAAAAAAAAA8Kz9nI/8mH/2+dypsz1Zf5bU22nbo1/jc1zhoEzSXPkdZlfH2H/trHMW2OUU9PkJ94U8IPzD+6S3POX9rbVOWEz7s+F3lbnQVhvrfBXIBf0OC13JY0P+H1LtMb23jlfBSWzo+duVF0uxoXW6Kgb+M4z/exh/LY3/9zDCUiMXDPCYav+Xxn+3iP9+OIB3/AHs03hebTL32lJqfH5ZNn+/NMXf8+5E/9wCAAAAAAAAAAB4EvucqOhnfYU/r83v2FDmmXvhz00Mf/Zl/PNLfX6p60o9g9b3M9rRntPwZ0HHP8/b611Wf8lnssc/V9/nuNd/8t0I1umqEBv6X0q1xTT+PTM+X5v+k8eEvU95d+RJ7/h3dsW/d20Ad+c5HmP/lTHMHv4OywHcQxr/Ltnk9x0q9z7gNIA7nTvB7+UGAAAAAAAAAAAAAAAAAJ++ACLpVB+zWmM6AAAAAElFTkSuQmCC"
        />{" "}
        <img
          className="h-14 cursor-pointer"
          href="/"
          alt="icon"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>

      <div className="col-span-10">
        <div>
          <input
            className=" bg-gray-100 w-7/12 ml-12 p-2 relative rounded-l-full"
            placeholder="Search"
            value={SearchQuery}
            onChange={(e) => {
              setsearchQuery(e.target.value);
            }}
          />
          <button className="h-10  bg-gray-100 w-8 absolute p-2 rounded-r-full">
            <img
              alt="searchicon"
              src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
            />
          </button>
        </div>
        {SearchQuery ? (
          <div className="fixed bg-white ml-32 py-2 px-2 w-[43rem] shadow-lg rounded-2xl border border-gray-100">
            <ul>
              {Suggestion.map((s) => (
                <li key={s} className="py-1 px-2 hover:bg-gray-100 ">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="col-span-1">
        <img
          className="h-8 mt-2 flex "
          alt="signin-icon"
          src="https://toppng.com/uploads/preview/loginsignupwishlist-transparent-login-ico-11563142477cgauetoem7.png"
        />
      </div>
    </div>
  );
};

export default Head;
