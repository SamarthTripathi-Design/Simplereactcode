import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-md-5 col-5 mx-auto">
        <div className="card">
          <img src={props.imgsrc} class="card-img-top" alt="img" />
          <div class="card-body">
            <h5 class="card-title font-weight-bold">{props.title}</h5>
            <p class="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <NavLink to="#" class="btn btn-primary">
              Get Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
