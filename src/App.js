import logo from './logo.svg';
import './App.css';
import Charater from "./components/Charater"
import { QueryClientProvider, QueryClient } from "react-query"
const queryClient = new QueryClient()
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Charater /></QueryClientProvider>
      </div>


    </div>
  );
}

export default App;
