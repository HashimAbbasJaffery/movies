import {useState} from "react";
export default function SecondButton({count, onClick}) {
    return (
        <>
            <button onClick={onClick}>Click Me</button>
            <p>Count: {count}</p>
        </>
    )
}