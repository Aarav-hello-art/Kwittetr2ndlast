//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDSNdPjNo_7M5VMbQyw7_JoSvlu2m-8BO8",
      authDomain: "kwitter-e96d7.firebaseapp.com",
      databaseURL: "https://kwitter-e96d7-default-rtdb.firebaseio.com",
      projectId: "kwitter-e96d7",
      storageBucket: "kwitter-e96d7.appspot.com",
      messagingSenderId: "530698927065",
      appId: "1:530698927065:web:04c6d2725cd1a0332e77c8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   //CODE FOR GETTING USERNAME AND ROOMNAME FORM USER NAME FROM LOCAL STORAGE
   var user_name = localStorage.getItem("username")
   var room_name = localStorage.getItem("roomname")

   function send() {
         message = document.getElementById("msg").value
         firebase.database().ref(room_name).push({
               USER : user_name,
               MESSAGE : message,
               LIKES : 0
         });
         document.getElementById("msg").value = ""
   }

   function logout() {
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")
      window.location = "index.html"
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
