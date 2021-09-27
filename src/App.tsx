
import './App.css';
import {useState} from "react";



function App() {

    let [valueOfAll, setValue] = useState([1, 2] as Array<number> )
    let [first , setFirst] = useState(1)
    let [second, setSecond] = useState(2)
    
    const onChangeFirst = (e: any) => {
        setFirst(e.currentTarget.value)
    }
    const onChangeSecond = (e: any) => {
        setSecond(e.currentTarget.value)
    }



    const sum = () => {
        let summary: number = +first + +second
        valueOfAll.push(summary)
        console.log(valueOfAll)
        setFirst(0)
        setSecond(0)
    }
    return (
        <div className={'all'}>
            <div className={'sum'}>
                {valueOfAll.map(i => {
                    return (<span> {i}, </span>)
                })}

            </div>
            <div className={'first'}>
                <div>John Gennady</div>
                <input value={first}
                       onChange={onChangeFirst}/>
            </div>
            <div className={'second'}>
                <div> Polaroid Pavlov </div>
                <input value={second}
                       onChange={onChangeSecond}/>
            </div>

            <div className={'but'}>
                <button onClick={ ()=> {sum()} }> сумма </button>
            </div>

        </div>

    );
}


export default App;
