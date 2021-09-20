// import React, { useContext, useState } from "react";
// // import { AppContext } from "../../App";
// // import "./HolidayList.css";
// // import { RiDeleteBin5Line } from "react-icons/ri";
// import "./EventDel.css";
// import { AppContext } from "../../../App";

// const EventDelBtn = ({ cancelDelEvent, confirmDelEvent, handleDel }) => {
//   const states = useContext(AppContext);
//   const { openDeleteEvent, setDeleteEvent, holidays, setHolidays } = states;

//   const [confirmDel, setConfirmDel] = useState(false);

//   const confirmDelete = () => {
//     handleDel();
//     setConfirmDel(true);
//   };

//   const cancelDel = () => {
//     setConfirmDel(true);
//     console.log("DOn't Delete");
//     setDeleteEvent(false);
//   };

//   return (
//     <>
//       {openDeleteEvent ? <div className="del_event_overlay"></div> : null}

//       <div className="evtDeleteBckGrd">
//         <div className="title">
//           <h3>Are you sure you want to delete this event?</h3>
//         </div>
//         <div className="cancel_del_btn">
//           <button className="cancel_btn" onClick={cancelDel}>
//             Cancel
//           </button>
//           <button className="del_btn" onClick={confirmDel}>
//             Delete
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EventDelBtn;
