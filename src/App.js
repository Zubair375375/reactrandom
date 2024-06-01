import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "It is never too late to be what you might have been. - George Eliot",
    "To handle yourself, use your head; to handle others, use your heart. - Eleanor Roosevelt",
    "The best revenge is massive success. - Frank Sinatra",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "If you're going through hell, keep going. - Winston Churchill",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Act as if what you do makes a difference. It does. - William James",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Dream big and dare to fail. - Norman Vaughan",
    "Keep your eyes on the stars and your feet on the ground. - Theodore Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "What you do speaks so loudly that I cannot hear what you say. - Ralph Waldo Emerson",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "If you can dream it, you can achieve it. - Zig Ziglar",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
  ];
  const [randomQoute, setRandomQoute] = useState(
    "The best way to predict the future is to invent it. - Alan Kay"
  );
  const handleGenerate = function () {
    let qouteIndex = Math.floor(Math.random() * quotes.length);
    setRandomQoute(quotes[qouteIndex]);
  };

  return (
    <div className="App">
      <div
        style={{
          height: 50,
          color: "white",
          backgroundColor: "purple",
          fontSize: 30,
          padding: 20,
          fontWeight: 700,
        }}
      >
        {" "}
        Random Qoute Generator{" "}
      </div>
      <h3>{randomQoute}</h3>
      <button
        onClick={handleGenerate}
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 5,
          paddingBottom: 5,
          backgroundColor: "purple",
          color: "white",
          border: "none",
        }}
      >
        {" "}
        generater{" "}
      </button>
    </div>
  );
}

export default App;
