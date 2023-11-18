
var typingEffect = new Typed(".multiText",{
    strings : ["Coder", "Web Developer", "Front-End Developer"],
    loop : true, 
    typeSpeed : 100,
    backSpeed : 80, 
    backDelay : 1500
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
    tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });

    // <!-- emailjs to mail contact form data -->
    // $("#contact-form").submit(function (event) {
    //     emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

    //     emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
    //         .then(function (response) {
    //             console.log('SUCCESS!', response.status, response.text);
    //             document.getElementById("contact-form").reset();
    //             alert("Form Submitted Successfully");
    //         }, function (error) {
    //             console.log('FAILED...', error);
    //             alert("Form Submission Failed! Try Again");
    //         });
    //     event.preventDefault();
    // });
    // <!-- emailjs to mail contact form data -->

});