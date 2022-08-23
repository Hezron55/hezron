const bar = document.getElementById('bar');
const nar = document.getElementById('navbar');
 if(bar){
    bar.addEventListener('click',() =>{
        nav.classlist.add('active');
    })


 }
 /* A function that is called when the page is loaded. It is used to add an event listener to the form.
 The event listener is used to prevent the default action of the form, which is to submit the form.
 It then creates a new FormData object from the form and uses the fetch API to send the data to the
 server. */
 window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  });