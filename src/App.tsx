import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LayoutRoutes from "./Routes";

function App() {
  return (
    <div className="flex items-start w-full">
      <Sidebar />
      <div className="flex-1 w-full lg:pr-12 pb-12 lg:pl-20 xl:pl-36 pl-6 pr-3.5">
        <Header />
        <div className="mt-16">
          <LayoutRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
