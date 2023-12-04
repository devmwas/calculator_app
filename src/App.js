import NumbersComponent from "./components/NumbersComponent";
import Operators from "./components/Operators";
import WorkSpace from "./components/WorkSpace";

function App() {
  return (
    <div className="md:w-1/2 lg:w-1/3 mx-auto border-orange-500 border-8">
      {/* The workspace will display our calculations */}
      <WorkSpace />
      <div className="flex" style={{ height: "50vh" }}>
        <NumbersComponent />
        <Operators />
      </div>
    </div>
  );
}

export default App;
