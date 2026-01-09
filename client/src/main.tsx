// import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import AppProvider from "./context/AppProvider.tsx"
import "@/styles/global.css"


// console.log("Backend URL:", import.meta.env.VITE_API_URL);
// console.log("Backend URL 2:", import.meta.env.VITE_BACKEND_URL);

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <AppProvider>
        <App />
    </AppProvider>,
    // </React.StrictMode>



    
)
