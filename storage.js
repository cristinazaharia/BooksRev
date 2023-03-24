function myFunction() {
        var name = document.getElementById("fn").value;
        var review = document.getElementById("title").value;
      /*  const comment= {
            name: name,
            review: review
        }*/
       window.sessionStorage.setItem('name',name);
       window.localStorage.setItem('review',review);
       window.onload =function() {
       document.getElementById("bt").onsubmit = store;
    }
};

