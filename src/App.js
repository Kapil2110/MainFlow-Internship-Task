import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //State to Control visiviity of the code
  const [showPage, setShowPage] = useState(false);

  //useEffect to add a 5sec delay before showing my page
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true); // Show the Page after 5sec delay
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showPage ? (
        <div>
          <h1>WelcomeTo My Page!</h1>
          <p>This is my Task 1 Basic React App</p>
        </div>
      ) : (
        <div>
          <h1>Loading...!</h1>
          <p>Please wait For Task 1 </p>
        </div>
      )}
    </div>
  );
}

export default App;
