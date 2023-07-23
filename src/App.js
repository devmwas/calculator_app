import NumbersComponent from "./components/NumbersComponent";
import Operators from "./components/Operators";
import WorkSpace from "./components/WorkSpace";

function App() {
  return (
    <div className="md:w-1/2 lg:w-1/3 mx-auto border-gray-400 border-2 mt-4">
      {/* The workspace will display our calculations */}
        <WorkSpace />
        <div className="flex">
          <NumbersComponent />
          <Operators />
        </div>
    </div>
  );
}

export default App;
