// snack 1
import useSwitch from "./hooks/useSwitch";
// snack 2
import useDate from "./hooks/useDate";
// snack 3
import useCustomPointer from "./hooks/useCustomPointer";

function App() {
  // snack 1
  const [isOn, toggle] = useSwitch(false)

  // snack 2
  const currentDate = useDate();

  // snack 3
  const customPointer = useCustomPointer("🔥");

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

      {/* snack 3 */}
      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>
    </>

  );
}

export default App;

