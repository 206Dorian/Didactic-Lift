import React from 'react'

const Home = () => {

// ******


  return (
    <>

<container className='form-btn'>
                  <form>
                  Login 
                  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" /></form>
                  <form>Register
                  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
                  </form>
                  <hr id='indicator' />
                </container>

     

    </>
  )
}

export default Home