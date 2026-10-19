import { Sidebar } from "./components/Sidebar";
import { Docs } from "./components/Docs";
import { Guide } from "./components/Guide";

function App() {
  

  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <Sidebar author="Jillian Britney Q. Oledan" />

      <Docs />

      <Guide />
    </div>
  );
}

export default App;