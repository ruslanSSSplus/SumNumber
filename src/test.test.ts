import App from './App'
import React, {useState} from "react";
import ReactDOM from "react-dom";

it ('length should be incremented', () => {
//1. test data
    let valueOfAll = [1, 2] as Array<number>
    let first = 1
    let second = 2

    //2. action

        let summary: number = +first + +second
        valueOfAll.push(summary)
        console.log(valueOfAll)


    //3. expectation
    expect(valueOfAll.length).toBe(3)
})