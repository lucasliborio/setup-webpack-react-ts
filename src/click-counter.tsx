import { useState } from 'react';

const ClickCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>
  );
};

export { ClickCounter };
