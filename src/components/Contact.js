import React, { useState, useRef } from "react";


function Contact(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  const [isValid, setInputState] = useState({
    uname: "",
    email: "",
    message: "",
  });

  const [errMsg, setMsg] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "uname") {
      setInputState({ ...isValid, [name]: value });
    }

    if (name === "email") {
      setInputState({ ...isValid, [name]: value });
    }

    if (name === "message") {
      setInputState({ ...isValid, [name]: value });
    }
  };

  const handleValid = (event) => {
    const { name, value } = event.target;
    if (name === "uname" && value.length === 0) {
      //alert("Name input required");

      setMsg("Name input required");
      nameRef.current.focus();
      nameRef.current.style.border = "1px solid red";
    } else if (name === "uname" && value.length !== 0) {
      setMsg("");
    }

    if (name === "email" && /\S+@\S+\.\S+/.test(value) === false) {
      //alert("Email input required");
      setMsg("Valid Email input required");
      emailRef.current.focus();
      emailRef.current.style.border = "1px solid red";
    } else if (name === "email" && /\S+@\S+\.\S+/.test(value)) {
      setMsg("");
    }

    if (name === "message" && value.length === 0) {
      // alert("Message required");
      setMsg("Message required");
      msgRef.current.focus();
      msgRef.current.style.border = "1px solid red";
    } else if (name === "messagel" && value.length !== 0) {
      setMsg("");
    }
  };

  if (props.display === "Contact") {
    return (
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="uname"
              type="text"
              placeholder="name"
              value={isValid.uname}
              onChange={handleChange}
              onMouseOut={handleValid}
              ref={nameRef}
            />
          </div>
          <div className="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              placeholder="email"
              value={isValid.email}
              onChange={handleChange}
              onMouseOut={handleValid}
              ref={emailRef}
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              placeholder="message"
              value={isValid.message}
              onChange={handleChange}
              onMouseOut={handleValid}
              ref={msgRef}
            ></textarea>
          </div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
            name="msg"
            value={errMsg}
          />

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Contact;
