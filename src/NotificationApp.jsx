import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function NotificationApp() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("notification", (data) => {
      setNotifications(prev => [data]);
    });
  }, []);

  return (
    <div>
      <h3>Notifications</h3>
      {notifications.map((n, i) => (
        <div key={i} style={{border:'1px solid black', margin:'5px', padding:'5px'}}>
          <b>{n.title}</b>
          <p>{n.message}</p>
        </div>
      ))}
      <hr />
    </div>
  );
}

export default NotificationApp;