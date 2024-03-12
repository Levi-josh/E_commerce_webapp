self.addEventListener('push', (event) => {
    
      const notificationPayload =  event.data.json()
      const {notification} =  notificationPayload 
      console.log(event)
      console.log( notificationPayload)
      console.log('notification')
    event.waitUntil(
      self.registration.showNotification(notification.title, {body:notification.body,icon:notification.body||'https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph'})
    );
  });
  console.log('notification')