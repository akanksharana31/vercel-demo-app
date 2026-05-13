export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        background: "#111",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Testing App Deployment: Vercel
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "10px" }}>
        (Akanksha Rana)
      </p>

      <p style={{ color: "#aaa" }}>
        Personal Vercel Demo App
      </p>
    </main>
  );
}