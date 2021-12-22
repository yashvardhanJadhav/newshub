<!DOCTYPE HTML>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="keywords" content="html, css bootstrap, mega menu, navbar, large dropdown, menu CSS examples" />
    <meta name="description" content="Bootstrap 5 navbar megamenu examples with simple css demo code" />

    <title>Home page</title>


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">

    <style type="text/css">
        body {
            background-color: rgb(239, 239, 239);
        }

        .navbar .megamenu {
            padding: 1rem;
        }

        .navbar li {
            padding: 0 20px 0 0;
        }

        /* ============ desktop view ============ */
        @media all and (min-width: 992px) {

            .navbar .has-megamenu {
                position: static !important;
            }

            .navbar .megamenu {
                left: 0;
                right: 0;
                width: 100%;
                margin-top: 0;
            }

        }

        #navbar {
            padding-top: 0;
            padding-bottom: 0;
        }

        /* ============ desktop view .end// ============ */


        /* ============ mobile view ============ */
        @media(max-width: 991px) {

            .navbar.fixed-top .navbar-collapse,
            .navbar.sticky-top .navbar-collapse {
                overflow-y: auto;
                max-height: 90vh;
                margin-top: 10px;
            }
        }

        /* ============ mobile view .end// ============ */


        .list-unstyled a:hover {
            border-bottom: 2px solid black;
            font-weight: 500;
        }

        .nav-link {
            text-decoration: none;
            display: inline-block;
            position: relative;
        }

        .nav-link:after {
            background: none repeat scroll 0 0 transparent;
            content: "";
            display: block;
            height: 2px;
            position: absolute;
            background: black;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
            left: 50%;


        }

        .nav-link:hover:after {
            width: 100%;
            left: 0;
        }

        .list-unstyled a {
            color: black;
            text-decoration: none;
        }

        .columnBorder {
            border-right: 2px solid rgb(188, 188, 188);

        }

        .navbar-brand {
            padding-bottom: 0;
        }

        /* .col-md-8 {
                                                                    height: 50px
                                                                } */
        .carousel {
            width: auto;

            height: 600px;

            overflow: hidden;
        }

        #myCarousel2 {
            width: 600px;
            margin: auto;
            height: 500px;
            overflow: hidden;
        }


        .cardFolder {
            height: 600px;
        }

        .upCard {
            border-bottom: 1px solid rgb(181, 181, 181);
            border-radius: 0;
            border-left: none;
            border-right: none;
            border-top: none;
            height: 137px;
            margin-bottom: 0px;
        }

        .upCardImg {
            height: 130px;
            width: 100%;
            border: 2px solid rgb(227, 227, 227);
        }

        .upCardImg:hoveR {
            transform: scale(1.15);
            overflow: hidden;
        }

        .upCardText {
            font-size: smaller;
        }

        .midCard {
            border-bottom: 1px solid rgb(181, 181, 181);
            border-radius: 0;
            border-left: none;
            border-right: none;
            border-top: none;
            height: 115px;
            margin-bottom: 0px;
            font-size: smaller;
        }

        .midCard img:hover {
            transform: scale(1.15);
            overflow: hidden;
        }

        .midCard img {
            height: 110px;
            width: 100%;
            border: 2px solid rgb(227, 227, 227);
        }

        .upImage-top-left {
            position: absolute;
            top: 1px;
            left: 1px;
            color: white;
            width: auto;
        }

        .cardMid {
            border: 1px solid rgb(181, 181, 181);
        }

        .cardMid p {
            font-size: smaller;
        }

        .cardMid img {
            height: 130px;
        }

        .cardMid img:hover {
            transform: scale(1.15);
            overflow: hidden;
            border: none;
        }

        .cardMid a {
            font-size: small;
        }

        #navbar1 {
            z-index: 1;
            position: fixed;
            transition: top 0.3s;
            width: 100%;
        }


        .sticky {
            position: fixed;
            top: 0;
            width: 100%;
        }

        .content {
            padding-top: 130px;
        }


        .imgContainer {
            overflow: hidden;
        }

        .dropdown-menu {
            border-radius: 0;
        }

        .midCard p {
            font-size: smaller;
        }

        .row>* {
            padding-left: 0;
            padding-right: 10;
        }



        footer a {
            color: inherit;
            text-decoration: none;
            transition: all 0.3s;
        }

        footer a:hover {
            color: inherit;
            text-decoration: none;
            transition: all 0.3s;
        }

        a:focus {
            color: inherit;
            text-decoration: none;
            transition: all 0.3s;
        }

        .form-control {
            background: #212529;
            border-color: #545454;
        }

        .form-control:focus {
            background: #212529;
        }

        footer {
            background: #212529;
        }

        .card-body {
            padding-left: 0;
            padding-top: 0;
            padding-right: 0;
            padding-bottom: 0;
        }

        .carousel-dark .carousel-caption {
            color: white;
        }



        /* .carousel-caption h1,p{
                                                                    background-color: black;
                                                                    color:white;
                                                                }
                                                                */
    </style>

    <script type="text/javascript">
        document.addEventListener("DOMContentLoaded", function () {
            /////// Prevent closing from click inside dropdown
            document.querySelectorAll('.dropdown-menu').forEach(function (element) {
                element.addEventListener('click', function (e) {
                    e.stopPropagation();
                });
            })
        });
        // DOMContentLoaded  end

        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar1").style.top = "0";
            } else {
                document.getElementById("navbar1").style.top = "-135px";
            }
            prevScrollpos = currentScrollPos;
        }
    </script>
</head>

<body>
    <div id="navbar1">
        <nav class="navbar navbar-light bg-light" style="border-bottom: 2px solid black;">
            <div class="container-fluid">
                <a class="navbar-brand" style="padding:0 0 0 0;" href="#">
                    <img src="img/instagram.png" alt="" width="20" height="20">
                </a><a class="navbar-brand" style="padding:0 0 0 0;" href="#">
                    <img src="img/facebook.png" alt="" width="20" height="20">
                </a><a class="navbar-brand" style="padding:0 0 0 0;" href="#">
                    <img src="img/twitter.png" alt="" width="20" height="20">
                </a>

                <a class="navbar-brand" href="#"
                    style="color:black;margin:auto; font-family: 'Archivo Black', sans-serif;">
                    <h1 style="margin-bottom: 0;">NEWS HUB</h1>
                </a>

                <button class="btn btn-outline-success" type="submit">Subscribe</button>
            </div>
            <div style="margin:auto; font-size: 13px; padding-left: 15px;">News blogs and Magazines</div>
        </nav>
        <!-- ============= COMPONENT ============== -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-light" id="navbar" style="border-bottom: 4px solid black;">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" style="background-color: black;"></span>
                </button>
                <div class="collapse navbar-collapse" id="main_nav">
                    <ul class="navbar-nav" style="margin:auto;">
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color:black">Latest</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color:black">COVID-19</a>
                        </li>
                        <li class="nav-item dropdown has-megamenu">
                            <a class="nav-link" href="#" data-bs-toggle="dropdown" style="color:black">India <img
                                    src="img/drop down.png" alt="" width="10" height="10"></a>
                            <div class="dropdown-menu megamenu" role="menu">
                                <div class="row g-3">
                                    <div class="col-lg-3 col-6 columnBorder">
                                        <div class="col-megamenu">
                                            <h6 class="title"><b>Daily News</b></h6>
                                            <ul class="list-unstyled">
                                                <li><a href="#">Latest</a></li>
                                                <li><a href="#">COVID-19</a></li>
                                                <li><a href="#">Business</a></li>
                                                <li><a href="#">Economics</a></li>
                                                <li><a href="#">Top-Trends</a></li>
                                            </ul>
                                        </div> <!-- col-megamenu.// -->
                                    </div><!-- end col-3 -->
                                    <div class="col-lg-3 col-6" style="padding-left: 20px;">
                                        <div class="col-megamenu">
                                            <h6 class="title"><b>States</b></h6>
                                            <ul class="list-unstyled">
                                                <li><a href="#">Maharashtra</a></li>
                                                <li><a href="#">Delhi</a></li>
                                                <li><a href="#">Karnataka</a></li>
                                                <li><a href="#">Tamil Nadu</a></li>
                                                <li><a href="#">Telangana</a></li>
                                                <li><a href="#">Uttar Pradesh</a></li>
                                                <li><a href="#">West Bengal</a></li>
                                                <li><a href="#">Gujarat</a></li>
                                                <li><a href="#">Madhya Pradesh</a></li>
                                                <li><a href="#">Bihar</a></li>
                                                <li><a href="#">Chandigarh</a></li>
                                                <li><a href="#">Rajasthan</a></li>
                                            </ul>
                                        </div> <!-- col-megamenu.// -->
                                    </div><!-- end col-3 -->
                                    <div class="col-lg-3 col-6">
                                        <div class="col-megamenu">
                                            <h6 class="title"><b>States</b></h6>
                                            <ul class="list-unstyled">

                                                <li><a href="#">Assam</a></li>
                                                <li><a href="#">Chattisgarh</a></li>
                                                <li><a href="#">Goa</a></li>
                                                <li><a href="#">Haryana</a></li>
                                                <li><a href="#">Himachal Pradesh</a></li>
                                                <li><a href="#">Jammu Kashmir</a></li>
                                                <li><a href="#">Jharkhand</a></li>
                                                <li><a href="#">Kerala</a></li>
                                                <li><a href="#">Manipur</a></li>
                                                <li><a href="#">Meghalaya</a></li>
                                                <li><a href="#">Mizoram</a></li>
                                                <li><a href="#">Arunachal Pradesh</a></li>
                                            </ul>
                                        </div> <!-- col-megamenu.// -->
                                    </div>
                                    <div class="col-lg-3 col-6">
                                        <div class="col-megamenu">
                                            <h6 class="title"><b>States</b></h6>
                                            <ul class="list-unstyled">
                                                <li><a href="#">Nagaland</a></li>
                                                <li><a href="#">Odisha</a></li>
                                                <li><a href="#">Punjab</a></li>
                                                <li><a href="#">Sikkim</a></li>
                                                <li><a href="#">Tripura</a></li>
                                                <li><a href="#">Uttarakhand</a></li>
                                                <li><a href="#">Andaman and Nikobar Islands</a></li>
                                                <li><a href="#">Dadra Nagra Haveli</a></li>
                                                <li><a href="#">Daman Diu</a></li>
                                                <li><a href="#">Lakshwadweep</a></li>
                                                <li><a href="#">Pondicherry</a></li>
                                                <li><a href="#">Andhra Pradesh</a></li>

                                            </ul>
                                        </div> <!-- col-megamenu.// -->
                                    </div><!-- end col-3 -->
                                </div><!-- end row -->
                            </div> <!-- dropdown-mega-menu.// -->
                        </li>
                        <li class="nav-item dropdown has-megamenu">
                            <a class="nav-link" href="#" data-bs-toggle="dropdown" style="color:black">
                                Cities <img src="img/drop down.png" alt="" width="10" height="10"></a>
                            <div class="dropdown-menu megamenu" role="menu">
                                <div class="row g-3">
                                    <div class="col-lg-3 col-6 columnBorder">
                                        <div class="col-megamenu">
                                            <ul class="list-unstyled">
                                                <li><a href="#0">Mumbai</a></li>
                                                <li><a href="#0">Delhi</a></li>
                                                <li><a href="#0">Bengaluru</a></li>
                                                <li><a href="#0">Hydrebad</a></li>
                                                <li><a href="#0">Kolkata</a></li>
                                                <li><a href="#0">Chennai</a></li>
                                                <li><a href="#0">Agra</a></li>
                                                <li><a href="#0">Ahmedabad</a></li>
                                                <li><a href="#0">Ajmer</a></li>



                                            </ul>
                                        </div> <!-- col-megamenu.// -->
                                    </div><!-- end col-3 -->
                                    <div class="col-lg-3 col-6 columnBorder" style="padding-left: 20px;">
                                        <div class="col-megamenu">
                                            <ul class="list-unstyled">
                                                <li><a href="#0">Aurangabad</a></li>

                                                <li><a href="#0">Bareilly</a></li>
                                                <li><a href="#0">Bhubandshwar</a></li>
                                                <li><a href="#0">Bhopal</a></li>
                                                <li><a href="#0">Chandigarh</a></li>
                                                <li><a href="#0">Dehradun</a></li>
                                                <li><a href="#0">Faridabad</a></li>
                                                <li><a href="#0">Ghaziabad</a></li>
                                                <li><a href="#0">Guwahati</a></li>
                                            </ul>
                                        </div> <!-- col-megamenu.// -->
                                    </div><!-- end col-3 -->
                                    <div class="col-lg-3 col-6 columnBorder" style="padding-left: 20px;">
                                        <div class="col-megamenu">
                                            <ul class="list-unstyled">
                                                <li><a href="#0">Indore</a></li>

                                                <li><a href="#0">Jaipur</a></li>
                                                <li><a href="#0">Jammu</a></li>
                                                <li><a href="#0">Jodhpur</a></li>
                                                <li><a href="#0">Kanpur</a></li>
                                                <li><a href="#0">Meerut</a></li>
                                                <li><a href="#0">Nagpur</a></li>
                                                <li><a href="#0">Puducherry</a></li>
                                                <li><a href="#0">Pune</a></li>
                                            </ul>
                                        </div> <!-- col-megamenu.// -->
                                    </div>
                                    <div class="col-lg-3 col-6" style="padding-left: 20px;">
                                        <div class="col-megamenu">
                                            <ul class="list-unstyled">
                                                <li><a href="#0">Rajkot</a></li>
                                                <li><a href="#0">Shrinagar</a></li>
                                                <li><a href="#0">Surat</a></li>
                                                <li><a href="#0">Shimla</a></li>
                                                <li><a href="#0">Thirvananthapuram</a></li>
                                                <li><a href="#0">Udaipur</a></li>
                                                <li><a href="#0">Varanasi</a></li>
                                                <li><a href="#0">Vishakhapatnam</a></li>
                                            </ul>
                                        </div> <!-- col-megamenu.// -->
                                    </div><!-- end col-3 -->
                                </div><!-- end row -->

                            </div> <!-- dropdown-mega-menu.// -->
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false" style="color:black">World <img
                                    src="img/drop down.png" alt="" width="10" height="10">
                            </a>
                            <ul class="dropdown-menu list-unstyled" aria-labelledby="navbarDropdownMenuLink"
                                style="padding-left: 10px;">
                                <li>
                                    <a href="">World</a>
                                </li>
                                <li>
                                    <a href="">United States</a>
                                </li>
                                <li>
                                    <a href="">Pakistan</a>
                                </li>
                                <li>
                                    <a href="">South Asia</a>
                                </li>
                                <li>
                                    <a href="">United Kingdom</a>
                                </li>
                                <li>
                                    <a href="">Europe</a>
                                </li>
                                <li>
                                    <a href="">Middle East</a>
                                </li>
                                <li>
                                    <a href="">Rest Of World</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color:black">Business </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color:black"> Cricket</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false" style="color:black">Sports <img
                                    src="img/drop down.png" alt="" width="10" height="10">
                            </a>
                            <ul class="dropdown-menu list-unstyled" aria-labelledby="navbarDropdownMenuLink"
                                style="padding-left: 10px;">
                                <li>
                                    <a href="">IPL</a>
                                </li>
                                <li>
                                    <a href="">Football</a>
                                </li>
                                <li>
                                    <a href="">Badminton</a>
                                </li>
                                <li>
                                    <a href="">Hockey</a>
                                </li>
                                <li>
                                    <a href="">Tennis</a>
                                </li>
                                <li>
                                    <a href="">Racing</a>
                                </li>
                                <li>
                                    <a href="">Atheletics</a>
                                </li>
                                <li>
                                    <a href="">Shooting</a>
                                </li>
                                <li>
                                    <a href="">Volleyball</a>
                                </li>
                                <li>
                                    <a href="">Chess</a>
                                </li>
                                <li>
                                    <a href="">WWE</a>
                                </li>
                                <li>
                                    <a href="">Boxing</a>
                                </li>
                                <li>
                                    <a href="">Golf</a>
                                </li>
                                <li>
                                    <a href="">Snooker</a>
                                </li>
                                <li>
                                    <a href="">Wrestling</a>
                                </li>

                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color:black">Crypto</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false" style="color:black">Entertainment <img
                                    src="img/drop down.png" alt="" width="10" height="10">
                            </a>
                            <ul class="list-unstyled dropdown-menu" aria-labelledby="navbarDropdownMenuLink"
                                style="padding-left: 10px;">
                                <li>
                                    <a href="">Bollywood</a>
                                </li>
                                <li>
                                    <a href="">Hollywood</a>
                                </li>
                                <li>
                                    <a href="">Hindi</a>
                                </li>
                                <li>
                                    <a href="">English</a>
                                </li>
                                <li>
                                    <a href="">Tamil</a>
                                </li>
                                <li>
                                    <a href="">Telugu</a>
                                </li>
                                <li>
                                    <a href="">Bengali</a>
                                </li>
                                <li>
                                    <a href="">Punjabi</a>
                                </li>
                                <li>
                                    <a href="">Marathi</a>
                                </li>
                                <li>
                                    <a href="">Bhojpuri</a>
                                </li>
                                <li>
                                    <a href="">Gujrati</a>
                                </li>


                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false" style="color:black">Sources <img
                                    src="img/drop down.png" alt="" width="10" height="10">
                            </a>
                            <ul class="dropdown-menu list-unstyled" aria-labelledby="navbarDropdownMenuLink"
                                style="padding-left: 10px;">
                                <li>
                                    <a href="">Bollywood</a>
                                </li>
                                <li>
                                    <a href="">Hollywood</a>
                                </li>
                                <li>
                                    <a href="">Hindi</a>
                                </li>
                                <li>
                                    <a href="">English</a>
                                </li>
                                <li>
                                    <a href="">Tamil</a>
                                </li>
                                <li>
                                    <a href="">Telugu</a>
                                </li>
                                <li>
                                    <a href="">Bengali</a>
                                </li>
                                <li>
                                    <a href="">Punjabi</a>
                                </li>
                                <li>
                                    <a href="">Marathi</a>
                                </li>
                                <li>
                                    <a href="">Bhojpuri</a>
                                </li>
                                <li>
                                    <a href="">Gujrati</a>
                                </li>


                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color:black">Technology </a>
                        </li>


                    </ul>

                </div> <!-- navbar-collapse.// -->
            </div> <!-- container-fluid.// -->
        </nav>
    </div>
    <!-- ============= COMPONENT END// ============== -->

    <div class="content">
        <div class="mx-5 my-2">
            <div class="my-4">
                <div class="row" style="margin-left: 0; margin-right: 0;">
                    <div class="col-md-8">
                        <div>
                            <div id="carouselExampleDark" class="carousel carousel-dark slide"
                                style="border: 1px solid ; color: rgb(205, 205, 205);" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                        class="active" aria-current="true" aria-label="Slide 1"
                                        style="z-index:0;"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                                        aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
                                        aria-label="Slide 5"></button>
                                </div>
                                <div class="carousel-inner" id="part1left">
                                    <!-- <div class="carousel-item active" data-bs-interval="10000">

                                            <img class="center-block d-block w-100" src="img/modi.jpg"
                                                style="width: auto; height: 600px; overflow: hidden;" alt="...">
                                            <div class="upImage-top-left"><span
                                                    style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Politics</span>
                                            </div>
                                            <div class="carousel-caption d-none d-md-block">
                                                <h1><span style="background-color: black; color:white;">Firstslide
                                                        label</span>
                                                </h1>
                                                <p style="font-size: larger;"><span
                                                        style="background-color: black; color:white;">Some
                                                        representative placeholder content for the first
                                                        slide.</span></p>
                                            </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="2000">
                                            <img class="center-block d-block w-100"
                                                src="https://image.cnbcfm.com/api/v1/image/106905974-1625223609583-gettyimages-1233764530-CHINA-BEIJING-CPC-CENTENARY-GRAND-GATHERING-XI-JINPING-CN.jpg?v=1633927219"
                                                style="width: auto; height: 600px;           
                                                                                overflow: hidden;" alt="...">
                                            <div class="upImage-top-left"><span
                                                    style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Entertainment</span>
                                            </div>
                                            <div class="carousel-caption d-none d-md-block">
                                                <h1><span style="background-color: black; color:white;">Third slide
                                                        label</span>
                                                </h1>
                                                <p style="font-size: larger;"><span
                                                        style="background-color: black; color:white;">Some
                                                        representative placeholder content for the third
                                                        slide.</span></p>
                                            </div>

                                        </div>
                                        <div class="carousel-item">
                                            <img class="center-block d-block w-100"
                                                src="https://image.cnbcfm.com/api/v1/image/106950864-1633094064575-gettyimages-1036402324-64616035.jpeg?v=1633094193"
                                                style="width: auto; height: 600px; overflow: hidden;" alt="...">
                                            <div class="upImage-top-left"><span
                                                    style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Latest</span>
                                            </div>
                                            <div class="carousel-caption d-none d-md-block">

                                                <h1><span style="background-color: black; color:white;">Third slide
                                                        label</span>
                                                </h1>
                                                <p style="font-size: larger;"><span
                                                        style="background-color: black; color:white;">Some
                                                        representative placeholder content for the third
                                                        slide.</span></p>
                                            </div>
                                        </div> -->
                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleDark" data-bs-slide="prev" style="z-index:0;">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleDark" data-bs-slide="next" style="z-index:0;">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4" style="padding-left:10px; padding-right: 0;">
                        <div
                            style="background-color: white; border-top: 10px solid rgb(179, 0, 0); border-radius: 10px; padding-bottom:5px; height: 600px;">
                            <div class="mx-4 my-4" style=" padding-left: 10px;">
                                <h1>Entertainment</h1>
                                <hr>
                                <div id="part1right"></div>
                                <!--                                 
                                    <div class="row" style="padding-left: 10px;">
                                        <div class="col" style="padding:0 10px 20px 0; margin:0px 0px 0px 0px;">
                                            <div class="card mb-3 midCard"
                                                style="max-width: auto; height: 90px; border:none;">
                                                <div class="row g-0">
                                                    <div class="col-md-4">
                                                        <div class="imgContainer">
                                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                                class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                                        </div>
                                                    </div>
                                                    <div class="upImage-top-left"><span
                                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="card-body">
                                                            <h6 class="card-title">Card title</h6>
                                                            <p class="card-text upCardText">This is a wider card with
                                                                supporting
                                                                text
                                                                below
                                                                as a
                                                                natural
                                                                lead-in to additional content.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div> -->

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="mx-5 my-2" style="background-color: white; border-top: 10px solid purple; border-radius: 10px;">
            <div class="mx-4 my-4">
                <h1>Latest</h1>
                <hr>
                <div class="row" style="padding:0 0 10px 0;" id="part2">
                    <!-- <div class="col" style="margin: 0 12px 0 0; border-right: 2px solid rgb(215, 215, 215);">
                            <div class="card cardMid" style="width: auto; border:none;">
                                <div class="imgContainer">
                                    <img src="img/modi.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="upImage-top-left"><span
                                        style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Politics</span>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk
                                        of
                                        the card's content.</p>
                                </div>
                            </div>
                        </div> -->
                </div>
            </div>
        </div>
        <div class="mx-5 my-2" style="background-color: white; border-top: 10px solid blue; border-radius: 10px;">
            <div class="mx-4 my-4" style=" padding-left: 10px;">
                <h1>Sports</h1>
                <hr>
                <div class="row mx-2 my-2">
                    <div class="col" id="part3left">
                        <!-- <div class="card mb-3 midCard" style="max-width: auto;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> -->


                    </div>
                    <div class="col-md-auto">
                        <div id="myCarousel2" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="0" class="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="3"
                                    aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="4"
                                    aria-label="Slide 5"></button>
                            </div>
                            <div class="carousel-inner" id=part3mid>
                                <!-- <div class="carousel-item active">
                                        <img class="center-block d-block w-100" src="img/modi.jpg"
                                            style="width: 600px; height: 500px; overflow: hidden;" alt="...">
                                        <div class="upImage-top-left"><span
                                                style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Politics</span>
                                        </div>

                                        <div class="container">
                                            <div class="carousel-caption text-start">
                                                <h1>Example headline.</h1>
                                                <p>Some representative placeholder content for the first slide of the
                                                    carousel.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="center-block d-block w-100" src="img/modi.jpg"
                                            style="width: 600px; height: 500;  overflow: hidden;" alt="...">
                                        <div class="upImage-top-left"><span
                                                style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Politics</span>
                                        </div>

                                        <div class="container">
                                            <div class="carousel-caption">
                                                <h1>Another example headline.</h1>
                                                <p>Some representative placeholder content for the second slide of the
                                                    carousel.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="center-block d-block w-100" src="img/modi.jpg"
                                            style="width: 600px; height: 500;  overflow: hidden;" alt="...">
                                        <div class="upImage-top-left"><span
                                                style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Politics</span>
                                        </div>

                                        <div class="container">
                                            <div class="carousel-caption text-end">
                                                <h1>One more for good measure.</h1>
                                                <p>Some representative placeholder content for the third slide of this
                                                    carousel.
                                                </p>
                                            </div>
                                        </div>
                                    </div> -->
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel2"
                                data-bs-slide="prev" style="z-index:0;"><span class="carousel-control-prev-icon"
                                    aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel2"
                                data-bs-slide="next" style="z-index:0;"><span class="carousel-control-next-icon"
                                    aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                    <div class="col" id="part3right">


                    </div>
                </div>
            </div>
        </div>
        <div class="mx-5 my-2" style="background-color: white; border-top: 10px solid orange; border-radius: 10px;">
            <div class="mx-4 my-4" style=" padding-left: 10px;">
                <h1>Politics</h1>
                <hr>
                <div id="part4top"></div>
                <!-- <div class="card mb-3" style="width: 100%; border: none;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="img/modi.jpg" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8" style="padding-left: 40px;">
                                <div class="card-body">
                                    <h2 class="card-title">Card title</h2>
                                    <p class="card-text" style="font-size:large">This is a wider card with supporting text
                                        below
                                        as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div> -->

                <hr>
                <div class="row" style="padding-left: 10px;" id="part4bottom1"></div>
                <!-- <div class="row" style="padding-left: 10px;">
                        <div class="col">
                            <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> -->

                <div class="row" style="padding-left: 10px;" id="part4bottom2">
                </div>
            </div>
        </div>
        <div class="mx-5 my-2"
            style="background-color: white; border-top: 10px solid rgb(6, 183, 38); border-radius: 10px;">
            <div class="mx-4 my-4" style=" padding-left: 10px;">
                <h1>Technology</h1>
                <hr>
                <div class="row" style="padding-bottom: 20px;" id="part5">


                </div>
            </div>
        </div>
        <div class="mx-5 my-2"
            style="background-color: white; border-top: 10px solid rgb(204, 0, 255); border-radius: 10px; padding-bottom:5px;">
            <div class="mx-4 my-4" style=" padding-left: 10px;">
                <h1>Entertainment</h1>
                <hr>
                <div class="row" style="padding-left: 10px;" id="part6top">
                    <!-- <div class="col"
                            style="padding-bottom: 20px; margin:0px 0px 0px 0px; border-right:2px solid rgb(215, 215, 215);">
                            <div class="card bg-dark text-white">
                                <img src="img/esehi.png" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to
                                        additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div class="col"
                            style="padding-bottom: 20px; margin:0px 0px 0px 15px; border-right:2px solid rgb(215, 215, 215);;">
                            <div class="card bg-dark text-white">
                                <img src="img/esehi.png" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to
                                        additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div class="col" style="padding-bottom: 20px; margin:0px 0px 0px 15px;">
                            <div class="card bg-dark text-white">
                                <img src="img/esehi.png" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to
                                        additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div> -->
                </div>
                <div class="row" style="padding-left: 10px;" id="part6mid">
                    <!-- <div class="col"
                            style="padding:0 10px 20px 0; margin:0px 0px 0px 0px; border-right:2px solid rgb(215, 215, 215);;">
                            <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col"
                            style="padding:0 10px 20px 0; margin:0px 0px 0px 15px; border-right:2px solid rgb(215, 215, 215);;">
                            <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" style="height: 85px; border: none;" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col" style="padding:0 10px 20px 0; margin:0px 0px 0px 15px;">
                            <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" style="height: 85px; border: none;" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                </div>
                <div class="row" style="padding-left: 10px;" id="part6bottom">
                    <!-- <div class="col"
                            style="padding:0 10px 0px 0; margin:0px 0px 0px 0px; border-right:2px solid rgb(215, 215, 215);;">
                            <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col"
                            style="padding:0 10px 0px 0; margin:0px 0px 0px 15px; border-right:2px solid rgb(215, 215, 215);;">
                            <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" style="height: 85px; border: none;" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col" style="padding:0 10px 0px 0; margin:0px 0px 0px 15px;">
                            <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" style="height: 85px; border: none;" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                </div>
            </div>
        </div>
        <div class="mx-5">
            <div class="row">
                <div class="col">

                    <div class="mx-2 my-2"
                        style="background-color: white; border-top: 10px solid purple; border-radius: 10px; padding:0 0 0 0;">
                        <div class="mx-4 my-4">
                            <h1>Tesla</h1>
                            <hr>
                            <div class="list-group" id="part7left">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="mx-2 my-2"
                        style="background-color: white; border-top: 10px solid purple; border-radius: 10px;">
                        <div class="mx-4 my-4">
                            <h1>Crypto</h1>
                            <hr>
                            <div class="list-group" id="part7mid">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="mx-2 my-2"
                        style="background-color: white; border-top: 10px solid purple; border-radius: 10px;">
                        <div class="mx-4 my-4">
                            <h1>Cricket</h1>
                            <hr>
                            <div class="list-group" id="part7right">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="mx-5 my-2" style="background-color: white; border-top: 10px solid purple; border-radius: 10px;">
            <div class="mx-4 my-4">
                <h1>Latest</h1>
                <hr>
                <div class="row" style="padding:0 0 10px 0;" id="part8">
                    <!-- <div class="col" style="margin: 0 12px 0 0; border-right: 2px solid rgb(215, 215, 215);">
                            <div class="card cardMid" style="width: auto; border:none;">
                                <div class="imgContainer">
                                    <img src="img/modi.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="upImage-top-left"><span
                                        style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Politics</span>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the
                                        bulk
                                        of
                                        the card's content.</p>
                                </div>
                            </div>
                        </div> -->
                </div>
            </div>
        </div>
        <div class="mx-5 my-2" style="background-color: white; border-top: 10px solid orange; border-radius: 10px;">
            <div class="mx-4 my-4" style=" padding-left: 10px;">
                <h1>Politics</h1>
                <hr>
                <div id="part9top"></div>
                <!-- <div class="card mb-3" style="width: 100%; border: none;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="img/modi.jpg" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8" style="padding-left: 40px;">
                                <div class="card-body">
                                    <h2 class="card-title">Card title</h2>
                                    <p class="card-text" style="font-size:large">This is a wider card with supporting text
                                        below
                                        as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div> -->

                <hr>
                <div class="row" style="padding-left: 10px;" id="part9bottom1"></div>
                <!-- <div class="row" style="padding-left: 10px;">
                        <div class="col">
                            <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3 midCard" style="max-width: auto; height: 90px; border:none;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="imgContainer">
                                            <img src="https://cdn.cnn.com/cnnnext/dam/assets/211028161207-rivian-r1t-super-tease.jpeg"
                                                class="img-fluid upCardImg" style="height: 85px;" alt="...">
                                        </div>
                                    </div>
                                    <div class="upImage-top-left"><span
                                            style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Tech</span>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title">Card title</h6>
                                            <p class="card-text upCardText">This is a wider card with supporting text below
                                                as a
                                                natural
                                                lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> -->

                <div class="row" style="padding-left: 10px;" id="part9bottom2">
                </div>
            </div>
        </div>
        <div class="mx-5 my-2"
            style="background-color: white; border-top: 10px solid rgb(6, 183, 38); border-radius: 10px;">
            <div class="mx-4 my-4" style=" padding-left: 10px;">
                <h1>Technology</h1>
                <hr>
                <div class="row" style="padding-bottom: 20px;" id="part10">


                </div>
            </div>
        </div>
        <footer class="w-100 py-4 flex-shrink-0">
            <div class="container py-4">
                <div class="row gy-4 gx-5">
                    <div class="col-lg-4 col-md-6">
                        <a class="navbar-brand" href="#"
                            style="color:white;margin:auto; font-family: 'Archivo Black', sans-serif;">
                            <h1 style="margin-bottom: 0;">NEWS HUB</h1>
                        </a>
                        <p class="small text-muted">News blogs and Magazines</p>
                        <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary"
                                href="#">newshub.com</a></p>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <h5 class="text-white mb-3">Popular Categories</h5>
                        <ul class="list-unstyled text-muted">
                            <li><a href="#" style="color: #545454;">Politics</a></li>
                            <li><a href="#" style="color: #545454;">Sports</a></li>
                            <li><a href="#" style="color: #545454;">World</a></li>
                            <li><a href="#" style="color: #545454;">Technology</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <h5 class="text-white mb-3">Popular Topics</h5>
                        <ul class="list-unstyled text-muted">
                            <li><a href="#" style="color: #545454;">IPL</a></li>
                            <li><a href="#" style="color: #545454;">COVID-19</a></li>
                            <li><a href="#" style="color: #545454;">ICC T20 WC</a></li>
                            <li><a href="#" style="color: #545454;">India</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <h5 class="text-white mb-3">News Hub</h5>
                        <ul class="list-unstyled text-muted">
                            <li><a href="#" style="color: #545454;">Home</a></li>
                            <li><a href="#" style="color: #545454;">About</a></li>
                            <li><a href="#" style="color: #545454;">Get started</a></li>
                            <li><a href="#" style="color: #545454;">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <h5 class="text-white mb-3">Connect</h5>
                        <ul class="list-unstyled text-muted">
                            <li><a href="#" style="color: #545454;">Facebook</a></li>
                            <li><a href="#" style="color: #545454;">Twitter</a></li>
                            <li><a href="#" style="color: #545454;">Instagram</a></li>
                            <li><a href="#" style="color: #545454;">reddit</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    </div>

</body>
<script src="esehi.js"></script>

</html>