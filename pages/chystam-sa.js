import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function ChystamSaPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("chystamSa")) || [];
    setEvents(saved);
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Chystám sa</h2>
      {events.length === 0 ? (
        <p>Nemáš zatiaľ nič uložené.</p>
      ) : (
        events.map((event, index) => (
          <div key={index} style={{
            border: "1px solid #eee",
            borderRadius: "16px",
            padding: "1rem",
            marginBottom: "1rem"
          }}>
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
        ))
      )}
      <Footer />
    </div>
  );
}