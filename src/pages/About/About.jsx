import React from 'react'

function About() {
  return (
    <div>About</div>
  )
}

export default About
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import Terry from '../../../assets/terry.png';
// import './About.scss'; // Assuming you have a CSS file for additional styling

// function About() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       if (!response.ok) {
//         throw new Error('Failed to fetch users');
//       }
//       const data = await response.json();
//       setUsers(data);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         {/* <Link className="navbar-brand" to="/">
//           <img src={} alt="logo" height="30" />
//         </Link> */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto">
//             {loading ? (
//               <li className="nav-item">
//                 <span className="nav-link">Loading...</span>
//               </li>
//             ) : error ? (
//               <li className="nav-item">
//                 <span className="nav-link text-danger">{error}</span>
//               </li>
//             ) : (
//               users.map(user => (
//                 <li className="nav-item" key={user.id}>
//                   <span className="nav-link">{user.name}</span>
//                 </li>
//               ))
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }


