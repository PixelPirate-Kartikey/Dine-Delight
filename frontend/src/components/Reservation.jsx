import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import './Reservation.css'; // Ensure you have this CSS file

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/reservation/send", {
        firstName, lastName, email, phone, date, time,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      
      if (data) {
        toast.success(data.message);
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setTime("");
        setDate("");
        navigate("/success");
      }
    } catch (error) {
      console.error("Request failed", error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
      navigate("*");
    }    
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="Reservation" />
        </div>
        <div className="reservation_form_box">
          <h1>Make a Reservation</h1>
          <p>For further questions, please call us.</p>
          <form onSubmit={handleReservation}>
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <input
                type="time"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                placeholder="Email"
                className="email_input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit_button">
              Reserve Now
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
