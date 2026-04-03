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
    <div style={{border:'2px solid #F00', width:'800px', padding:'5px', margin:'5px'}}>
      <b>Notifications : </b>
      <a href="http://localhost:5000/notify?title=Hello&message=World" target="_blank" rel="noopener noreferrer">Send Test Notification</a>
      {notifications.map((n, i) => (
        <div key={i} style={{border:'1px solid black', margin:'5px', padding:'5px'}}>
          <b>{n.title} : </b>
          <>{n.message}</>
        </div>
      ))}
    </div>
  );
}

export default NotificationApp;