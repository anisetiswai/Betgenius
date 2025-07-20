// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const sendOTP = () => {
    if (phone.length < 9) return alert("Ingiza namba sahihi");
    setOtpSent(true);
    alert("OTP imetumwa: 123456"); // placeholder OTP
  };

  const verifyOTP = () => {
    if (otp === "123456") {
      alert("Umefanikiwa kuingia!");
      router.push("/dashboard");
    } else {
      alert("OTP si sahihi, jaribu tena.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto", fontFamily: "sans-serif" }}>
      <h2>Ingia kwa Namba ya Simu</h2>
      {!otpSent ? (
        <>
          <input
            type="tel"
            placeholder="Ingiza namba ya simu"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />
          <button onClick={sendOTP} style={{ padding: "0.5rem 1rem" }}>Tuma OTP</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Ingiza OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />
          <button onClick={verifyOTP} style={{ padding: "0.5rem 1rem" }}>Thibitisha OTP</button>
        </>
      )}
    </div>
  );
}
