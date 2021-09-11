import "./App.css";
import GridLayout from "./components/gridLayout";
import jsonData from "./data/data.json";
import { ApplicationContext } from "./applicationContext";
import { useState } from "react";

function App() {
    const [user, setUser] = useState({
        name: "Jeremy Robson",
    });

    return (
        <div className="app">
            <ApplicationContext.Provider value={{ user, setUser }}>
                <GridLayout data={jsonData} />
            </ApplicationContext.Provider>
        </div>
    );
}

export default App;
