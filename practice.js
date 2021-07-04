var firebaseConfig = {
    apiKey: "AIzaSyBIpJz-X98Iz6ugQI9ETPfzqg7FumO7acA",
    authDomain: "prac-62c08.firebaseapp.com",
    databaseURL: "https://prac-62c08-default-rtdb.firebaseio.com",
    projectId: "prac-62c08",
    storageBucket: "prac-62c08.appspot.com",
    messagingSenderId: "1063170141618",
    appId: "1:1063170141618:web:2ad9e90fdf46c68ee388ab",
    measurementId: "G-T03NQYGNFM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//ADD YOUR FIREBASE LINKS

function addUser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });    
}