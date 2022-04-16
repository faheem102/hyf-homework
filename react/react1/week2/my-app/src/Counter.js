import React, { useState, useEffect } from "react";

export function WatchCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  });
  return (
    <div>
      <p>
        you have used <span>{count}</span> seconds on this website
      </p>
    </div>
  );
}
