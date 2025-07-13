export default function Home() {
  return (
    <div style={{ 
      backgroundColor: "#0a0a0a", 
      color: "#00aaff", 
      height: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      fontFamily: "sans-serif" 
    }}>
      <h1>CleanDrive</h1>
      <p>Lavage auto à domicile</p>
      <a href="https://wa.me/21652552112" style={{
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#005577",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none"
      }}>
        Réserver sur WhatsApp
      </a>
    </div>
  );
}
