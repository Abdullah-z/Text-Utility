
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar navTitle="Text Utility"  />
    <div className="container">
      <TextForm boxTitle="Enter Text to Analyze" />
    </div>
    </>
  );
}

export default App;
