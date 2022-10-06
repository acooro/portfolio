var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      
      data.forEach(function (user){
        var userName = document.createElement('h3');
        var userUrl = document.createElement ('p');
        userName.textContent = user.login;
        userUrl.textContent = user.url;
        userContainer.append (userName)
        userContainer.append (userUrl)

      })
    });
}
fetchButton.addEventListener('click', getApi);
