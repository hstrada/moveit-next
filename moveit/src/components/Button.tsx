import { useState } from "react";

interface ButtonProps {
  color: string;
  children: string;
}

export function Button({ color, children }: ButtonProps) {
  const [counter, setCounter] = useState(1);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <button type="button" style={{ backgroundColor: color }}>
      {children} <strong>{counter}</strong>
    </button>
  );
}
