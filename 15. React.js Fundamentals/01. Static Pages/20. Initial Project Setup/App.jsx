import { createRoot } from "react-dom/client"
import { Header } from "./components/Header.jsx"
import { Main } from "./components/Main.jsx"
import { Footer } from "./components/Footer.jsx"

export function App(){
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
