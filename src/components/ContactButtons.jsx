import { FaWhatsapp, FaPhoneVolume } from "react-icons/fa6";

function ContactButtons() {
  return (
    <>
      <button
        style={{
          width: "clamp(3rem, 3vw, 3.5rem)",
          height: "clamp(3rem, 3vw, 3.5rem)",
          background: "#0ac900ff",
          border: "none",
          display: "flex",
          position: "fixed",
          zIndex: 1000,
          bottom: "clamp(0.5rem, 1vw, 1rem)",
          left: "1.5rem",
          right: "1.5rem",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          color: "#fff",
        }}
        onClick={() => window.open("https://wa.me/+923244536417", "_blank")}
      >
        <FaWhatsapp style={{ fontSize: "clamp(1.8rem, 3vw, 2rem)" }} />
      </button>
      <button
        style={{
          width: "clamp(3rem, 3vw, 3.5rem)",
          height: "clamp(3rem, 3vw, 3.5rem)",
          background: "#0099ffff",
          border: "none",
          position: "fixed",
          zIndex: 1000,
          bottom: "clamp(0.5rem, 1vw, 1rem)",
          right: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          color: "#fff",
        }}
        onClick={() => window.open("tel:+923244536417", "_blank")}
      >
        <FaPhoneVolume style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)" }} />
      </button>
    </>
  );
}
export default ContactButtons;
