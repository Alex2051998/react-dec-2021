import {createRef, useReducer} from "react";
import Cat from "./components/Cat";
import Dog from "./components/Dog";

import CSS from "./CSS.css";

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]}
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

    const onSubmit = (e) => {
        console.log(e.target.cat.value);
        console.log(e.target.dog.value);
        e.preventDefault();
    }

    const createCat = (e) => {
        e.preventDefault();
        let cat = document.getElementById('cat');
        dispach({type: 'addCat', payload: cat.value});
        console.log(cat.value);
        cat.value = '';

    }

    const createDog = (e) => {
        e.preventDefault();
        let dog = document.getElementById('dog');
        dispach({type: 'addDog', payload: dog.value});
        console.log(dog.value);
        dog.value = '';

    }


    return (
        <div>
            <form>
                <div className={'header'}>
                    <label>AddCat: <input type={'text'} id="cat"/>
                        <button onClick={createCat}>save</button>
                        {state.cats.map(cat => <Cat key={cat.id} cat={cat} dispach={dispach}/>)}
                    </label>

                    <label>AddDog: <input type={'text'} id="dog"/>
                        <button onClick={createDog}>save</button>
                        {state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispach={dispach}/>)}
                    </label>

                </div>


            </form>


            {/*<div>*/}
            {/*    <form onSubmit={createCat}>*/}
            {/*        <label>AddCat: <input type={'text'}/>*/}
            {/*            <button>save</button>*/}
            {/*        </label>*/}
            {/*    </form>*/}
            {/*    <div>*/}
            {/*        {state.cats.map(cat => <Cat key={cat.id} cat={cat} dispach={dispach}/>)}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <form onSubmit={createDog}>*/}
            {/*        <label>AddDog: <input type={'text'}/>*/}
            {/*            <button>save</button>*/}
            {/*        </label>*/}
            {/*    </form>*/}
            {/*    <div>*/}
            {/*        {state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispach={dispach}/>)}*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
}

export default App;
