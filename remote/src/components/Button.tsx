import { useState } from "react";
import "./button.css";

export const Button = () => {
  const [state, setState] = useState<number>(0);
  return (
    <div>
      <h1>Remote Application</h1>
      <button className="shared-btn" onClick={() => setState(state + 1)}>
        Click me: {state}
      </button>
    </div>
  );
};

export default Button;
