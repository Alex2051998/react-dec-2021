import {useReducer} from "react";
import Cat from "./components/Cat";
import Dog from "./components/Dog";

import CSS from "./CSS.css";

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'addCat':
            const cats = payload;
            // const [newCats] = state.cats.slice(-1); аналогічний запис.
            // const newId = newCats ? newCats.id + 1 : 0;
            const newCats = state.cats.slice(-1);
            const newId = newCats[0] ? newCats[0].id + 1 : 0;
            // console.log(newCats);



            // {id:newId, name:cats}
            const newVar = {id:newId, name:cats}

            console.log(newVar);

            return {...state, cats: [...state.cats, newVar]}
        case 'delCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)}
        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]}
        case 'delDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)}
    }
}

function App() {
    const [state, dispach] = useReducer(reducer, {cats: [], dogs: []})

    const createCat = (e) => {
        e.preventDefault();
        dispach({type: 'addCat', payload: e.target[0].value});
        console.log(e.target[0].value);
        e.target[0].value = '';
    }

    const createDog = (e) => {
        e.preventDefault();
        dispach({type: 'addDog', payload: e.target[0].value});
        console.log(e.target[0].value);
        e.target[0].value = '';
    }


    return (
        <div className={'header'}>
            <div>
                <form onSubmit={createCat}>
                    <label>AddCat: <input type={'text'}/>
                        <button>save</button>
                    </label>
                </form>
                <div>
                    {state.cats.map(cat => <Cat key={cat.id} cat={cat} dispach={dispach}/>)}
                </div>
            </div>
            <div>
                <form onSubmit={createDog}>
                    <label>AddDog: <input type={'text'}/>
                        <button>save</button>
                    </label>
                </form>
                <div>
                    {state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispach={dispach}/>)}
                </div>
            </div>

        </div>
    );
}

export default App;
