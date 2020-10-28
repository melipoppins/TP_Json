$(function() {
    $('.card-header ul li a').click(function() {
        /*$.ajax({
            url: $(this).attr('href'),

            success: function(data) {
                $('.card-body').empty();
                $('.card-body').append(data);
            },
            error: function(xhr, status, text) {
                console.log("Recuperer le code erreur" + xhr.status);
                console.log("Recuperer le status" +status);
                console.log("Recuperer le message" + text);
            }
        })*/
        $.ajax({
            url: "js/liste_etudiants.json",
            dataType: "json",

            success: function(data) {
                $('.card-body').empty();
                for(let i=0; i<data.etudiants.length; i++) {
                    //let liste = JSON.stringify(data.etudiants[i]);
                    if(data.etudiants[i].moyenne >= 10) {
                        $('.card-body').append("<p>Admis = " + data.etudiants[i].nom + " " + data.etudiants[i].prenom + "</p>");
                    } else {
                        $('.card-body').append("<p>Refusé = " + data.etudiants[i].nom + " " + data.etudiants[i].prenom + "</p>");
                    }
                }



            },
            error: function(xhr, status, text) {
                console.log("Recuperer le code erreur" + xhr.status);
                console.log("Recuperer le status" +status);
                console.log("Recuperer le message" + text);
            }
        })
        return false;
    })
});
