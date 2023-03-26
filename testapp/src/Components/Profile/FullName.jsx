let fullName = 'Adonis Creed';

const FullName = () => {


  return (
    <div>
      <p style={{display:'inline', textDecoration:'underline'}}>Full Name</p> 
      <p style={{display:'inline', fontWeight:'bold'}}> {`: ${fullName}`}</p>
    </div>
  )
}

export default FullName;










// FullName.js: a functional component that returns your full name.