import {Cats, Dogs, FormCat, FormDog} from "./components";
import Css from "./Css.css";
import {useState} from "react";

function App() {
    const [cat,setCat] = useState(null);

  return (
    <div>
        <div className={'header'}>
            <div>
                <FormCat/>
                <hr/>
                <Cats/>
            </div>
            <div>
                <FormDog/>
                <hr/>
                <Dogs/>
            </div>
        </div>
    </div>
  );
}

export default App;
