import "./assets/style/style.css";
import { useEffect, useState } from "react";
import Exchange from "./components/Exchange";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/830c6d13ea14f7c7ad325357/latest/USD"
    )
      .then((res) => res.json())
      .then((e) => {
        setData(e.conversion_rates);
      });
  }, []);
  return (
    <div className="container">
      <Exchange data={data} />
    </div>
  );
}

export default App;
