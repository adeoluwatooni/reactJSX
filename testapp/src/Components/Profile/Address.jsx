let home = '8541 Berro Drive, Philadelpha USA'

const Address = () => {

  return (
    <div>
      <p style={{display:'inline', textDecoration:'underline' }}>Home Address</p>
      <p style={{display:'inline', fontWeight:'bold'}}> { `: ${home}`}</p>
    </div>
  )
}

export default Address;







// Address.js:  a functional component that returns your address.