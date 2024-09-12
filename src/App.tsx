import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Users } from "./features/users/users";
import { Edit } from "./features/users/edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
