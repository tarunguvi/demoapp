import "./App.css";
import React from "react";

function App() {

  return (
    <div className="container">
      <nav>
        <ul>
        <li><a class="active" href="https://www.guvi.in">Home</a></li>
        <li><a href="https://www.guvi.in/courses">Courses</a></li>
        <li><a href="https://www.guvi.in/mlp/zen-class-common?utm_source=GUVI-Website&utm_medium=Homepage-Breadcrumbs&utm_campaign=Common-Homepage-Breadcrumbs">Live Classes</a></li>
        <li style={{float: "right"}}><a href="https://www.guvi.in/contact_us">Contact</a></li>
        </ul>
      </nav>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1 style={{color: 'green', fontSize: 100}}>Welcome to Guvi</h1>
        <h2 style={{fontSize: 40}}>Learn to Deploy your React App to Firebase, Vercel, Netlify</h2>
        <h2 style={{fontSize: 70}}>You are now seeing me on Vercel 😎 </h2>
      </div>
    </div>
  );
}

export default App;
