import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const style = {
    margin: "10px auto",
    color: "white",
    backgroundColor: "#4c1d95",
    textDecoration: "none",
    padding: "0.25rem 0.5rem",
    borderRadius: "5px",
  };
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}！ 訪問いただきありがとうございます！</h3>
      <button {...{ style }} onClick={() => setGreeting(randomMessage())}>
        新しい挨拶
      </button>
    </div>
  );
}
