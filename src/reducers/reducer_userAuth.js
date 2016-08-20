import { browserHistory } from 'react-router';

export default function(state = null, action) {
  console.log('search reducer');
  switch(action.type) {
    case 'USER_REGISTER':
      firebase.auth().createUserWithEmailAndPassword(action.payload.email, action.payload.password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        if ('auth/email-already-in-use' === error.code) {
          alert('אימייל זה נמצא בשימוש על ידי משתמש אחר, נסה שנית עם מייל שונה');
        } else if ('auth/invalid-email' === error.code) {
          alert('כתובת המייל שהזנת אינה חוקית, אנה נסה שנית');
        }
      }).then(function(result) {
          browserHistory.push('/');
          return result;
      });
    break;

    case 'USER_LOGIN':
      firebase.auth().signInWithEmailAndPassword(action.payload.email, action.payload.password).then(function(result) {
        browserHistory.push('/');
        return result;
      }, function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
    break;

    case 'USER_LOGOUT':
      firebase.auth().signOut().then(function(result) {
        alert('התנתקת בהצלחה');
        return null;
      }, function(error) {
        var errorMessage = error.message;
        alert(errorMessage);
      });
    break;
  }

  return state;
}
