import React, { useRef } from "react";
import "./styles.css";

function CheckInKiosk() {
  const nameRef = useRef();
  const passportNumberRef = useRef();
  const departureDateRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access values using refs
    const name = nameRef.current.value;
    const passportNumber = passportNumberRef.current.value;
    const departureDate = departureDateRef.current.value;

    console.log("Checking In:", { name, passportNumber, departureDate });
    alert(`Checked in for ${name}`);
  };

  return (
    <div>
      <h2>Check-In Kiosk (Uncontrolled)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" ref={nameRef} placeholder="Enter your name" required />
          </label>
        </div>
        <div>
          <label>
            Passport Number:
            <input
              type="text"
              ref={passportNumberRef}
              placeholder="Enter your passport number"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Departure Date:
            <input type="date" ref={departureDateRef} required />
          </label>
        </div>
        <button type="submit">Check In</button>
      </form>
    </div>
  );
}

export default CheckInKiosk;
