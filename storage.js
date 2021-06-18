function myFunction() {
        var name = document.getElementById("fn").value;
        var review = document.getElementById("title").value;
        const comment= {
            name: name,
            review: review
        }
       window.sessionStorage.setItem('comment',JSON.stringify(comment));
       window.localStorage.setItem('comment',JSON.stringify(comment));
       window.onload =function() {
       document.getElementById("bt").onsubmit = store;
    }
    };
