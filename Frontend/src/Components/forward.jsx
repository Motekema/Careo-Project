import React from "react";
import TopNav from "./TopNav"; // Import TopNav component

const data = [
  {
    name: "John Doe",
    picture:
      "data:image/jpeg;base64,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",
    location: "Los Angeles, CA",
    messages: 1,
    views: 5,
    occupation: "Software Engineer",
    company: "Tech Corp",
    bio: "Passionate about coding and technology.",
  },
  {
    name: "Jane Smith",
    picture:
      "data:image/jpeg;base64,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",
    location: "New York, NY",
    messages: 3,
    views: 10,
    occupation: "Product Manager",
    company: "Innovate Inc.",
    bio: "Loves building great products and solving user problems.",
  },
  {
    name: "David Johnson",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWVgFakyuMZ5FFd4_cl7xaRsKOL7D51uNjUJpSPzZt06g6_ezRJLsYYjI&s",
    location: "San Francisco, CA",
    messages: 2,
    views: 7,
    occupation: "UX Designer",
    company: "Design Labs",
    bio: "Designing intuitive and beautiful user experiences.",
  },
  {
    name: "Emily Williams",
    picture:
      "data:image/jpeg;base64,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",
    location: "Chicago, IL",
    messages: 4,
    views: 12,
    occupation: "Data Scientist",
    company: "Big Data Co.",
    bio: "Turning data into meaningful insights.",
  },
];

function MovieCard() {
  return (
    <>
      <TopNav /> {/* Add TopNav component */}
      <div
        style={{
          paddingTop: "60px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {" "}
        {/* Add top, left, and right padding */}
        {data.map((person, index) => (
          <div
            key={index}
            className="message-card"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px 0",
              maxWidth: "400px",
              width: "100%",
            }}
          >
            {/* Profile Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginBottom: "15px",
              }}
            >
              <img
                src={person.picture}
                alt={person.name}
                style={{
                  marginRight: "15px",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                }}
              />
              <div style={{ flex: 1, textAlign: "left" }}>
                <h4
                  style={{
                    margin: "0 0 5px 0",
                    color: "#333",
                    fontSize: "18px",
                  }}
                >
                  {person.name}
                </h4>
                <p
                  style={{
                    margin: "0 0 5px 0",
                    color: "#777",
                    fontSize: "14px",
                  }}
                >
                  {person.location}
                </p>
                <p
                  style={{
                    margin: "0 0 5px 0",
                    color: "#777",
                    fontSize: "12px",
                  }}
                >
                  {person.occupation} at {person.company}
                </p>
                <p style={{ margin: "0", color: "#777", fontSize: "12px" }}>
                  {person.bio}
                </p>
              </div>
            </div>

            {/* Actions Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                borderTop: "1px solid #eee",
                paddingTop: "10px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span style={{ fontSize: "14px", color: "#333" }}>
                  💬 {person.messages}
                </span>
                <span style={{ fontSize: "14px", color: "#333" }}>
                  👁️ {person.views}
                </span>
              </div>
              <span
                style={{ fontSize: "24px", color: "#333", cursor: "pointer" }}
              >
                ...
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieCard;
