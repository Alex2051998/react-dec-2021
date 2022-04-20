import {useReducer} from "react";

const reducer = (state, action) => {
    const {type, payload} = action;
    console.log(payload);

    switch (type) {
        case 'counter1':
            return {...state, counter1: state.counter1 + payload};
        case 'counter2':
            return {...state, counter2: state.counter2 + payload};
        case 'counter3':
            return {...state, counter3: state.counter3 + payload};

        // case 'dec1':
        //     return {...state, counter1: state.counter1 - 1};
        // case 'dec2':
        //     return {...state, counter2: state.counter2 - 1};
        // case 'dec3':
        //     return {...state, counter3: state.counter3 - 1};

        case 'res1':
            return {...state, counter1: 0};
        case 'res2':
            return {...state, counter2: 0};
        case 'res3':
            return {...state, counter3: 0};
    }

}

function App() {
    const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0})
    return (
        <div>
            Counter1: {state.counter1}
            <div>
                <button onClick={() => dispatch({type:'counter1', payload:1})}>inc</button>
                <button onClick={() => dispatch({type:'counter1', payload:-1})}>dec</button>
                <button onClick={() => dispatch({type:'res1'})}>res</button>
            </div>
            Counter2: {state.counter2}
            <div>
                <button onClick={() => dispatch({type:'counter2', payload:1})}>inc</button>
                <button onClick={() => dispatch({type:'counter2', payload:-1})}>dec</button>
                <button onClick={() => dispatch({type:'res2'})}>res</button>
            </div>
            Counter3: {state.counter3}
            <div>
                <button onClick={() => dispatch({type:'counter3', payload:1})}>inc</button>
                <button onClick={() => dispatch({type:'counter3', payload:-1})}>dec</button>
                <button onClick={() => dispatch({type:'res3'})}>res</button>
            </div>
        </div>
    );
}

export default App;
