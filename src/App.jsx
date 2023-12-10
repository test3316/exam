import "./App.css";
import BasicContainer from "./Components/basicContainer/basicContainer";
import Card from "./Components/Card/Card";

function App() {
  return (
    <>
      <BasicContainer />
      <Card className="bg-red" />
      <Card />
      <Card />
    </>
  );
}

export default App;
