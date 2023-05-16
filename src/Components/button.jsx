import { useState } from "react";
import './button.css'

export default function Button() {
    const [count, setCount] = useState(0);
    
    function Increase() {
        setCount(count + 1);
    }
    function Decrease() {
        setCount(count - 1);
    }
  return (
    <div className="ButtonBox">
      <button onClick={Decrease}>-</button>
      <div className="counts">I was Clicked {count} times</div>
      <button onClick={Increase}>+</button>
    </div>
  );
}