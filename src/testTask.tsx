
import './App.css';
import {useState} from "react";

function App() {

    let [counter, setCounter] = useState({
        c1: 10,
        c2: 10
    })


    console.log('rerender')
    const minus = () => {
        setCounter((actual)=> {
            return {...actual, c1: actual.c2 - 1,  c2: actual.c2 - 1}
        })

        if(counter.c1 === 1){
            window.alert('Player 2 win')
            setCounter((actual) => {
                return {...actual, c1: 10,  c2: 10}
            })

        } else if (counter.c2 === 1){
            window.alert('Player 1 win')
            setCounter((actual) => {
                return {...actual, c1: 10,  c2: 10}
            })

        }
    }
    return (
        <div >
            <div>
                <div>John Gennady</div>
                <div> {counter.c1} </div>
                <button onClick={ () => {setCounter((actual)=>{
                    return {...actual, c1: actual.c1 + 1}
                })}}> true </button>
            </div>
            <hr />
            <div>
                <div> Polaroid Pavlov </div>
                <div> {counter.c2} </div>
                <button onClick={ () => {setCounter((actual)=> {
                    return {...actual, c2: actual.c2 + 1}
                })}}> true </button>
            </div>
            <hr />
            <div>
                <button onClick={ ()=> {minus()}}> minus </button>
            </div>
            <div>
                <button onClick={ ()=> {
                    setCounter((actual) => {
                        return {...actual, c1: 10,  c2: 10}
                    })

                }}> reset </button>
            </div>

        </div>

    );
}


