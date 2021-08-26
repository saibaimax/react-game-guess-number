import "./styles.css";
import { useState } from "react";

const random = (max) => {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
};

function Guess({ onGuess }) {
  const [val, setVal] = useState(0);

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleClick = () => {
    onGuess(val * 1);
  };
  return (
    <>
      <input type="number" value={val} onChange={handleChange} />
      <button onClick={handleClick}>予想する</button>
    </>
  );
}

export default function NumberGuessing() {
  const max = 50;
  const initialCount = 5;
  const [answer, setAnswer] = useState(random(max));
  const [count, setCount] = useState(initialCount);
  const [message, setMessage] = useState("");

  const judge = (num) => {
    if (count === 0) return;

    setCount(count - 1);

    if (num === answer) {
      setMessage("正解です！");
    } else if (count === 1) {
      setMessage("残念でした！正解は" + answer);
    } else if (num > answer) {
      setMessage("もっと小さいです！");
    } else if (num < answer) {
      setMessage("もっと大きいです！");
    }
  };

  const replay = () => {
    setAnswer(random(max));
    setCount(initialCount);
    setMessage("");
  };

  return (
    <div className="App">
      <Guess onGuess={judge} />
      <p>{message}</p>
      <p>あと{count}回</p>
      <button onClick={replay}>はじめから</button>
    </div>
  );
}
