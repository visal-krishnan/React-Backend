import React, { useState } from "react";
import "./styles.css";

function FlightBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    passportNumber: "",
    departureDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send formData to your backend
    console.log("Booking Flight:", formData);
    alert(`Flight booked for ${formData.name}`);
  };

  return (
    <div>
      <h2>Flight Booking Form (Controlled)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Passport Number:
            <input
              type="text"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
              placeholder="Enter your passport number"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Departure Date:
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Book Flight</button>
      </form>
    </div>
  );
}

export default FlightBookingForm;
