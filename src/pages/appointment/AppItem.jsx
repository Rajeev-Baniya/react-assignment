import React from "react";

const AppItem = ({ data, deleteApp }) => {
  const deleteSelected = () => {
    deleteApp(data.id);
  };
  return (
    <div className="AppItem ">
      <div className="row g-3 align-items-center justify-content-between">
        <div className="col-lg-4">
          <div className="d-flex">
            <div className="delete" onClick={deleteSelected}>
              <i class="fa-solid fa-trash"></i>
            </div>
            <div className="details">
              <h3>{data.pet}</h3>
              <p>
                <span className="owner">Owner:</span> {data.owner}
              </p>
              <p className="note">{data.notes}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <p className="date">
            {" "}
            {data.date} <span className="time"> {data.time} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppItem;
