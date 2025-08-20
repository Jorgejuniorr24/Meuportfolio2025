import { I18nProvider } from "./contexts/I18nContext";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <I18nProvider>
      <div className="flex flex-col min-h-screen bg-[#0B1120] text-white scroll-smooth">
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
