// import React from 'react';
// import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import {Home, Profile, Message, NotFound} from '../containers/index'
// const App = () => {
//     return (
//         <BrowserRouter>
//         <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/profile" component={Profile} />
//             <Route path="/message" component={Message} />
//             <Route  component={NotFound} />
//         </Switch>
//         </BrowserRouter>
//     );
// }

// export default App;

// import React from 'react';
// import {Home, Profile, Message, NotFound} from '../containers/index';
// import { Navigate } from 'react-router-dom';


// const App = [
//     {
//         path: '/',
//         children: [
//             { path: '/', element: <Navigate to="/home" /> },
//             { path: 'dashboard', element: <Home /> },
//             {
//                 path: '/profile',
//                 children: [
//                   { path: '', element: <Profile/> },
//                 ]
//               },
//         ]
//     },
//     {
//         path: '/',
//         element: null,
//         children: [
//         //   { path: 'register', element: <RegisterView /> },
//         //   { path: 'login', element: <LoginView /> },
//           { path: '404', element: <NotFound /> },
//           { path: '*', element: <Navigate/> },
//           { path: '/', element: <Navigate to="/dashboard" /> },
    
//         ]
//       }
// ]

// export default App;

import React from 'react';
import '../styles/components/App.css';
import twit from  '../styles/img/twitter.jpg';
const App = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="row bg-primary">
            <div className="col-5">
              <img  src={twit} alt="twitter" className="img-fluid" />
            </div>
            <div className="col-7">`1</div>
          </div>
        </div>
      </>
    );
}

export default App;