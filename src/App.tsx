import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
<h3>Portfolio Site</h3>
<p>This is a portfolio site built using React and hosted on AWS Amplify. It showcases various projects and skills, demonstrating proficiency in frontend development and cloud hosting.</p>
<p>**Frontend:** React application hosted on AWS Amplify.</p>
<p>**Backend:** Serverless architecture powered by AWS Lambda and AWS Step Functions, providing scalable API processing and workflow orchestration.</p>



      <div className="card">
        <button onClick={() => window.open('https://prasenjit1011.netlify.app/', '_blank')} style={{ color:'blue', border: '1px solid blue',
          backgroundColor: 'white',padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Go To Portfolio Page
        </button>        
      </div>
    </>
  )
}

export default App
