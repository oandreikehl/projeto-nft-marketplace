import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Catalog } from "./components/Catalog";
import { Footer } from "./components/Footer"; 

function App() {
  return (
    <div className="min-h-screen bg-[#140D0A] font-['Roboto_Mono'] flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <Catalog />
      </main>

      <Footer /> 
    </div>
  );
}

export default App;