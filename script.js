var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbytunRp514BX52ZoJ62Pm-tV4rd5qESaNkdhZnTJ0mr7Km_1YTg2BE-Z-ESiv_bCACBcg/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            msg.innerHTML = "Message sent Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.rest()
        })
        .catch(error => console.error('Error!', error.message))
    })
