// Initialize Firebase
var config = {
  apiKey: "AIzaSyAMlLZbLGyyAbhmk5nM8RQjS_NNsqmUvbI",
  authDomain: "portfolio-73d42.firebaseapp.com",
  databaseURL: "https://portfolio-73d42.firebaseio.com",
  projectId: "portfolio-73d42",
  storageBucket: "portfolio-73d42.appspot.com",
  messagingSenderId: "1012660138380"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form Submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}
