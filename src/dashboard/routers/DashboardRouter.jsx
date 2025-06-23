
import { Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "../../ui";
import { DashboardHome, DeckPage } from "../pages"
import { HomePage} from "../../HomePage";

export const DashboardRouter = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="dashboardHome" element={<DashboardHome />} />
                <Route path="deck/:deckId" element={<DeckPage />} />

                <Route path="/" element={<HomePage/>} />
            </Routes>
        </div>
    </>
  );
};



