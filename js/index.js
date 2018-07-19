var slideIndex = 1;
showPie(slideIndex);

    function plusImage(n){

        showPie(slideIndex += n);

    }

    function showPie(n) {

        var i;
        
        var x = document.getElementsByClassName("mySlides");

        if (n > x.length) {slideIndex = 1}

        if (n < 1) {slideIndex = x.length}

        for (i = 0; i < x.length; i++) {

            x[i].style.display = "none";

        }

        x[slideIndex-1].style.display = "block";

    }

    function minusImage(n){

        showPie(slideIndex += n);

    }

    function showPie(n) {

        var i;
        
        var x = document.getElementsByClassName("mySlides");

        if (n > x.length) {slideIndex = 1}

        if (n < 1) {slideIndex = x.length}

        for (i = 0; i < x.length; i++) {

            x[i].style.display = "none";

        }

        x[slideIndex-1].style.display = "block";

    }

    