import React, { useState, useEffect } from "react";
import "./appointment.css";

import AppItem from "./AppItem";
import { Link } from "react-router-dom";

const Appointment = () => {
  const [showForm, setShowForm] = useState(false);
  const [info, setInfo] = useState([]);
  const [options, showOptions] = useState(false);
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("ASC");
  const [formData, setFormData] = useState({
    owner: "",
    pet: "",
    date: "",
    time: "",
    notes: "",
  });

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setInfo(storedList);
    }
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { owner, pet, date, time, notes } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApp = { id: new Date().getTime().toString(), ...formData };
    localStorage.setItem("localTasks", JSON.stringify([newApp, ...info]));
    setInfo([newApp, ...info]);
    setFormData({
      owner: "",
      pet: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  const deleteAppointment = (data) => {
    const deleted = info.filter((t) => t.id !== data);
    setInfo(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  };

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...info].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setInfo(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...info].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setInfo(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-5 flex-wrap">
        <h3 className="a-heading ">
          <i class="fa-solid fa-calendar-check"></i> Appointment System
        </h3>
        <Link to="/photo-library">Photo Library page</Link>
      </div>
      <div className="mb-5">
        <button className="add" onClick={() => setShowForm(!showForm)}>
          <i className="fa-solid fa-circle-plus"></i> Add Appointment
        </button>
        {showForm && (
          <form onSubmit={handleSubmit}>
            <div className="form-group row g-3">
              <label htmlFor="owner" className="col-lg-4">
                Owner Name
              </label>
              <input
                type="text"
                id="owner"
                className="col-lg-4"
                name="owner"
                required
                value={owner}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group row g-3">
              <label htmlFor="pet" className="col-lg-4">
                Pet Name
              </label>
              <input
                type="text"
                id="pet"
                className="col-lg-4"
                name="pet"
                value={pet}
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group row g-3">
              <label htmlFor="date" className="col-lg-4">
                Apt Date
              </label>
              <input
                type="date"
                id="date"
                className="col-lg-4"
                name="date"
                required
                value={date}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group row g-3">
              <label htmlFor="time" className="col-lg-4">
                Apt Date
              </label>
              <input
                type="time"
                id="time"
                className="col-lg-4"
                name="time"
                value={time}
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group row g-3">
              <label htmlFor="notes" className="col-lg-4">
                Notes
              </label>
              <textarea
                className="col-lg-8"
                name="notes"
                id="notes"
                rows="5"
                value={notes}
                required
                onChange={(e) => onChange(e)}
              ></textarea>
            </div>
            <div className="px-3">
              <button type="submit" className="add submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="sortby" onClick={() => showOptions(!options)}>
          <p>
            {" "}
            <span>Sort By</span> <i class="fa-solid fa-caret-down"></i>{" "}
          </p>
        </div>
        {options && (
          <ul className="sorting-options">
            <li onClick={() => sorting("owner")}>Owner</li>
            <li onClick={() => sorting("date")}>Date </li>
            <li onClick={() => sorting("pet")}>Pet</li>
          </ul>
        )}
      </div>
      <div>
        {info &&
          info
            .filter(
              (data) =>
                data.owner.toLowerCase().includes(query) ||
                data.pet.toLowerCase().includes(query) ||
                data.notes.toLowerCase().includes(query)
            )
            .map((item) => (
              <AppItem
                data={item}
                key={item.id}
                deleteApp={deleteAppointment}
              />
            ))}
      </div>
    </div>
  );
};

export default Appointment;
