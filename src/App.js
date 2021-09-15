import { useState } from "react";
import DishForm from "./components/DishForm";
import "./styles/app.css";

function App() {
  const [responseFromApi, setResponseFromApi] = useState(
    "Response from the API will be visible here"
  );

  const dataSender = async (data) => {
    const response = await fetch(process.env.REACT_APP_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  };

  const postData = (data) => {
    setResponseFromApi("loading");
    dataSender(data)
      .then((res) => setResponseFromApi(JSON.stringify(res)))
      .catch((err) => setResponseFromApi(JSON.stringify(err)));
  };

  return (
    <div className='content'>
      <h3>HexOcean Form Task</h3>
      <DishForm onSubmit={postData} />
      <section>
        <h4>Result:</h4>
        <p>{responseFromApi === "loading" ? "Loading" : responseFromApi}</p>
      </section>
      <footer>
        <span>
          Made by{" "}
          <a href='https://github.com/KowalewskiPawel'>Pawel Kowalewski</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
