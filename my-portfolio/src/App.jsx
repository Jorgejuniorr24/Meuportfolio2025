import Header from './components/ui/Header';
import Footer from "./components/ui/Footer";
import Home from "./pages/Home"; 

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 scroll-smooth">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
