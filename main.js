// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(() => {
    console.log('Service Worker Registered');
  });
}

// Ask for permission and subscribe
function subscribe() {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      navigator.serviceWorker.ready.then(reg => {
        reg.showNotification("PayPal", {
          body: "You purchased $300 in BTC\nContact: 1-888-123-4567",
          icon: "https://www.paypalobjects.com/webstatic/icon/pp258.png",
          badge: "https://www.paypalobjects.com/webstatic/icon/pp258.png",
        });
      });
    }
  });
}
