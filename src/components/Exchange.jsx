import { useState } from "react";
import OtherCurrencies from "./OtherCurrencies";

function Exchange({ data }) {
  const commons = ["USD", "AZN", "TRY", "EUR"];
  const [input, setInput] = useState("");
  if (input < 0) {
    setInput(input * -1);
  }

  const [rate, setRate] = useState({
    from: "",
    to: "",
  });

  const [error, setError] = useState({
    from: "",
    to: "",
  });
  const [result, setResult] = useState({});

  const setValue = (e) => {
    const { name, value } = e.target;
    setRate({ ...rate, [name]: value });
    setError({ ...error, [name]: "" });
  };
  //   console.log(rate);
  const exchangeRate = () => {
    if (rate.from.length < 1) {
      setError({ ...error, from: "Choose Currency" });
    } else if (rate.to.length === 0) {
      setError({ ...error, to: "Choose Currency" });
    } else {
      fetch(
        `https://v6.exchangerate-api.com/v6/830c6d13ea14f7c7ad325357/latest/${rate.from}`
      )
        .then((res) => res.json())
        .then((e) => {
          console.log(e);
          let obj = {
            [rate.to]: (e.conversion_rates[rate.to] * input).toFixed(2),
          };
          commons.map(
            (a) => (obj[a] = (e.conversion_rates[a] * input).toFixed(2))
          );
          setResult(obj);
        });
    }
  };
  return (
    <>
      <div className="main">
        <h1 className="mt-3">Currency Exchange</h1>
        <div className="select">
          <h5>From:</h5>
          <select
            name="from"
            onChange={(e) => setValue(e)}
            style={{ cursor: "pointer" }}
            defaultValue=""
          >
            <option value="" disabled>
              Choose Currency
            </option>
            {Object.keys(data).map((index, key) => (
              <option key={key} value={index}>
                {index}
              </option>
            ))}
          </select>
          {error.from.length > 0 ? (
            <span className="errors">{error.from}</span>
          ) : (
            ""
          )}
          <span>
            <i className="fa-solid fa-right-left"></i>
          </span>
          <h5>To:</h5>
          <select
            name="to"
            onChange={(e) => setValue(e)}
            style={{ cursor: "pointer" }}
            defaultValue=""
          >
            <option value="" disabled>
              Choose Currency
            </option>
            {Object.keys(data).map((index, key) => (
              <option key={key} value={index}>
                {index}
              </option>
            ))}
          </select>
          {error.to.length > 0 ? <span className="error">{error.to}</span> : ""}
        </div>
        <div className="amount mt-4">
          <h5 className="text-center">Amount</h5>
          <div>
            <input
              type="number"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="changeBtn" onClick={() => exchangeRate()}>
              <i className="fa-solid fa-rotate"></i>
            </button>
          </div>
          <p className="text-center mt-3">
            {result[rate.to]} {rate.to}
          </p>
        </div>
        <OtherCurrencies result={result} />
      </div>
    </>
  );
}

export default Exchange;
