import React, { useState } from "react";

function Form({firstName, lastName, handleFirstNameChange, handleLastNameChange}) {
  
  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange}/>
      <input type="text" value={lastName} onChange={handleLastNameChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;