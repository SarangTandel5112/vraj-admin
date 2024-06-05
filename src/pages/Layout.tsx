import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="h-full flex">
            <Navbar />
            <section className="flex flex-col grow">
                <header className="p-8 pb-4">
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>

                <div className="overflow-auto flex flex-col grow w-full p-8 pt-4">
                    <Outlet />
                </div>
            </section>
        </div>
    );
}

export default Layout;
