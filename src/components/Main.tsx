// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
  
//  function Main() {
//   const navigate = useNavigate();
  
//   const goToSecondsComp = () => {
  
//     // This will navigate to second component
//     navigate('/second'); 
//   };
//   const gotToFirstComp = () => {
  
//     // This will navigate to first component
//     navigate('/firstPage'); 
//   };
const Main: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Main components</p>
        {/* <button onClick={goToSecondsComp}>go to 2nd </button>
        <button onClick={gotToFirstComp}>go to 1st </button> */}
        <Link to="/secondPage">second page</Link>
        <Link to="/firstPage">first page</Link>
        <Link to="/loginPage"> Login page</Link>
      </header>
    </div>
  );
}
  
export default Main;

