import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isLongVer, setIsLongVer] = useState(false);

  // One-Liner
  const DuoNumberShortVer = (N) => {
    const results = isNaN(N)
      ? N + " is NaN 🤬"
      : [...new Set(N.toString())].length === 2
      ? "Duo N 😊"
      : "Nada 👹";

    console.log(N.toString(), " >>> ", results);
    return results;
  };
  // Long Version
  function DuoNumberLongVer(N) {
    let results = "";

    if (isNaN(N)) {
      console.log(N);
      results = N + " is NaN";
    } else {
      const strN = N.toString();
      console.log(strN);

      if (strN.length < 2) results = "Nada >>> [ " + strN + " ]";
      else {
        const arrayStrN = Array.from(strN);
        console.log(arrayStrN);

        const setArrayStrN = new Set(arrayStrN);
        console.log(setArrayStrN);

        const arraySetArrayStrN = Array.from(setArrayStrN);
        console.log(arraySetArrayStrN);

        const lengthArraySetArrayStrN = arraySetArrayStrN.length;
        console.log(lengthArraySetArrayStrN);

        const isDuoLengthArraySetArrayStrN = lengthArraySetArrayStrN === 2;
        console.log(isDuoLengthArraySetArrayStrN);

        results = isDuoLengthArraySetArrayStrN
          ? "Duo N [ " + arraySetArrayStrN.join(", ") + " ]"
          : "Nada >>> [ " + arraySetArrayStrN.join(", ") + " ]";
      }
    }

    console.log(">>>>>>>>>> " + results + " <<<<<<<<<<\n");
    return results;
  }

  // Tests
  const tests = [0, "", "3c", "ab", -567, 5656, -8, 23333323, 9326, 8888888, 9];

  return (
    <div className="App">
      <h1>
        Find if a number(N) is a duo number
        <br />
        (2 digits or 1 digit + sign)
      </h1>
      <br />

      <button onClick={() => setIsLongVer(!isLongVer)}>
        <h3 style={{ margin: 8 }}>
          View {isLongVer ? "Short" : "Long"} Version
        </h3>
      </button>
      <hr />

      <div style={{ marginLeft: "20%", width: "70%", textAlign: "left" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: 500
          }}
        >
          <h2>Input</h2>
          <h2>Solution</h2>
        </div>
        {isLongVer
          ? tests.map((test, index) => (
              <div
                key={index}
                style={{ display: "flex", borderTop: "1px solid" }}
              >
                <h3 style={{ width: 300, textAlign: "center" }}>{test}</h3>
                <h3 style={{ width: 250 }}>{DuoNumberLongVer(test)} </h3>
              </div>
            ))
          : tests.map((test, index) => (
              <div
                key={index}
                style={{ display: "flex", borderTop: "1px solid" }}
              >
                <h3 style={{ width: 300, textAlign: "center" }}>{test}</h3>
                <h3 style={{ width: 250 }}>{DuoNumberShortVer(test)} </h3>
              </div>
            ))}
      </div>
    </div>
  );
}
