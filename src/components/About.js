// Import necessary dependencies
import React from 'react';

// Define the About component as a class
const About = ()=> {
  
    return (
      <div className="container mt-4">
        <h2>About QuickReads NewsApp</h2>
        <p>
          Welcome to QuickReads NewsApp, your go-to source for quick and reliable news updates. Our mission is to provide you with the latest and most relevant news stories in a fast and accessible way.
        </p>
        <div className="key-features">
          <p className="font-weight-bold">Key Features:</p>
          <ul>
            <li>Instant Updates: Stay informed with real-time news updates from various sources.</li>
            <li>Customized News Feed: Tailor your news feed based on your interests and preferences.</li>
            <li>User-Friendly Design: Our app is designed for a seamless and intuitive user experience.</li>
            <li>Breaking News Alerts: Receive notifications for breaking news stories as they happen.</li>
          </ul>
        </div>
        <p>
          Whether you're a news enthusiast or just want to stay informed on current events, QuickReads NewsApp is here to make your news-reading experience quick, convenient, and enjoyable.
        </p>
        <p>
          Thank you for choosing QuickReads NewsApp!
        </p>

        {/* Footer Section */}
        <footer className="footer mt-5 text-center">
          <p>Created by Rana Wajahat Saleem</p>
        </footer>
      </div>
    );

}

export default About;
