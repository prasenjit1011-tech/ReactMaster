import React, { useState } from 'react';
import './App.css'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [faq, setFaq] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  if (!loggedIn) {
    return (
      <div>
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button onClick={() => setLoggedIn(true)}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, Admin</h2>
      <button onClick={() => setLoggedIn(false)}>Logout</button>

      <h3>Create FAQ</h3>
      <input placeholder="Enter question" value={question} onChange={e => setQuestion(e.target.value)} />
      <input placeholder="Enter answer" value={answer} onChange={e => setAnswer(e.target.value)} />
      <button onClick={() => {
        setFaq([...faq, { question, answer }]);
        setQuestion('');
        setAnswer('');
      }}>Add FAQ</button>

      <h3>FAQ List</h3>
      <ul>
        {faq.map((item, index) => (
          <li key={index}>
            <strong>{item.question}</strong>: {item.answer}
            <button onClick={() => setFaq(faq.filter((_, i) => i !== index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
