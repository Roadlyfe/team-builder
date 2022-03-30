import React from "react";

const Form = (props) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    props.change(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          placeholder="Name goes here!"
          value={props.values.name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label>
        EMail
        <input
          placeholder="Enter Email"
          value={props.values.email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Role
        <input
          placeholder="What is your role"
          value={props.values.role}
          name="role"
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit for team builder!" />
    </form>
  );
};

export default Form;
