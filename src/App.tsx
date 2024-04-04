import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GithubContextProvider } from "./context/GithubContext";

export function App() {
  return (
    <GithubContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GithubContextProvider>
  );
}
