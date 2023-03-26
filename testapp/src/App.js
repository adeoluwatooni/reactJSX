import React from "react";
import Address from "./Components/Profile/Address";
import FullName from "./Components/Profile/FullName";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";


const App = () => {
 return (
   <div >
     <h3>JSX And React Components Checkpoint</h3>
     <div style={{borderWidth:1, borderStyle:'solid', borderColor:'black', width:'550px', backgroundColor:'beige', margin:'auto'}}>
        <ProfilePhoto />
        <FullName />
        <Address />
     </div>
   </div>
 );
};

export default App;