import React from 'react';
import '../App.css';


//add a registration form to the page with email, age, postcode, password, and password confirmation,and a submit button


export default function SignUp() {
    return(

  <sign-up-form>
    <label>
      Email:
      <input type="text" name="email" />
    </label>
    <label>
      Age:
      <input type="text" name="age" />
    </label>
    <label>
      Postcode:
      <input type="text" name="postcode" />
    </label>
    <label>
      Password:
      <input type="text" name="password" />
    </label>
    <label>
      Password Confirmation:
      <input type="text" name="password confirmation" />
    </label>
    <input type="submit" value="Submit" />
  </sign-up-form>

    );
}







