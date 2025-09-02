// snack 1
import useSwitch from "./hooks/useSwitch";
// snack 2
import useDate from "./hooks/useDate";

function App() {
  // snack 1
  const [isOn, toggle] = useSwitch(false)

  // snack 2
  const currentDate = useDate();

  return (
    <>
      {/* snack 1 */}
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      {/* snack 2 */}
      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </>

  );
}

export default App;

