import React from "react";
import './NormalForm.css'
function NormalForm()
{
  const submitOnClick = () => {
  alert('Form Submittted Successfully')
}
    return (
        
   
       <div>
       <form>
                <h1>LOGIN</h1>
                <label>Enter your name</label>
                <input type="text" name="name" required/>
                <label>Enter your email</label>
                <input type="email" name="email" required/>
                <label>Enter your password</label>
                <input type="password" name="pass" required/>
                <br />
                <br />
                <label>Select the subject</label>
                <select required>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C">C</option>
                </select>
                <br />
                <br />
                <label>Enter your gender</label>
                <input type="radio" name="gender" value="male" />Male
                <input type="radio" name="gender" value="female" />Female
                <input type="radio" name="gender" value="others" />Others 
                <br />
                <br />
                <label>Select your hobbies</label>
                <div class="checkbox-group required">
                <input type="checkbox" name="hobbies" value="reading" />Reading Books
                <br />
                <input type="checkbox" name="hobbies" value="playing" />Playing Cricket
                <br />
                <input type="checkbox" name="hobbies" value="trekking" /> Trekking
                </div>
                <br />
                <br />
          
              <button onClick={submitOnClick}>Submit</button>          
     </form>
    </div>
    
    )
}
export default NormalForm;