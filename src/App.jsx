import { useState, useEffect } from 'react'

import './App.css'

function App() {
 const [formData, setFormData] = useState({
  name : '',
  password: '',
  showPassword: false
 })

 const togglePasswordVisibility = (e) => {
  e.preventDefault();
  setFormData({
    ...formData,
    showPassword: !formData.showPassword
  });
};



//  const [showPassword, setShowPassword] = useState(false);

function handleSubmit(event) {
  const { name, password, value } = event.target;
  event.preventDefault();
  setFormData({
    ...formData,
    [name]: value,
    [password]: value
  });
}


useEffect(() => {
  if (formData.name) {
    let string = ()=>{
      let arr = formData.name.split('');
      arr.splice(3,2,'bb');
      return arr.join('');
    };

    setTimeout(() => {
      setFormData((prevData) =>(

        { ...prevData,
           name:  string() 
      }));
    }, 2000);
  }
}, [formData.password]);

// useEffect(() => {
//   if (formData.name) {
//     setTimeout(() => {
//       setFormData((prevData) => ({
//         ...prevData,
//         name: prevData.name + 'xyz'
//       }));
//     }, 2000);
//   }
// }, [formData.name]);

const labelStyle = {
  color: 'red',

}
 

  return (
    <>
     <form>

      <label htmlFor="name">Name:</label>
      <input 
      type="text" 
      name="name" 
      id="name"
      value={formData.name}
      onChange={handleSubmit}
      />
      {/* <label style = {labelStyle}>xzc
      {
        //password.length < 2 ? 'Password must be 8 characters long!' : ''
      }
       </label> */}
<br/>
<br/>
      <label htmlFor='password'>Password:</label>
      <input 
      type={formData.showPassword ? "text" : "password"} 
      name = 'password'
      id='password'
      value={formData.password}
      onChange={handleSubmit}
      />  
      <button onClick={togglePasswordVisibility}>👁️</button>

<br/>
<br/>    

    <label htmlFor="email">em@il: </label>
    <input 
    type='email'
    name='email'
    id='email'
    value={formData.email}
    onChange={handleSubmit}
    />
<br/>
<br/>
<fieldset>
      <legend>Gender :</legend>
    <input type="radio" name="radio" id="radio" value='Male' />
    <label htmlFor="radio" id="radiolabel">Male</label>

    <input type="radio" name="radio" id="radio" value='Female' />
    <label htmlFor="radio" id="radiolabel">Female</label>
    
    <input type="radio" name="radio" id="radio" value='Unknown' />
    <label htmlFor="radio" id="radiolabel">Unknown</label>

    <input type="radio" name="radio" id="radio" value='UnVerified' />
    <label htmlFor="radio" id="radiolabel">UnVerified</label>

    <input type="radio" name="radio" id="radio" value='auto' />
    <label htmlFor="radio" id="radiolabel">auto</label>

    <input type="radio" name="radio" id="radio" value='not available' />
    <label htmlFor="radio" id="radiolabel">not available</label>

    <input type="radio" name="radio" id="radio" value='comming soon' />
    <label htmlFor="radio" id="radiolabel">comming soon</label>

    <input type="radio" name="radio" id="radio" value='idk' />
    <label htmlFor="radio" id="radiolabel">idk</label>

</fieldset>
<br/>
<br/>

    <label htmlFor="whatyoulike">What you like?</label>

    <div className="checkbox">
      <input type="checkbox"  name="c1" />
      <label htmlFor="c1"> I like pink</label>
    </div>

    
    <div className="checkbox">
      <input type="checkbox"  name="c2" />
      <label htmlFor="c2"> I like you</label>
    </div>

    
    <div className="checkbox">
      <input type="checkbox"  name="c3" />
      <label htmlFor="c3"> I like watching people fight</label>
    </div>
    


<br/>
<br/>

    <fieldset>
      <legend>Favourite Color:</legend>
      <input type="color" id="favcolor" name="favcolor" />
    </fieldset>



     </form>

    </>
  )
}

export default App
