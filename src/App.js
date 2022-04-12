import {CarForm} from "./components";
import {Cars} from "./components/cars/cars";
import {useState} from "react";
import {carService} from "./services";

function App() {
    const [car, setCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [carUpdate, setCarUpdate] = useState(null);


  return (
    <div>
        <CarForm setCar={setCar} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} setCarUpdate={setCarUpdate}/>
        <hr/>
        <Cars car={car} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate} carUpdate={carUpdate}/>
    </div>
  );
}

export default App;
