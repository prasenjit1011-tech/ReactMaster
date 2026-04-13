import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

// Define the shape of a notification
interface Notification {
  title: string;
  message: string;
}

// Create typed socket instance
const socket: Socket = io('http://localhost:5000');

function NotificationApp() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    socket.on("notification", (data: Notification) => {
      setNotifications(prev => [data, ...prev]); // keep history
    });

    // Cleanup to avoid duplicate listeners
    return () => {
      socket.off("notification");
    };
  }, []);

  return (
    <div style={{ border: '2px solid #F00', width: '800px', padding: '5px', margin: '5px' }}>
      <b>New Notifications : </b>
      <a
        href="http://localhost:5000/notify?title=Hello&message=World"
        target="_blank"
        rel="noopener noreferrer"
      >
        Send Test Notification
      </a>

      {notifications.map((n, i) => (
        <div key={i} style={{ border: '1px solid black', margin: '5px', padding: '5px' }}>
          <b>{n.title} : </b>
          <>{n.message}</>
        </div>
      ))}
    </div>
  );
}

export default NotificationApp;