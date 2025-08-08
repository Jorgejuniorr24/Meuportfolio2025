import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] text-white scroll-smooth">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
