jQuery(document).ready(function($){
    //fixed header
    window.onscroll = function(){
        if(window.pageYOffset > 140) {
            $('#barra_nav').addClass("active");
        }else{
            $('#barra_nav').addClass("active");
        }
    }
});

//noticias





var firebaseConfig = {
    apiKey: 'AIzaSyBFYhF3q5dViza2jnq7PZtKycz1dZN0OX8',
    authDomain: 'duckriver-8b837.firebaseapp.com',
    databaseURL: 'https://duckriver-8b837-default-rtdb.firebaseio.com',
    projectId: 'duckriver-8b837',
    storageBucket: 'duckriver-8b837.appspot.com',
    messagingSenderId: '123456789',
    appId: '1:123456789:web:abcdefghi123456789',
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const ref = database.ref();

ref.on('value', snapshot => {
    const data = snapshot.val();
    console.log(data);
    formattedData = Object.values(data);
    let alteracao = formattedData[0]
    document.getElementById("S1").innerHTML = formattedData[1].S1;
});