import { Fragment } from "react";
import Ourcounter from "./component/Ourcounter";
import Header from "./component/header";
import Auth from "./component/auth";

 

function App() {
   return (
 <div className="bg-gray-400 min-h-screen">
<div className="container mx-auto p-6 space-y-6">
  <Header />
  <Ourcounter />
  <Auth />
</div>

</div>
    
 
  );
}

export default App;
