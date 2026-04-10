import "../App.css";
import { useState } from "react";

function NavBtn(): JSX.Element {
  const [layout, setLayout] = useState<'both' | 'left' | 'right'>('both');

  return (
      <div className="layout-toggle">
        <button 
          className={`layout-btn ${layout === 'left' ? 'layout-active' : ''}`}
          onClick={() => setLayout('left')}
        >
          ← Left
        </button>
        <button 
          className={`layout-btn ${layout === 'both' ? 'layout-active' : ''}`}
          onClick={() => setLayout('both')}
        >
          Both
        </button>
        <button 
          className={`layout-btn ${layout === 'right' ? 'layout-active' : ''}`}
          onClick={() => setLayout('right')}
        >
          Right →
        </button>
      </div>
  );
}

export default NavBtn;