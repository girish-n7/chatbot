import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SwitchPage from "./components/SwitchPage";

export default function App() {
  return (
    <main>
      <Sidebar />
      <div className="main--chat">
        <Header />
        <SwitchPage />
      </div>
    </main>
  );
}

//  use SwitchPage component to dynamically display the correct components based on requested routes
