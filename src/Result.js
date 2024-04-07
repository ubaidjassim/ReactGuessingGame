import React from "react";

function Result({ secretNum, term }) {

    let result;

    if (term) {
        if (secretNum > term) {
            result = 'lower'
        } else if (secretNum < term) {
            result = 'higher'
        } else if (secretNum == term) {
            result = 'Yippe, Right'
        } else {
            result = 'Enter Valid Inputs'
        }
    }



    return <h3>You Guessed: {result}</h3>
}

export default Result