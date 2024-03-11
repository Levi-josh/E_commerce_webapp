self.addEventListener('push', (event) => {
    
      const notificationPayload =  event.data.json()
      const {notification} =  notificationPayload 
      console.log(event)
      console.log( notificationPayload)
      console.log('notification')
    event.waitUntil(
      self.registration.showNotification(notification.title, {body:notification.body})
    );
  });
  console.log('notification')