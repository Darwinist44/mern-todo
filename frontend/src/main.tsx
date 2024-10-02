import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SWRConfig } from "swr";
import fetcher from "./libs/fetcher.ts";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <SWRConfig value={{ fetcher }}></SWRConfig> */}
    <App />
  </StrictMode>
);
