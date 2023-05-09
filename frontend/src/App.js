import './App.css';
import Explanation from './components/Explanation';
import Header from './components/Header';
import PictureDiv from './components/PictureDiv';

function App() {
  return (
    <div className="app">
      <Header />
      <PictureDiv />
      <Explanation />
    </div>
  );
}

export default App;
