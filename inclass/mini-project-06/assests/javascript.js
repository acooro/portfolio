var issueContainer = document.getElementById('results');


function getAPI(searchInput, typeInput) {

  fetch('https://www.loc.gov/' + typeInput + '?q=' + searchInput + '&fo=json')
  .then(function (response) {
      return response.json()
    })
    .then(function(data) {
      console.log (data)
      for (var i = 0; i < data.length; i++) {
        var searchInput = document.createElement('h3');
        var typeInput = document.createElement('p');
        searchInput.textContent = data[i].title;
        typeInput.textContent = data[i].type;
        issueContainer.append(searchInput);
        issueContainer.append(typeInput);
      }
    });
  }

  $("#submitBtn").on('click', function(event){
    event.preventDefault();
    var searchInput = $("#searchInput").val();
    var typeInput = $("#typeInput").val();
    getAPI(searchInput, typeInput);
    // window.location.href = 'index2.html';
    // displayResults();

  });

  $("#backBtn").on('click', function(event){
    event.preventDefault();
    console.log("click")
    window.location.href ="index.html"
  });