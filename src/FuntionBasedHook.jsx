function Counter({ initial }) {
  const [count, setCount] = useState(initial);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Usage
function App() {
  return <Counter initial={5} />;
}
