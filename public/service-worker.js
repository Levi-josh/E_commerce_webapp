
self.addEventListener('push', (event) => {
  const notificationPayload = event.data.json();
  const notification = notificationPayload.notification;
console.log(notification.type)
  //Check the contents of the notification to determine its type
  // if (notification.type === 'type1') {
  //   handleType1Notification(notification);
  // } else if (notification.type === 'type2') {
  //   handleType2Notification(notification);
  // } else {
  //   console.warn('Unknown notification type:', notification.type);
  // }
 handleType1Notification(notification);
})

function handleType1Notification(notification) {
  const iconUrl = notification.icon || './type1-icon.png';
 
  showNotification(notification.title, notification.body, iconUrl);
}

function showNotification(title, body, iconUrl) {
  self.registration.showNotification(title, {
    body: body,
    icon: iconUrl,
    
  });
}