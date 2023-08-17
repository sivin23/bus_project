import React, { useState } from 'react'
import ControlButton from '../Components/ControlButton/ControlButton';

function Booking() {
  const [controlButtons, setControlButtons] = useState([
    { 
      title: "Ticket Booking",
      activeState: true,
      addBtn: true,
      addBtnTitle: "Add Ticket",
      ShowDataURL: "/ticket",
      AddDataURL:"/not-set"
    },
    { 
      title: "Tour Booking",
      activeState: false,
      addBtn: true,
      addBtnTitle: "",
      ShowDataURL: "/ticket",
      AddDataURL:"/not-set"
    },
    { 
      title: "Block Seats",
      activeState: false,
      addBtn: false,
      addBtnTitle: "",
      ShowDataURL: "/ticket",
      AddDataURL:"/not-set"
    },
    { 
      title: "Unblock Seat",
      activeState: false,
      addBtn: false,
      addBtnTitle: "",
      ShowDataURL: "/ticket",
      AddDataURL:"/not-set"
    },
    { 
      title: "Club Service",
      activeState: false,
      addBtn: false,
      addBtnTitle: "",
      ShowDataURL: "/ticket",
      AddDataURL:"/not-set"
    },
    { 
      title: "TrackTicket",
      activeState: false,
      addBtn: false,
      addBtnTitle: "",
      ShowDataURL: "/ticket",
      AddDataURL:"/not-set"
    }
  ]);
  const [bookingFilters, setBookingFilters] = useState([
    {
      bookTicketFilters: [
        {
        filterTitle: "Category",
        type: "dropdown",
        options:["AC","NAC"],
        }
  ]}
  ]);
  return (
    <>
    <div className="row border-bottom border-secondary">
      <div className="col-auto">
      <ControlButton controlButtons={controlButtons} />
      </div>
    </div>
    <div className="row">
      <div className="col-auto">
        Title Add Btn Section
      </div>
    </div>
    <div className="row">
      <div className="col-auto">
        Filter Secton
      </div>
    </div>
    </>
  )
}

export default Booking