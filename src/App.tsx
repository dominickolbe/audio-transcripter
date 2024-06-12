import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import TranscriptsList from "./pages/TranscriptsList";
import TranscriptsDetail from "./pages/TranscriptsDetail";

const mockData = [
  {
    id: "bk168068-93e8-4bb6-b762-dbc57d172111",
    title: "Burger King France Q1 2023",
  },
  {
    id: "so164652-c0ef-4991-b7cc-474cc0ea911",
    title: "SiteOne Q1 2023",
  },
  {
    id: "gg1aa17c-0a31-495c-8e9d-6179de3d3111",
    title: "Gogo Q1 2023",
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/transcripts"
          element={<TranscriptsList transcripts={mockData} />}
        />
        <Route path="/transcripts/:id" element={<TranscriptsDetail />} />
        <Route path="*" element={<Navigate to="/transcripts" />} />
      </Routes>
    </Router>
  );
}

export default App;
