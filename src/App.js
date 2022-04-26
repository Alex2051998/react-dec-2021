import {Cats, Dogs, FormCat, FormDog} from "./components";
import Css from "./Css.css";

function App() {
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
