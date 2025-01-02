// import logo from './logo.svg';
import './App.css';
// import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Rootlayout from './layouts/Rootlayout';
import Dashboard from './screens/Dashboard';
import Userlist from './screens/Userlist';
import Adduser from './screens/Adduser';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route index='dashboard' element={<Dashboard />} />
      <Route path='userlist' element={<Userlist />} />
      <Route path='adduser' element={<Adduser />} />
    </Route>
  )
)
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return(
    <RouterProvider router={router}/>
  );
}
export default App;
