import Header from "./components/Header";
import NumbersComponent from "./components/NumbersComponent";
import Operators from "./components/Operators";
import WorkSpace from "./components/WorkSpace";

function App() {
  return (
    <div className="md:w-1/3 mx-auto border-4">
      <Header />
          <WorkSpace />
          <div className="flex justify-evenly">
            <NumbersComponent />
            <Operators />
          </div>
      <Header />
    </div>
  );
}

export default App;
