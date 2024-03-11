import React,{useState} from 'react'

const Logout = () => {
   
    const [userId, setUserId] = useState('65ccb7984abbc67ca9a90231');
    const [response, setresponse] = useState({});
  console.log(response?.ok)
    const subscribeToPush = async () => {
      
      try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: 'BK3JoQ6S3KgLGwUfe3fyr3lH2fXb6kihvuHsLeDaObR1qG8VtRhBcRd_r-8-wMd4KTV79XtfPu83Vjq3bFEmqyo',
        });
        const options =  {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, subscription }),
          }
        // Send subscription and user ID to the server
       const res= await fetch(`https://backend-e-commerce-g7of.onrender.com/subscribe`, options);
  console.log(res)
  setresponse(res)
    
      } catch (error) {
        console.error('Error subscribing to push notifications:', error);
        
      }
    };
  
    const sendPushNotification = async () => {
      try {
        // Send request to the server to trigger push notification for a specific user
        const res = await fetch(`https://backend-e-commerce-g7of.onrender.com/send-notification/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(res)
        setresponse(res)
      } catch (error) {
        console.error('Error sending push notification:', error);
      
      }
    };
    return (
        <div>
            <button onClick={subscribeToPush}>subscribe</button><br></br>
            <button onClick={sendPushNotification} className='mt-20'>send</button>
            <p>{response?.ok?'true':'false'}</p>
        </div>
    )
}

export default Logout