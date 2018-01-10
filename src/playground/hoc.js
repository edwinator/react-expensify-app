// HOC - component that renders a component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>            
            {props.isAdmin && <p>this is private info - no sharing</p>}
            <WrappedComponent {...props}/>
        </div>
    )

 };

const AdminInfo = withAdminWarning(Info);


const requireAuthentication = (WrappedComponent) => {
   return (props) => (
       <div>            
           {props.isAuthenticated && <p>authentication required</p>}
           <WrappedComponent {...props}/>
       </div>
   )

};


const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={true} info="details here"/>, document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={true} info="details here"/>, document.getElementById('app'));
// ReactDOM.render(<Info info="details here"/>, document.getElementById('app'));