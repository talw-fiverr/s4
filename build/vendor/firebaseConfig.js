var config = {
  apiKey: "AIzaSyBJvycFmd4m8uD6Q5UKFvhmDBTn7_B-pNc",
  authDomain: "mygroups-9ffdc.firebaseapp.com",
  databaseURL: "https://mygroups-9ffdc.firebaseio.com",
  storageBucket: "mygroups-9ffdc.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database();

// - - - - - Progress bar logic - - - - -//
// Get elements
// var uploader = document.getElementById('uploader');
// var fileButton = document.getElementById('fileButton');
//
// // Listen for file selected
// fileButton.addEventListener('change', function(e) {
//   // Get the file
//   var file = e.target.files[0];
//
//   // Create a storage ref
//   var storageRef = firebase.storage().ref('users_images/' + file.name);
//
//   //upload the file
//   var task = storageRef.put(file);
//
//   //update the progress bar
//   task.on('state_changed',
//   function progress(snapshot){
//     var precentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     uploader.value = precentage;
//   },
//   function error(err) {
//
//   },
//   function complete() {
//
//   }
// )
// });
// - - - - - - - - - - - - - - - - -//

// - - - - realTime dataBase - - - - //
function setData(userId, name, message) {
  firebase.database().ref('users/' + userId).set({
    message: message,
    name: name
  }).then(function() {
    console.log('message saved');
  }, function(error) {
    var errorMessage = error.message;
    alert(errorMessage);
  });
};

function removeData(groupName) {
  firebase.database().ref('groups/' + groupName).remove().then(function() {
    console.log('removeData success');
  }, function(error) {
    var errorMessage = error.message;
    alert(errorMessage);
  });
};

var tempInfo = {
  groupInfo: {
    name: 'ספורט אתגרי',
    title: 'אוהבי ספורט אתגרי',
    managerName: 'טל וסרמן',
    address: 'קרית אתא',
    groupMaxSize: 30,
    groupCurSize: 10,
    ageRangeMax: 30,
    ageRangeMin: 35,
    sportType: {
      'ריצה': true,
      'שחיה': true,
      'אופנים': true
    }
  }
};

var models = {
  currentGroup: {},
  allGroups: {},
  search: {}
};

function addGroup(groupInfo) {
  firebase.database().ref('groups/' + groupInfo.name).set(groupInfo).then(function() {
    console.log('addData success');
  }, function(error) {
    var errorMessage = error.message;
    alert(errorMessage);
  });
};

function updateData(groupName, grouptTitle) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  //transactional process
  function toggleStar(postRef, uid) {
    postRef.transaction(function(post) {
      if (post) {
        if (post.stars && post.stars[uid]) {
          post.starCount--;
          post.stars[uid] = null;
        } else {
          post.starCount++;
          if (!post.stars) {
            post.stars = {};
          }
          post.stars[uid] = true;
        }
      }
      return post;
    });
  }

  // Get a key for a new Post. (not needed right now)
  //var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/groups/' + groupName] = grouptTitle;
  updates['/user-groups/' + uid + '/' + groupName] = grouptTitle;

  return firebase.database().ref().update(updates);
}

// read data once and not listen for changes
function getGroupInfo(groupName) {
  firebase.database().ref('groups/' + groupName).once('value').then(function(snapshot) {
    models.currentGroup = snapshot.val();
  });
};

function getAllGroupsInfo() {
  firebase.database().ref('groups').once('value').then(function(snapshot) {
    models.allGroups = snapshot.val();
  });
};

function searchGroups(term) {
   firebase.database().ref('groups')
     .orderByChild('promotion')
     .startAt(3)
     .endAt(80)
     .once('value').then(function(snapshot) {
        models.search = snapshot.val();
   });
};
// - - - - - - - - //


// - - - - user manager code - - - - //
var currentUser = null;

function passwordReset(emailAddress) {
  var auth = firebase.auth();

  auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
  }, function(error) {
    // An error happened.
  });

};

function reAuthenticate() {
  var user = firebase.auth().currentUser;
  var credential;
  // Prompt the user to re-provide their sign-in credentials
  user.reauthenticate(credential).then(function() {
    // User re-authenticated.
  }, function(error) {
    // An error happened.
  });
}

function updateUserPassword(password) {
  var user = firebase.auth().currentUser;

  user.updatePassword(password).then(function() {
    // Update successful.
  }, function(error) {
    // An error happened.
  });
};

function updateUserEmail(email) {
  var user = firebase.auth().currentUser;

  user.updateEmail(email).then(function() {
    // Update successful.
  }, function(error) {
    // An error happened.
  });
};

function updateUserInfo(name, picUrl) {
  var user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name,
    photoURL: picUrl
  }).then(function(result) {
    currentUser = getUserInfo();
    // Update successful.
  }, function(error) {
    // An error happened.
  });
};

function deleteUser() {
  var user = firebase.auth().currentUser;

  user.delete().then(function() {
    // User deleted.
  }, function(error) {
    // An error happened.
  });
}

function getUserInfo() {
  var user = firebase.auth().currentUser;

    if (user === null) {
      return null;
    }

    return details = {
      name:     user.displayName,
      email:    user.email,
      photoUrl: user.photoURL,
      userId:   user.uid
    }
};

function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  });
};

function signIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
    debugger;
    console.log(result)
  }, function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
};

function signOut() {
  firebase.auth().signOut().then(function(result) {
    // Sign-out successful.
    alert('signed out, please come back soon');
  }, function(error) {
    var errorMessage = error.message;
    alert(errorMessage);
  });
};

// watch the auth token.
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    currentUser = getUserInfo();
    // User is signed in.
  } else {
    currentUser = null;
    // No user is signed in.
  }
});
// - - - - - - - - //
