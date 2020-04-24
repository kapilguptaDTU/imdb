var hellouser=document.querySelector('.hello-user');
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
   $(".g-signin2").css("display","none");
   $(".gout").css("display","block");
   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
hellouser.innerHTML="Hello "+profile.getName();
    // alert("hello"+profile.getName());

  }


  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    $(".g-signin2").css("display","block");
    $(".gout").css("display","none");
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    hellouser.innerHTML="";
 
  }


