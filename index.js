

let nincs_hiba = true;

if (nincs_hiba) {
    $('.alert-message').css('display', 'none');
} else {
    $('.alert-message').css('display', 'block');
}


$('.image-popup').magnificPopup(
    {
        type:'image',
        gallery: {
            enabled: true
        }
    });

