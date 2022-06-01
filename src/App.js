import { HomePage, ImageUploader } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}  />
          <Route path="/image/upload" element={<ImageUploader />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
