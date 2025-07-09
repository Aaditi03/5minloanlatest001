import React from "react";

const ThankU = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>👍</div> <br/>
        <h1 style={styles.title}>Thank You!</h1>
        <p style={styles.message}>
          Your account consent has been received successfully.
        </p>
        <p style={styles.subtext}>
          We will get back to you shortly. Meanwhile, feel free to explore our website.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f7fa",
    padding: "20px",
    boxSizing: "border-box",
  },
  card: {
    maxWidth: "500px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "40px 30px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  icon: {
    fontSize: "4rem",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "15px",
    color: "#2c3e50",
  },
  message: {
    fontSize: "1.25rem",
    marginBottom: "10px",
    color: "#34495e",
  },
  subtext: {
    fontSize: "1rem",
    color: "#7f8c8d",
  },
};

export default ThankU;
