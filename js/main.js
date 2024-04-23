new SimpleLightbox({elememnts:".galerie-container a"});
new SimpleLightbox({elememnts:".orar-imagini a"});

AOS.init({once:true});

emailjs.init("3WcbUjUnDiAbReP5n");

function mobileMenu() {
    var x = document.getElementById("navbar");

    if (x.className == "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_m1bs9md", "template_18t06lm", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })

    
}