import { BrowserRouter, Route,  Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ByCategory from "./pages/ByCategory";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/byCategory/:categoryID" element={<ByCategory></ByCategory>}></Route>
      <Route path="/details/:postID" element={<DetailsPage></DetailsPage>}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;