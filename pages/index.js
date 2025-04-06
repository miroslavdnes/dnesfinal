import { useState, useEffect } from "react";
import data from "../data/events.json";
import Footer from "../components/Footer";

export default function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(data);
  }, []);

  const handleAddToChystamSa = (event) => {
    const stored = JSON.parse(localStorage.getItem("chystamSa")) || [];
    const exists = stored.find((e) => e.name === event.name);
    if (!exists) {
      const updated = [...stored, event];
      localStorage.setItem("chystamSa", JSON.stringify(updated));
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "24px" }}>Dnes sa deje v Bratislave</h1>
      {events.map((event, index) => (
        <div key={index} style={{
          border: "1px solid #eee",
          borderRadius: "16px",
          padding: "1rem",
          marginBottom: "1rem",
          position: "relative"
        }}>
          <h3>{event.name}</h3>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <button onClick={() => handleAddToChystamSa(event)} style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            borderRadius: "50%",
            border: "none",
            background: "#000",
            color: "#fff",
            width: "32px",
            height: "32px",
            fontSize: "18px",
            cursor: "pointer"
          }}>+</button>
        </div>
      ))}
      <Footer />
    </div>
  );
}