// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
var firebase = require('firebase');
var $ = require('jquery')
	var config = {
    apiKey: "AIzaSyCZLUzrohM-sSo6xdNozSj45tw7JO161Bw",
    authDomain: "fotogeo-16a78.firebaseapp.com",
    databaseURL: "https://fotogeo-16a78.firebaseio.com",
    projectId: "fotogeo-16a78",
    storageBucket: "fotogeo-16a78.appspot.com",
    messagingSenderId: "1093165096555"};

	var jhg = document.getElementById("imgf");
	var uio = [];
var dados1 = [];
var furlf;
	var defaultApp = firebase.initializeApp(config);
 var database = firebase.database();

console.log(defaultApp.name);  // "[DEFAULT]"

////// cria blocos para cada elemento

function createCard(data) {
	$("#imgf").append( '<img  src="'+ data.foto +'" width="100px" height="auto"/>');
	//jhg.innerHTML = furlf;
	console.log(data.foto + '  <  >');

	
}

  function updateUI(data) {
  
  for (var i = 0; i < data.length; i++) {
    createCard(data[i]);
  }
}


var url = 'https://fotogeo-16a78.firebaseio.com/registro.json';
var networkDataReceived = false;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    networkDataReceived = true;
	window.furlf = data.foto;
	


//$("#tarima").attr("src", data.itemcod.foto);
	console.log(data.foto + '<???>' + jhg) ;
	
    console.log('From web', data);
    var dataArray = [];
    for (var key in data) {
     dataArray.push(data[key]);
     uio.push(data[key]);
    }
    updateUI(dataArray);
	window.dados1 = uio;
	console.log(uio.length + '<???>' + jhg) ;
	
	return window.dados1, window.furlf;
  });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
