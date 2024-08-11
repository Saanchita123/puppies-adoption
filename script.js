document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    document.getElementById('success-message').style.display = 'block';

   
    document.getElementById('contact-form').style.display = 'none';

   
    setTimeout(function() {
        window.location.href = 'index.html'; 
    }, 3000);
});
