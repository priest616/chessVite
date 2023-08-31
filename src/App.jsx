import Footer from "./components/navigation/footer/Footer";
import Routing from "./routes/Routing";
import Header from "./components/navigation/header/Header";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <main className=" relative overflow-hidden  bg-[#252525] text-white px-20 py-[8rem]">
      <div className="shadow-[#252525] shadow-2xl w-[12rem]  h-[12rem] absolute rounded-full bg-[#AC8D75] left-[35%] top-20 z-[9]"></div>
      <div className="shadow-[#252525] shadow-2xl w-[20rem]  h-[20rem] absolute rounded-full bg-[#AC8D75] -right-10 bottom-0 z-[9]"></div>
      <div className="shadow-[#252525] shadow-2xl w-[4rem]  h-[4rem] absolute rounded-full bg-[#AC8D75] left-10 top-[50%] z-[999]"></div>
      <div className="flex flex-col justify-between h-screen z-[99] relative bg-hero bg-center bg-no-repeat bg-cover rounded-xl">
        <Header />
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
        <Footer />
      </div>
    </main>
  );
}

export default App;
