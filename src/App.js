import './App.css';
import { Footer, Header } from './components';
import { AllRoutes } from './routs/AllRoutes';

function App() {
  return (
    <div className="App bg-slate-300 dark:bg-gray-700 dark:text-slate-100">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
