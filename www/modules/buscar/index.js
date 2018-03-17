var app = {
  // Application Constructor
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
      document.addEventListener('backbutton', this.onBackKeyDown.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
      this.receivedEvent('deviceready');
      //this.receivedEvent('backbutton');
  },



  onBackKeyDown: function() {
      alert("vayase");
      //let url = "../../index.html";
      window.location.href = "../../index.html";
      //$(location).attr('href',url);
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');

      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');

      console.log('Received Event: ' + id);
  }
};

app.initialize();