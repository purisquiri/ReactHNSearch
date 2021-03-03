import "./App.css";
import Search from "./components/Search";
import SearchHistory from "./components/SearchHistory";

//import { useSelector, useDispatch } from "react-redux";
//import { addSearch } from "./redux";

function App() {
  //const news = useSelector((state) => state);

  //const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>HN Search </h1>
      <SearchHistory />
      <Search />
    </div>
  );
}

export default App;
