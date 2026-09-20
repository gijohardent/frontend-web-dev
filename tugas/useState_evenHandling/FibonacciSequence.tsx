import {useState} from "react";

const FibonacciSequence = () => {
    const [count, setCount] = useState(0);
    const [sequence, setSequence] = useState(0);
    const [prev, setPrev] = useState(1);

    return (
        <div>
            <h1>Fibonacci Sequence</h1>
            <h2>Click: {count}</h2>
            <h2>Sequence: {sequence}</h2>
            <button onClick={() => {
                setCount(count + 1);
                setPrev(sequence);
                setSequence(sequence + prev);
            }}>Next</button>
        </div>
    );
};
export default FibonacciSequence