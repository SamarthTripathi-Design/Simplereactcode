import React from "react";
import { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    comments: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.name}. My mobile number is ${data.number}. My email is ${data.email}. My comments are ${data.comments}  `
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container container_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  onChange={inputEvent}
                  value={data.name}
                  placeholder=" Full Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="number"
                  onChange={inputEvent}
                  value={data.number}
                  placeholder="Phone number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  onChange={inputEvent}
                  value={data.email}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Enter comments
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="comments"
                  onChange={inputEvent}
                  value={data.comments}
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12 mb-8">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
