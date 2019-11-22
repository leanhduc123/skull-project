const component = {}

component.default = `
<header>
<div class="main-header">
    <div class="left-header">
        <a href="../index.html"><img src="./image/logo.png" alt="logo" width="40px" height="33px"
                class="slogan-img"></a>
        <a href="../index.html" class="slogan-img"><img src="./image/slogan.png" alt="" width="150px"
                height="37px" id="slogan"></a>

        <ul class="header-list" id="left-header-list">

            <li class="navbar-list" id="navbar-list-1">

                <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                <div class="navbar-container">
                    <ul id="navbar-ul">
                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                    background-size: 315px 100px">
                                        <p class="navbar-sub">HEADPHONES</p>
                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                        background-size: 315px 100px">

                                        <p class="navbar-sub">EARPUDS</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                            background-size: 315px 100px">

                                        <p class="navbar-sub">ACCESSORIES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                        background-size: 315px 100px">

                                        <p class="navbar-sub">SPECIALS</p>

                                    </div>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="navbar-title">
                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                    <a href="">
                                        <p class="navbar-sub-detail">Wired Headphones</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                    </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Earpuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Wired Earbuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Indy True Wireless</p>
                            </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Hats</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Speakers</p>
                            </a>
                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">12 Moods</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Custom Product</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">New Arrival</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Sale</p>
                            </a>
                        </div>

                    </div>

                    <div class="show-all">
                        <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                        <div></div>

                    </div>
                </div>

            </li>
            <li class="navbar-list" id="navbar-list-2">
                <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
            </li>
        </ul>


    </div>

    <div class="right-header">

        <ul class="header-list">
            <li class="navbar-list" id="navbar-list-3">
                <a href="#" class="right-navbar-list-anchor">Location</a>

                <div class="navbar-container">
                    <ul class="location">

                        <li class="local-area">NORTH AMERICA

                            <p class="location-store">Canada</p>
                            <p class="location-store">Mexico</p>
                            <p class="location-store">United State</p>
                        </li>

                        <li class="local-area">
                            EUROPE / MIDDLE EARTH
                            <p class="location-store">Austria</p>
                            <p class="location-store">France</p>
                            <p class="location-store">Germany</p>
                            <p class="location-store">Switzerland</p>
                            <p class="location-store">United Kingdom</p>
                            <p class="location-store">Europe (EN)</p>
                            <p class="location-store">Other Middle Earth Countries</p>
                        </li>

                        <li class="local-area">AFRICA
                            <p class="location-store">South Africa</p><br>
                            <div class="location" id="local-area-asia">ASIA
                                <p class="location-store">India</p>
                                <p class="location-store">Japan</p>
                                <p class="location-store">South Korea</p>
                                <p class="location-store">Taiwan</p>
                            </div>


                        </li>
                        <li class="local-area" id="local-area-pacific">PACIFIC
                            <p class="location-store">Australia</p>
                            <p class="location-store">New Zealand</p>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="navbar-list" id="navbar-list-4">
                <a href="#" class="right-navbar-list-anchor">Support</a>

                <div class="navbar-container">
                    <ul class="service-support">
                        <li class="service-support-service">HELP &nbsp; CENTER</li>
                        <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                        <li class="service-support-service">WARRANTY</li>
                        <li class="service-support-service">ORDER &nbsp; STATUS</li>
                        <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                    </ul>

                </div>
            </li>
            <li class="navbar-list"><a href="#"><i class="material-icons" id="sign-in">perm_identity</i></a></li>

            <li class="navbar-list" id="navbar-list-6">
                <a href="#"><i class="material-icons" id="search-button">search</i></a>
                <div id="search-navbar-container">
                    <div class="search-navbar">
                        <form action="" class="search-input">
                            <input type="search" class="search-btn" placeholder="Search">
                            <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                        </form>
                    </div>

                </div>
            </li>
            <li class="navbar-list"><i class="material-icons">work_outline</i></li>


        </ul>

    </div>

</div>


</header>

<main class="main">

<div class="freeship-navbar">
    <p>Free shipping on orders over $100. Just $3.99 on everything else!</p>
</div>

<div class="background-1">

    <div class="background-1-left">
        <div class="background-sub">
            <h5>EXPECT GOOSEBUMPS.</h5>

            <p class="paragraph">Three technologies, one groundbreaking experience.
                Introducing Crusher ANC, the most immersive
                headphones ever made .
            </p>
            <button class="shop-btn">SHOP NOW</button>
        </div>


    </div>

    <div class="background-1-right">
        <a href="#" class="background-right-child-1"></a>
        <a class="background-right-child-2"></a>
    </div>


</div>

<div class="background-2">
    <a href="#" class="background-cover-img" id="background-cover-img-1"></a>
    <a href="#" class="background-cover-img" id="background-cover-img-2"></a>
    <a href="#" class="background-cover-img" id="background-cover-img-3"></a>
</div>

<div class="background-3">
    <div class="background-sub" id="background-sub-2">
        <h5 class="new-h5">HEAR BEYOND THE SURFACE.</h5>

        <p class="paragraph">Meet Crusher ANC, a groundbreaking,
            immersive headphone that can be tuned to your unique hearing
        </p>
        
        <button class="shop-btn">SHOP NOW</button>
    </div>
</div>

<div class="background-4">
    <div class="background-sub" id="background-sub-2">
        <h5 class="new-h5">HEAR BEYOND THE SURFACE.</h5>

        <p class="paragraph">Meet Crusher ANC, a groundbreaking,
            immersive headphone that can be tuned to your unique hearing
        </p>

        <button class="shop-btn">SHOP NOW</button>
    </div>


</div>


</main>

<footer class="footer-main">

<div class="footer-top-container">
    <div class="footer-top">
        <h4>HEAD IT FIRST</h4>
        <p>Sign up and save on your first order.
            Be the first to get access to limited-edition products,
            exclusive music performances, and athlete stories.</p>
        <div class="email-container">
            <input type="email" name="email" placeholder="Email" class="email-btn">

            <button class="send">Send</button>

        </div>

    </div>

</div>

<div class="footer-bottom-container">

    <div class="footer-bottom-column" id="footer-bottom-column-1">

        <div class="footer-bottom-tank">

            <p>F0LLOW US</p>

            <div class="social-icon-container">
                <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                <a href="" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
            </div>

        </div>

    </div>
    <div class="footer-bottom-column" id="footer-bottom-column-2">
        <div class="paragraph-tank">
            <div class="paragraph-column">
                <p class="paragraph-title">Help Center</p>
                <p class="paragraph-title">Contact Us</p>
                <p class="paragraph-title">Account</p>
                <p class="paragraph-title">Product Setup</p>
                <p class="paragraph-title">Warranty</p>
                <p class="paragraph-title">Order Status</p>
            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Custom Product</p>
                <p class="paragraph-title"> Bulk Orders</p>
                <p class="paragraph-title">Press Releases</p>

            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Our Story</p>
                <p class="paragraph-title">Born in PC</p>
                <p class="paragraph-title">Protect Our Winters</p>
                <p class="paragraph-title">Careers</p>
            </div>
        </div>
    </div>

    <div class="footer-bottom-column" id="footer-bottom-column-3">
        <div class="podcast-container">
            <p>SUBSRCIBE TO OUR PODCAST</p>
            <div class="podcast-tank">
                <a href="#" class="paragraph-title">iTunes</a>
                <a href="#" class="paragraph-title">Spotify</a>
                <a href="#" class="paragraph-title">YouTube</a>
            </div>
        </div>


    </div>


</footer>

`

component.logIn = `
<header>
<div class="main-header">
    <div class="left-header">

        <a href="../index.html"><img src="./image/logo.png" alt="logo" width="40px" height="33px"
                class="slogan-img"></a>
        <a href="../index.html" class="slogan-img"><img src="./image/slogan.png" alt="" width="150px"
                height="37px" id="slogan"></a>

        <ul class="header-list" id="left-header-list">

            <li class="navbar-list" id="navbar-list-1">

                <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                <div class="navbar-container">
                    <ul id="navbar-ul">
                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                            background-size: 315px 100px">

                                        <p class="navbar-sub">HEADPHONES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">EARPUDS</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                                    background-size: 315px 100px">

                                        <p class="navbar-sub">ACCESSORIES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">SPECIALS</p>

                                    </div>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="navbar-title">
                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                    <a href="">
                                        <p class="navbar-sub-detail">Wired Headphones</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                    </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Earpuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Wired Earbuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Indy True Wireless</p>
                            </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Hats</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Speakers</p>
                            </a>
                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">12 Moods</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Custom Product</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">New Arrival</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Sale</p>
                            </a>
                        </div>

                    </div>

                    <div class="show-all">
                        <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                        <div></div>

                    </div>
                </div>

            </li>
            <li class="navbar-list" id="navbar-list-2">
                <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
            </li>
        </ul>


    </div>

    <div class="right-header">

        <ul class="header-list">
            <li class="navbar-list" id="navbar-list-3">
                <a href="#" class="right-navbar-list-anchor">Location</a>

                <div class="navbar-container">
                    <ul class="location">

                        <li class="local-area">NORTH AMERICA

                            <p class="location-store">Canada</p>
                            <p class="location-store">Mexico</p>
                            <p class="location-store">United State</p>
                        </li>

                        <li class="local-area">
                            EUROPE / MIDDLE EARTH
                            <p class="location-store">Austria</p>
                            <p class="location-store">France</p>
                            <p class="location-store">Germany</p>
                            <p class="location-store">Switzerland</p>
                            <p class="location-store">United Kingdom</p>
                            <p class="location-store">Europe (EN)</p>
                            <p class="location-store">Other Middle Earth Countries</p>
                        </li>

                        <li class="local-area">AFRICA
                            <p class="location-store">South Africa</p><br>
                            <div class="location" id="local-area-asia">ASIA
                                <p class="location-store">India</p>
                                <p class="location-store">Japan</p>
                                <p class="location-store">South Korea</p>
                                <p class="location-store">Taiwan</p>
                            </div>


                        </li>
                        <li class="local-area" id="local-area-pacific">PACIFIC
                            <p class="location-store">Australia</p>
                            <p class="location-store">New Zealand</p>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="navbar-list" id="navbar-list-4">
                <a href="#" class="right-navbar-list-anchor">Support</a>

                <div class="navbar-container">
                    <ul class="service-support">
                        <li class="service-support-service">HELP &nbsp; CENTER</li>
                        <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                        <li class="service-support-service">WARRANTY</li>
                        <li class="service-support-service">ORDER &nbsp; STATUS</li>
                        <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                    </ul>

                </div>
            </li>
            <li class="navbar-list"><a href="#"><i class="material-icons" id="sign-in">perm_identity</i></a></li>

            <li class="navbar-list" id="navbar-list-6">
                <a href="#"><i class="material-icons" id="search-button">search</i></a>
                <div id="search-navbar-container">
                    <div class="search-navbar">
                        <form action="" class="search-input">
                            <input type="search" class="search-btn" placeholder="Search">
                            <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                        </form>
                    </div>

                </div>
            </li>
            <li class="navbar-list"><i class="material-icons">work_outline</i></li>


        </ul>

    </div>

</div>


</header>

<main>
<div class="log-in-form">

    <div class="log-in-container">

        <h3 class="page-heading">SIGN IN</h3>

        <div class="log-in-tank">

            <div class="log-in-side">

                <form class="log-in-side-container" id="log-in-side-container">

                    <p class="log-in-sub">Email Address : </p>

                    <input type="email" name="email" id="email-btn" placeholder="Email" class="log-in-btn">
                    <div id="email-error" class="message-error"></div>

                    <p class="log-in-sub">Password :</p>

                    <input type="password" name="password" id="password-btn" placeholder="Password"
                        class="log-in-btn">
                    <div id="password-error" class="message-error"></div>

                    <div class="submit-container">

                    <div id="login-error"></div>
                        <button type= "submit" class="submit-btn">SIGN IN</button>
                    </div>
                </form>

            </div>

            <div class="register-side">

                <h3>NEW CUSTOMER</h3>

                <div class="register-interest">
                    <p>Create an account with us and you'll be able to:</p>
                    <ul class="register-interest-container">
                        <li class="register-interset-detail">&nbsp;&nbsp; Check out faster</li>
                        <li class="register-interset-detail">&nbsp;&nbsp; Save multiple shipping addresses</li>
                        <li class="register-interset-detail">&nbsp;&nbsp; Access your order history</li>
                        <li class="register-interset-detail">&nbsp;&nbsp; Track new orders</li>
                    </ul>

                </div>

                <button class="register-btn" id="create-account">Create Account</button>

            </div>
        </div>

    </div>
</div>




</main>

<footer class="footer-main">

<div class="footer-top-container">
    <div class="footer-top">
        <h4>HEAD IT FIRST</h4>
        <p>Sign up and save on your first order.
            Be the first to get access to limited-edition products,
            exclusive music performances, and athlete stories.</p>
        <div class="email-container">
            <input type="email" name="email" placeholder="Email" class="email-btn">

            <button type="submit" class="send">Send</button>

        </div>

    </div>

</div>

<div class="footer-bottom-container">

    <div class="footer-bottom-column" id="footer-bottom-column-1">

        <div class="footer-bottom-tank">

            <p>F0LLOW US</p>

            <div class="social-icon-container">
                <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                <a href="" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
            </div>

        </div>

    </div>
    <div class="footer-bottom-column" id="footer-bottom-column-2">
        <div class="paragraph-tank">
            <div class="paragraph-column">
                <p class="paragraph-title">Help Center</p>
                <p class="paragraph-title">Contact Us</p>
                <p class="paragraph-title">Account</p>
                <p class="paragraph-title">Product Setup</p>
                <p class="paragraph-title">Warranty</p>
                <p class="paragraph-title">Order Status</p>
            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Custom Product</p>
                <p class="paragraph-title"> Bulk Orders</p>
                <p class="paragraph-title">Press Releases</p>

            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Our Story</p>
                <p class="paragraph-title">Born in PC</p>
                <p class="paragraph-title">Protect Our Winters</p>
                <p class="paragraph-title">Careers</p>
            </div>
        </div>
    </div>

    <div class="footer-bottom-column" id="footer-bottom-column-3">
        <div class="podcast-container">
            <p>SUBSRCIBE TO OUR PODCAST</p>
            <div class="podcast-tank">
                <a href="#" class="paragraph-title">iTunes</a>
                <a href="#" class="paragraph-title">Spotify</a>
                <a href="#" class="paragraph-title">YouTube</a>
            </div>
        </div>


    </div>

</footer>

`
component.user = `
<header>
<div class="main-header">
    <div class="left-header">

        <a href="../index.html"><img src="./image/logo.png" alt="logo" width="40px" height="33px"
                class="slogan-img"></a>
        <a href="../index.html" class="slogan-img"><img src="./image/slogan.png" alt="" width="150px"
                height="37px" id="slogan"></a>

        <ul class="header-list" id="left-header-list">

            <li class="navbar-list" id="navbar-list-1">

                <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                <div class="navbar-container">
                    <ul id="navbar-ul">
                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                            background-size: 315px 100px">

                                        <p class="navbar-sub">HEADPHONES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">EARPUDS</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                                    background-size: 315px 100px">

                                        <p class="navbar-sub">ACCESSORIES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">SPECIALS</p>

                                    </div>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="navbar-title">
                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                    <a href="">
                                        <p class="navbar-sub-detail">Wired Headphones</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                    </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Earpuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Wired Earbuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Indy True Wireless</p>
                            </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Hats</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Speakers</p>
                            </a>
                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">12 Moods</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Custom Product</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">New Arrival</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Sale</p>
                            </a>
                        </div>

                    </div>

                    <div class="show-all">
                        <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                        <div></div>

                    </div>
                </div>

            </li>
            <li class="navbar-list" id="navbar-list-2">
                <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
            </li>
        </ul>


    </div>

    <div class="right-header">

        <ul class="header-list">
            <li class="navbar-list" id="navbar-list-3">
                <a href="#" class="right-navbar-list-anchor">Location</a>

                <div class="navbar-container">
                    <ul class="location">

                        <li class="local-area">NORTH AMERICA

                            <p class="location-store">Canada</p>
                            <p class="location-store">Mexico</p>
                            <p class="location-store">United State</p>
                        </li>

                        <li class="local-area">
                            EUROPE / MIDDLE EARTH
                            <p class="location-store">Austria</p>
                            <p class="location-store">France</p>
                            <p class="location-store">Germany</p>
                            <p class="location-store">Switzerland</p>
                            <p class="location-store">United Kingdom</p>
                            <p class="location-store">Europe (EN)</p>
                            <p class="location-store">Other Middle Earth Countries</p>
                        </li>

                        <li class="local-area">AFRICA
                            <p class="location-store">South Africa</p><br>
                            <div class="location" id="local-area-asia">ASIA
                                <p class="location-store">India</p>
                                <p class="location-store">Japan</p>
                                <p class="location-store">South Korea</p>
                                <p class="location-store">Taiwan</p>
                            </div>


                        </li>
                        <li class="local-area" id="local-area-pacific">PACIFIC
                            <p class="location-store">Australia</p>
                            <p class="location-store">New Zealand</p>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="navbar-list" id="navbar-list-4">
                <a href="#" class="right-navbar-list-anchor">Support</a>

                <div class="navbar-container">
                    <ul class="service-support">
                        <li class="service-support-service">HELP &nbsp; CENTER</li>
                        <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                        <li class="service-support-service">WARRANTY</li>
                        <li class="service-support-service">ORDER &nbsp; STATUS</li>
                        <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                    </ul>

                </div>
            </li>
            <li class="navbar-list"><a href="#"><i class="material-icons" id="sign-in">perm_identity</i></a></li>

            <li class="navbar-list" id="navbar-list-6">
                <a href="#"><i class="material-icons" id="search-button">search</i></a>
                <div id="search-navbar-container">
                    <div class="search-navbar">
                        <form action="" class="search-input">
                            <input type="search" class="search-btn" placeholder="Search">
                            <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                        </form>
                    </div>

                </div>
            </li>
            <li class="navbar-list"><i class="material-icons">work_outline</i></li>


        </ul>

    </div>

</div>


</header>

<main>
<div id="main-user">

    <div class="grey-navbar">

        <section class="grey-navbar-container">

            <div class="navbar-index">
                <button class="navbar-button" onclick="tab(event, 'me')">About Me</button>
            </div>

            <div class="navbar-index">
                <button class="navbar-button" onclick="tab(event, 'order')">Order</button>
            </div>

            <div class="navbar-index">
                <button class="navbar-button" id="sign-out">Sign Out</button>
            </div>

        </section>

    </div>

    <div class="main-detail">

        <div class="input-infor" id='me'>
            Nice to see you again:
            <span id="name-user">ABC</span>
        </div>

        <div class="input-infor" id='order'>
            abc
        </div>

    </div>

</div>

</main>

<footer class="footer-main">

<div class="footer-top-container">
    <div class="footer-top">
        <h4>HEAD IT FIRST</h4>
        <p>Sign up and save on your first order.
            Be the first to get access to limited-edition products,
            exclusive music performances, and athlete stories.</p>
        <div class="email-container">
            <input type="email" name="email" placeholder="Email" class="email-btn">

            <button type="submit" class="send">Send</button>

        </div>

    </div>

</div>

<div class="footer-bottom-container">

    <div class="footer-bottom-column" id="footer-bottom-column-1">

        <div class="footer-bottom-tank">

            <p>F0LLOW US</p>

            <div class="social-icon-container">
                <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                <a href="" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
            </div>

        </div>

    </div>
    <div class="footer-bottom-column" id="footer-bottom-column-2">
        <div class="paragraph-tank">
            <div class="paragraph-column">
                <p class="paragraph-title">Help Center</p>
                <p class="paragraph-title">Contact Us</p>
                <p class="paragraph-title">Account</p>
                <p class="paragraph-title">Product Setup</p>
                <p class="paragraph-title">Warranty</p>
                <p class="paragraph-title">Order Status</p>
            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Custom Product</p>
                <p class="paragraph-title"> Bulk Orders</p>
                <p class="paragraph-title">Press Releases</p>

            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Our Story</p>
                <p class="paragraph-title">Born in PC</p>
                <p class="paragraph-title">Protect Our Winters</p>
                <p class="paragraph-title">Careers</p>
            </div>
        </div>
    </div>

    <div class="footer-bottom-column" id="footer-bottom-column-3">
        <div class="podcast-container">
            <p>SUBSRCIBE TO OUR PODCAST</p>
            <div class="podcast-tank">
                <a href="#" class="paragraph-title">iTunes</a>
                <a href="#" class="paragraph-title">Spotify</a>
                <a href="#" class="paragraph-title">YouTube</a>
            </div>
        </div>


    </div>


</footer>
`


component.register = `

<header>
<div class="main-header">
    <div class="left-header">

        <a href="../index.html"><img src="./image/logo.png" alt="logo" width="40px" height="33px"
                class="slogan-img"></a>
        <a href="../index.html" class="slogan-img"><img src="./image/slogan.png" alt="" width="150px"
                height="37px" id="slogan"></a>

        <ul class="header-list" id="left-header-list">

            <li class="navbar-list" id="navbar-list-1">

                <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                <div class="navbar-container">
                    <ul id="navbar-ul">
                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                            background-size: 315px 100px">

                                        <p class="navbar-sub">HEADPHONES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">EARPUDS</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                                    background-size: 315px 100px">

                                        <p class="navbar-sub">ACCESSORIES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">SPECIALS</p>

                                    </div>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="navbar-title">
                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                    <a href="">
                                        <p class="navbar-sub-detail">Wired Headphones</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                    </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Earpuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Wired Earbuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Indy True Wireless</p>
                            </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Hats</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Speakers</p>
                            </a>
                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">12 Moods</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Custom Product</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">New Arrival</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Sale</p>
                            </a>
                        </div>

                    </div>

                    <div class="show-all">
                        <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                        <div></div>

                    </div>
                </div>

            </li>
            <li class="navbar-list" id="navbar-list-2">
                <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
            </li>
        </ul>


    </div>

    <div class="right-header">

        <ul class="header-list">
            <li class="navbar-list" id="navbar-list-3">
                <a href="#" class="right-navbar-list-anchor">Location</a>

                <div class="navbar-container">
                    <ul class="location">

                        <li class="local-area">NORTH AMERICA

                            <p class="location-store">Canada</p>
                            <p class="location-store">Mexico</p>
                            <p class="location-store">United State</p>
                        </li>

                        <li class="local-area">
                            EUROPE / MIDDLE EARTH
                            <p class="location-store">Austria</p>
                            <p class="location-store">France</p>
                            <p class="location-store">Germany</p>
                            <p class="location-store">Switzerland</p>
                            <p class="location-store">United Kingdom</p>
                            <p class="location-store">Europe (EN)</p>
                            <p class="location-store">Other Middle Earth Countries</p>
                        </li>

                        <li class="local-area">AFRICA
                            <p class="location-store">South Africa</p><br>
                            <div class="location" id="local-area-asia">ASIA
                                <p class="location-store">India</p>
                                <p class="location-store">Japan</p>
                                <p class="location-store">South Korea</p>
                                <p class="location-store">Taiwan</p>
                            </div>


                        </li>
                        <li class="local-area" id="local-area-pacific">PACIFIC
                            <p class="location-store">Australia</p>
                            <p class="location-store">New Zealand</p>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="navbar-list" id="navbar-list-4">
                <a href="#" class="right-navbar-list-anchor">Support</a>

                <div class="navbar-container">
                    <ul class="service-support">
                        <li class="service-support-service">HELP &nbsp; CENTER</li>
                        <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                        <li class="service-support-service">WARRANTY</li>
                        <li class="service-support-service">ORDER &nbsp; STATUS</li>
                        <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                    </ul>

                </div>
            </li>
            <li class="navbar-list">
                <a href="#">
                    <i class="material-icons" id="sign-in">perm_identity</i>
                </a>
            </li>

            <li class="navbar-list" id="navbar-list-6">
                <a href="#"><i class="material-icons" id="search-button">search</i></a>
                <div id="search-navbar-container">
                    <div class="search-navbar">
                        <form action="" class="search-input">
                            <input type="search" class="search-btn" placeholder="Search">
                            <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                        </form>
                    </div>

                </div>
            </li>
            <li class="navbar-list"><i class="material-icons">work_outline</i></li>


        </ul>

    </div>

</div>


</header>

<main>
<form class="register-container" id="register-container">
    <div class="register-title">
        <p>NEW ACCOUNT</p>
    </div>

    <div class="register-tank" id="register-tank">

        <div class="register-wrapper" id="register-wrapper"> 

            <div class="input-wrapper">
                <div class="input-form">
                    <h3>First Name: </h3>
                    <input type="text" name="firstname" id="firstName-title" placeholder="First Name" required>
                    <div id="firstname-error" class="message-error"></div>
                </div>
            </div>

            <div class="input-wrapper">
                <div class="input-form">
                    <h3>Last Name: </h3>
                    <input type="text" name="lastname" id="lastName-title" placeholder="Last Name" required>
                    <div id="lastname-error" class="message-error"></div>
                </div>
            </div>

            <div class="input-wrapper">
                <div class="input-form">
                    <h3>Email address: </h3>
                    <input type="email" name="email" id="email-btn" required placeholder="Email">
                    <div id="email-error" class="message-error"></div>
                </div>
            </div>

            <div class="input-wrapper">
                <div class="input-form">
                    <h3>Password: </h3>
                    <input type="password" name="password" id="password-btn" required placeholder="Password">
                    <div id="password-error" class="message-error"></div>
                </div>
            </div>

            <div class="input-wrapper">
                <div class="input-form">
                    <h3>Confirm Password: </h3>
                    <input type="password" name="confirmPassword" id="confirmPassword-btn" required
                        placeholder="Confirm Password">
                    <div id="confirmPassword-error" class="message-error"></div>
                </div>
            </div>
        </div>

    </div>

    <div class="submit-form">

    <div id="register-success" class="message-success"></div>
    <div id="register-error" class="message-error"></div>
        <button type="submit" class="submit-but">CREATE ACCOUNT</button>
    </div>
</form>

</main>

<footer class="footer-main">

<div class="footer-top-container">
    <div class="footer-top">
        <h4>HEAD IT FIRST</h4>
        <p>Sign up and save on your first order.
            Be the first to get access to limited-edition products,
            exclusive music performances, and athlete stories.</p>
        <div class="email-container">
            <input type="email" name="email" placeholder="Email" class="email-btn">

            <button type="submit" class="send">Send</button>

        </div>

    </div>

</div>

<div class="footer-bottom-container">

    <div class="footer-bottom-column" id="footer-bottom-column-1">

        <div class="footer-bottom-tank">

            <p>F0LLOW US</p>

            <div class="social-icon-container">
                <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                <a href="" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
            </div>

        </div>

    </div>
    <div class="footer-bottom-column" id="footer-bottom-column-2">
        <div class="paragraph-tank">
            <div class="paragraph-column">
                <p class="paragraph-title">Help Center</p>
                <p class="paragraph-title">Contact Us</p>
                <p class="paragraph-title">Account</p>
                <p class="paragraph-title">Product Setup</p>
                <p class="paragraph-title">Warranty</p>
                <p class="paragraph-title">Order Status</p>
            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Custom Product</p>
                <p class="paragraph-title"> Bulk Orders</p>
                <p class="paragraph-title">Press Releases</p>

            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Our Story</p>
                <p class="paragraph-title">Born in PC</p>
                <p class="paragraph-title">Protect Our Winters</p>
                <p class="paragraph-title">Careers</p>
            </div>
        </div>
    </div>

    <div class="footer-bottom-column" id="footer-bottom-column-3">
        <div class="podcast-container">
            <p>SUBSRCIBE TO OUR PODCAST</p>
            <div class="podcast-tank">
                <a href="#" class="paragraph-title">iTunes</a>
                <a href="#" class="paragraph-title">Spotify</a>
                <a href="#" class="paragraph-title">YouTube</a>
            </div>
        </div>


    </div>


</footer>

`

component.shopPage1 = `
<header>
<div class="main-header">
    <div class="left-header">

        <a href="../index.html"><img src="./image/logo.png" alt="logo"
                width="40px" height="33px" class="slogan-img"></a>
        <a href="../index.html" class="slogan-img"><img
                src="./image/slogan.png" alt="" width="150px" height="37px" id="slogan"></a>

        <ul class="header-list" id="left-header-list">

            <li class="navbar-list" id="navbar-list-1">

                <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                <div class="navbar-container">
                    <ul id="navbar-ul">
                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                                    background-size: 315px 100px">

                                        <p class="navbar-sub">HEADPHONES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                                        background-size: 315px 100px">

                                        <p class="navbar-sub">EARPUDS</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                                            background-size: 315px 100px">

                                        <p class="navbar-sub">ACCESSORIES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                                        background-size: 315px 100px">

                                        <p class="navbar-sub">SPECIALS</p>

                                    </div>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="navbar-title">
                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                    <a href="">
                                        <p class="navbar-sub-detail">Wired Headphones</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                    </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Earpuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Wired Earbuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Indy True Wireless</p>
                            </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Hats</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Speakers</p>
                            </a>
                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">12 Moods</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Custom Product</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">New Arrival</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Sale</p>
                            </a>
                        </div>

                    </div>

                    <div class="show-all">
                        <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                        <div></div>

                    </div>
                </div>

            </li>
            <li class="navbar-list" id="navbar-list-2">
                <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
            </li>
        </ul>


    </div>

    <div class="right-header">

        <ul class="header-list">
            <li class="navbar-list" id="navbar-list-3">
                <a href="#" class="right-navbar-list-anchor">Location</a>

                <div class="navbar-container">
                    <ul class="location">

                        <li class="local-area">NORTH AMERICA

                            <p class="location-store">Canada</p>
                            <p class="location-store">Mexico</p>
                            <p class="location-store">United State</p>
                        </li>

                        <li class="local-area">
                            EUROPE / MIDDLE EARTH
                            <p class="location-store">Austria</p>
                            <p class="location-store">France</p>
                            <p class="location-store">Germany</p>
                            <p class="location-store">Switzerland</p>
                            <p class="location-store">United Kingdom</p>
                            <p class="location-store">Europe (EN)</p>
                            <p class="location-store">Other Middle Earth Countries</p>
                        </li>

                        <li class="local-area">AFRICA
                            <p class="location-store">South Africa</p><br>
                            <div class="location" id="local-area-asia">ASIA
                                <p class="location-store">India</p>
                                <p class="location-store">Japan</p>
                                <p class="location-store">South Korea</p>
                                <p class="location-store">Taiwan</p>
                            </div>


                        </li>
                        <li class="local-area" id="local-area-pacific">PACIFIC
                            <p class="location-store">Australia</p>
                            <p class="location-store">New Zealand</p>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="navbar-list" id="navbar-list-4">
                <a href="#" class="right-navbar-list-anchor">Support</a>

                <div class="navbar-container">
                    <ul class="service-support">
                        <li class="service-support-service">HELP &nbsp; CENTER</li>
                        <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                        <li class="service-support-service">WARRANTY</li>
                        <li class="service-support-service">ORDER &nbsp; STATUS</li>
                        <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                    </ul>

                </div>
            </li>
            <li class="navbar-list"><a href="#"><i class="material-icons" id="sign-in">perm_identity</i></a></li>

            <li class="navbar-list" id="navbar-list-6">
                <a href="#"><i class="material-icons" id="search-button">search</i></a>
                <div id="search-navbar-container">
                    <div class="search-navbar">
                        <form action="" class="search-input">
                            <input type="search" class="search-btn" placeholder="Search">
                            <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                        </form>
                    </div>

                </div>
            </li>
            <li class="navbar-list"><i class="material-icons">work_outline</i></li>


        </ul>

    </div>

</div>


</header>

<main>
<div class="freeship-navbar">
    <p>Free shipping on orders over $100. Just $3.99 on everything else!</p>
</div>

<div class="main-product">

    <div class="shop-container">
        <h1 class="shop-title">SHOP</h1>
    </div>

    <div class="category-container">

        <div class="category-list">
            <a href="#" class="category-kind">
                <p class="category-name">EARBUDS</p>
            </a>

            <a href="#" class="category-kind">
                <p class="category-name">HEADPHONES</p>
            </a>

            <a href="#" class="category-kind">
                <p class="category-name">SPEAKERS</p>
            </a>

            <a href="#" class="category-kind">
                <p class="category-name">SALE</p>
            </a>
        </div>

        <div class="sort">
            <a href="#" class="sort-container">
                <select name="sort" id="sort-role">
                    <option disabled selected class="sort-title">SORT: FEATURED ITEMS</option>
                    <option value="" class="sort-title">Featured Items</option>
                    <option value="" class="sort-title">Newest Items</option>
                    <option value="" class="sort-title">Best Selling</option>
                    <option value="" class="sort-title">A to Z</option>
                    <option value="" class="sort-title">Z to A</option>
                    <option value="" class="sort-title">By Review</option>
                    <option value="" class="sort-title">PRICE LOW TO HIGH</option>
                    <option value="" class="sort-title">PRICE HIGH TO LOW</option>
                </select>

            </a>
        </div>

    </div>

    <div class="product-container" id="product-container">

        <div class="product-detail-row" id="1">
            <div class="product-cell">
                <a href="#" class="product-tank">
                    <figure class="product-figure">
                        <img class="product-picture"
                            src="https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/206/5666/b3440cc6634cb481c49c0fa59097e12380e83b5ed01709bcbeaa4e7f639c6b79__24267.1569876047.jpg?c=2"
                            alt="">
                    </figure>

                    <div class="name-product-container">
                        <div class="name-product">
                            Crusher ANC Personalized Noise Canceling Wireless Headphones
                        </div>

                        <div class="price-container">
                            <div class="price-tag">
                                $319.99
                            </div>

                        </div>

                    </div>
                </a>
            </div>

            <div class="product-cell">
                <a href="#" class="product-tank">
                    <figure class="product-figure">
                        <img class="product-picture"
                            src="
                            https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/190/5996/a996d77e6201fc2fa578df224c5716f20f8328f06371b0b5e61010f083b76148__93037.1573496394.jpg?c=2                                    alt="">
                    </figure>

                    <div class=" name-product-container">
                        <div class="name-product">
                            Indy True Wireless Earbuds </div>

                        <div class="price-container">
                            <div class="price-tag">
                                $84.99
                            </div>

                        </div>

            </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/217/5945/ce627d3d741ca28f9bc0f4b51d35ef618792257ec2d2cffecc36555b4c4dc325__98912.1572887378.jpg?c=2                                "
                        alt="">
                </figure>

                <div class="name-product-container">
                    <div class="name-product">
                        Indy™ True Wireless Earbuds With CamelBak® Insulated Mug </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $99.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

    </div>

    <div class="product-detail-row" id="2">
        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/216/5890/ec5bc26fd475db33a853f49401a8d5a36cca76829974822e2e1ea32c41c78782__18979.1571162464.jpg?c=2                                "
                        alt="">
                </figure>

                <div class="name-product-container">
                    <div class="name-product">
                        Method® ANC </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $79.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/174/5981/498c47257dba2130f4e386153bad51f0a3f97c30f9752cc5cff5a73849bb357a__19732.1573148023.jpg?c=2                                "
                        alt="">
                </figure>

                <div class="name-product-container">
                    <div class="name-product">
                        Push True Wireless Earbuds </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $99.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/200/6014/dab0df372579ea4e7e461577240e5d1e122c9a7843927e7de65da150ae3031b0__46986.1573497649.jpg?c=2                                "
                        alt="">
                </figure>

                <div class="name-product-container">
                    <div class="name-product">
                        Sesh™ True Wireless Earbuds </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $59.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

    </div>

    <div class="product-detail-row" id="3">
        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/211/5740/15ea1b54f638ca172644ed52cfa724f99db0021dc6064922287950a0bd5f3b82__50116.1570045655.jpg?c=2                               "
                        alt="">
                </figure>

                <div class="name-product-container">
                    <div class="name-product">
                        Vert Clip-Anywhere Wireless Earbuds </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $79.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/149/5925/fe5679daad7a540a0ecffd38abf2bfa7e097758c15cb12544f83596e7925e919__79053.1572157341.jpg?c=2                                "
                        alt="">
                </figure>

                <div class="name-product-container">
                    <div class="name-product">
                        Venue Noise Canceling Wireless Headphone </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $179.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/123/5913/b002d519c87675dba5b567b261a418f825514c2a4b8f83b42a9a4955b0027e53__33113.1572156222.jpg?c=2                                "
                        alt="">
                </figure>

                <div class="name-product-container">
                    <div class="name-product">
                        Crusher Wireless Immersive Bass Headphone </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $149.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

    </div>

    <div class="product-detail-row" id="4">
        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                                https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/188/5203/663e97b110d995a2b4241f8fc0f61ca89d3bef74c82511d7506ac9ec1898b2b0__58754.1565288602.jpg?c=2"
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Hesh 3 Wireless Over-Ear Headphone
                    </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $99.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                            https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/160/4435/c1bd912f7f675a16d03470d586f28e31ee00e7fb28edb31ccef1667fa3557076__56530.1556605230.jpg?c=2"
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Icon Wireless On-Ear Headphone </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $49.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/154/2375/9433c9aef1d116253044d86ce07fff07ff4088927547f8cafec11ffa7d174793__85829.1537309587.jpg?c=2"
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Riff Wireless On-Ear Headphone
                    </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $49.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

    </div>

    <div class="product-detail-row" id="5">
        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                    https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/201/5364/f7231443697e43b394ecd450d944e1976609e06e5d35976718aa98c8604f36aa__64656.1567618779.jpg?c=2"
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Beanie </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $19.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/218/5958/dd8cc78719f659344e8fc8a40207d1ae513c74426038cfc897ee97d252554f4f__85545.1572888515.jpg?c=2"
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        CamelBak® Insulated Mug </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $29.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/203/5438/70bef8d752eb3c08660603ad5fff5e404e410d043ef4341d253fdb0f482de9de__71836.1568239431.jpg?c=2"
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Cassette Wireless On-Ear Headphones </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $29.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

    </div>

    <div class="product-detail-row" id="6">
        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                    https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/155/6024/37b5278ee8b7a817d530bbf8b39f9c3f9ef055d24da72c579e69d29894fdc3bf__78293.1573500065.jpg?c=2"
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Riff On-Ear Headphone </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $19.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/185/4901/dc9bcf28aed30be20ccee48cbbd9670ce3f403da4be74820f8d18ff1a0a8481d__59200.1560283354.jpg?c=2 "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Jib+ Active Wireless Earbuds </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $29.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/215/5810/0d77aa760833303dfb3df4b3a6ef7fd2d9e86082e6e2d171645c639c1de2e6f4__44312.1570564734.jpg?c=2"
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Ink'd+™ Active </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $59.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

    </div>

    <div class="product-detail-row" id="7">
        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                    https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/184/4836/ed0e41b4527cff05d5799fcf5ab40aa8fcfd2acf7f7fb12dff89606ea90e0007__03231.1559589342.jpg?c=2                                "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Ink’d+ Wireless Earbuds </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $39.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/214/5774/806c9203483f9ef0d4b44a1f0834db48f4a518c5732c8b5f168d05afae6ad59a__98008.1570558204.jpg?c=2                                    "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Method® Active Wireless Sport Earbuds </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $59.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/191/4898/d3f6be6f104d7e3376c5d4830cffc703d1d3d57e26c417669f24c00c0dadd3f9__72096.1560281933.jpg?c=2                                    "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Jib+ Wireless Earbuds </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $19.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

    </div>

    <div class="product-detail-row" id="8">
        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/134/5232/07d0c7b8f6a76b5f341a0e5ce945c4168678dede3e4e35cd62974e9d0045414b__77541.1565372154.jpg?c=2                                    "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Method BT Sport Earbud </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $59.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/186/5130/434a9f776994ceefc9ed922b3e284df6ed24559f99b0c6f96afd5f8bc3cbc2c9__14824.1564421044.jpg?c=2                                "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Ink’d+ Earbuds with Microphone </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $17.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/153/4100/84f8bb6bc15e7c994954f97423e9a13152d8e717be9de6f33180ec830e76a3d1__41055.1553408961.jpg?c=2                                "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Set In-Ear Sport Earbuds </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $29.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

    </div>

    <div class="product-detail-row" id="9">
        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/156/5071/0cff3458d9654639d62ba182db2dadef93adabda083820513736e1f3815920d4__82806.1563484382.jpg?c=2                                    "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Stash Portable Power Bank </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $29.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                        https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/173/4927/1910860061d65fbfa3fc9a47f53ee79b58b3e86c1b98a75fd76dc8941937c032__93368.1560288322.jpg?c=2                                "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Jib Earbuds with Microphone </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $9.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                    https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/136/1051/03060dc19544a6da50b73ca7e8c961e75c5bf37adfd474a66dd9d805c9d3c780__46541.1518493008.jpg?c=2                                "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Smokin’ Buds 2 </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $29.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

    </div>

    <div class="product-detail-row" id="9">
        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                                https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/128/5105/3900fb6c225f20ff75e50f80cd7eade61e41cd65a1c9c8fe6277e459369879bc__26390.1563552350.jpg?c=2                                                                "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Hesh 2 Over-Ear Wireless Headphone </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $79.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                                https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/192/4952/f8944dea827d0d4e8e0e9e5667421480f2a70e20fd18f4bebefdd5d053385142__71751.1560666737.jpg?c=2                                                                        "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Line Charging Cable </div>

                    <div class="price-container">
                        <div class="price-tag">
                            $9.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

        <div class="product-cell">
            <a href="#" class="product-tank">
                <figure class="product-figure">
                    <img class="product-picture"
                        src="
                                https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/193/4753/69f97410f274f3edf686f28e8e3a880520580337c69326a18f65ea55ffffcd04__83472.1558364754.jpg?c=2                                                                    "
                        alt="">
                </figure>

                <div class=" name-product-container">
                    <div class="name-product">
                        Line+ Braided Charging Cable</div>

                    <div class="price-container">
                        <div class="price-tag">
                            $19.99
                        </div>

                    </div>

                </div>
            </a>
        </div>

    </div>

    </div>



    <div class="next-page-container">
        <div class="next-page">
            <button class="next-btn" >NEXT</button>
        </div>
    </div>




</div>



</main>

<footer class="footer-main">

<div class="footer-top-container">
    <div class="footer-top">
        <h4>HEAD IT FIRST</h4>
        <p>Sign up and save on your first order.
            Be the first to get access to limited-edition products,
            exclusive music performances, and athlete stories.</p>
        <div class="email-container">
            <input type="email" name="email" placeholder="Email" class="email-btn">

            <button type="submit" class="send">Send</button>

        </div>

    </div>

</div>

<div class="footer-bottom-container">

    <div class="footer-bottom-column" id="footer-bottom-column-1">

        <div class="footer-bottom-tank">

            <p>F0LLOW US</p>

            <div class="social-icon-container">
                <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                <a href="" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
            </div>

        </div>

    </div>
    <div class="footer-bottom-column" id="footer-bottom-column-2">
        <div class="paragraph-tank">
            <div class="paragraph-column">
                <p class="paragraph-title">Help Center</p>
                <p class="paragraph-title">Contact Us</p>
                <p class="paragraph-title">Account</p>
                <p class="paragraph-title">Product Setup</p>
                <p class="paragraph-title">Warranty</p>
                <p class="paragraph-title">Order Status</p>
            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Custom Product</p>
                <p class="paragraph-title"> Bulk Orders</p>
                <p class="paragraph-title">Press Releases</p>

            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Our Story</p>
                <p class="paragraph-title">Born in PC</p>
                <p class="paragraph-title">Protect Our Winters</p>
                <p class="paragraph-title">Careers</p>
            </div>
        </div>
    </div>

    <div class="footer-bottom-column" id="footer-bottom-column-3">
        <div class="podcast-container">
            <p>SUBSRCIBE TO OUR PODCAST</p>
            <div class="podcast-tank">
                <a href="#" class="paragraph-title">iTunes</a>
                <a href="#" class="paragraph-title">Spotify</a>
                <a href="#" class="paragraph-title">YouTube</a>
            </div>
        </div>


    </div>


</footer>

`

component.detail=`
<header>
        <div class="main-header">
            <div class="left-header">
                <a href="../docs/index.html"></a>
                <a href="./index.html"><img src="./image/logo.png" alt="logo" width="40px" height="33px"
                        class="slogan-img"></a>
                <a href="./index.html" class="slogan-img"><img src="./image/slogan.png" alt="" width="150px"
                        height="37px" id="slogan"></a>

                <ul class="header-list" id="left-header-list">

                    <li class="navbar-list" id="navbar-list-1">

                        <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                        <div class="navbar-container">
                            <ul id="navbar-ul">
                                <li class="navbar-container-li">

                                    <div class="navbar-column">

                                        <a href="#" class="hover-to-zoom">

                                            <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                                    background-size: 315px 100px">

                                                <p class="navbar-sub">HEADPHONES</p>

                                            </div>

                                        </a>
                                    </div>
                                </li>

                                <li class="navbar-container-li">

                                    <div class="navbar-column">

                                        <a href="#" class="hover-to-zoom">

                                            <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                                        background-size: 315px 100px">

                                                <p class="navbar-sub">EARPUDS</p>

                                            </div>

                                        </a>
                                    </div>
                                </li>

                                <li class="navbar-container-li">

                                    <div class="navbar-column">

                                        <a href="#" class="hover-to-zoom">

                                            <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                                            background-size: 315px 100px">

                                                <p class="navbar-sub">ACCESSORIES</p>

                                            </div>

                                        </a>
                                    </div>
                                </li>

                                <li class="navbar-container-li">

                                    <div class="navbar-column">

                                        <a href="#" class="hover-to-zoom">

                                            <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                                        background-size: 315px 100px">

                                                <p class="navbar-sub">SPECIALS</p>

                                            </div>

                                        </a>
                                    </div>
                                </li>
                            </ul>

                            <div class="navbar-title">
                                <div class="navbar-sub-column">
                                    <a href="#">
                                        <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                            <a href="">
                                                <p class="navbar-sub-detail">Wired Headphones</p>
                                            </a>
                                            <a href="#">
                                                <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                            </a>

                                </div>

                                <div class="navbar-sub-column">
                                    <a href="#">
                                        <p class="navbar-sub-detail">Wireless Earpuds</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Wired Earbuds</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Indy True Wireless</p>
                                    </a>

                                </div>

                                <div class="navbar-sub-column">
                                    <a href="#">
                                        <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Hats</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Speakers</p>
                                    </a>
                                </div>

                                <div class="navbar-sub-column">
                                    <a href="#">
                                        <p class="navbar-sub-detail">12 Moods</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Custom Product</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">New Arrival</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Sale</p>
                                    </a>
                                </div>

                            </div>

                            <div class="show-all">
                                <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                                <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                                <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                                <div></div>

                            </div>
                        </div>

                    </li>
                    <li class="navbar-list" id="navbar-list-2">
                        <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
                    </li>
                </ul>


            </div>

            <div class="right-header">

                <ul class="header-list">
                    <li class="navbar-list" id="navbar-list-3">
                        <a href="#" class="right-navbar-list-anchor">Location</a>

                        <div class="navbar-container">
                            <ul class="location">

                                <li class="local-area">NORTH AMERICA

                                    <p class="location-store">Canada</p>
                                    <p class="location-store">Mexico</p>
                                    <p class="location-store">United State</p>
                                </li>

                                <li class="local-area">
                                    EUROPE / MIDDLE EARTH
                                    <p class="location-store">Austria</p>
                                    <p class="location-store">France</p>
                                    <p class="location-store">Germany</p>
                                    <p class="location-store">Switzerland</p>
                                    <p class="location-store">United Kingdom</p>
                                    <p class="location-store">Europe (EN)</p>
                                    <p class="location-store">Other Middle Earth Countries</p>
                                </li>

                                <li class="local-area">AFRICA
                                    <p class="location-store">South Africa</p><br>
                                    <div class="location" id="local-area-asia">ASIA
                                        <p class="location-store">India</p>
                                        <p class="location-store">Japan</p>
                                        <p class="location-store">South Korea</p>
                                        <p class="location-store">Taiwan</p>
                                    </div>


                                </li>
                                <li class="local-area" id="local-area-pacific">PACIFIC
                                    <p class="location-store">Australia</p>
                                    <p class="location-store">New Zealand</p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="navbar-list" id="navbar-list-4">
                        <a href="#" class="right-navbar-list-anchor">Support</a>

                        <div class="navbar-container">
                            <ul class="service-support">
                                <li class="service-support-service">HELP &nbsp; CENTER</li>
                                <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                                <li class="service-support-service">WARRANTY</li>
                                <li class="service-support-service">ORDER &nbsp; STATUS</li>
                                <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                            </ul>

                        </div>
                    </li>
                    <li class="navbar-list"><a href="#"><i class="material-icons" id="sign-in">perm_identity</i></a>
                    </li>

                    <li class="navbar-list" id="navbar-list-6">
                        <a href="#"><i class="material-icons" id="search-button">search</i></a>
                        <div id="search-navbar-container">
                            <div class="search-navbar">
                                <form action="" class="search-input">
                                    <input type="search" class="search-btn" placeholder="Search">
                                    <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                                </form>
                            </div>

                        </div>
                    </li>
                    <li class="navbar-list"><i class="material-icons">work_outline</i></li>


                </ul>

            </div>

        </div>


    </header>

    <main class="main">
        <div class="background-cover" id="background-cover">

            <div class="center-container">
                <ul class="product-infor-container">
                    <li id="name-tag-product" class="tag-product">
                        <h3>
                            Venue Active Noise
                            Canceling Wireless Headphone
                        </h3>
                    </li>
                    <li id="price-tag-product" class="tag-product">
                        <h3>
                            $179.99
                        </h3>
                    </li>
                    <li id="brief-tag-product" class="tag-product">
                        <div class="form-label">

                            <div class="little-img" title="White/Crimson"></div>
                            <div class="little-text-sub-container">
                                <div class="little-text-sub">White/Crimson</div>
                            </div>

                        </div>
                    </li>
                    <li id="cart-tag-product" class="tag-product"></li>
                    <li id="footer-tag-product" class="tag-product"></li>
                </ul>
            </div>
        </div>
    </main>

    <footer class="footer-main">

        <div class="footer-top-container">
            <div class="footer-top">
                <h4>HEAD IT FIRST</h4>
                <p>Sign up and save on your first order.
                    Be the first to get access to limited-edition products,
                    exclusive music performances, and athlete stories.</p>
                <div class="email-container">
                    <input type="email" name="email" placeholder="Email" class="email-btn">

                    <button class="send">Send</button>

                </div>

            </div>

        </div>

        <div class="footer-bottom-container">

            <div class="footer-bottom-column" id="footer-bottom-column-1">

                <div class="footer-bottom-tank">

                    <p>F0LLOW US</p>

                    <div class="social-icon-container">
                        <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                        <a href="" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                        <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
                    </div>

                </div>

            </div>
            <div class="footer-bottom-column" id="footer-bottom-column-2">
                <div class="paragraph-tank">
                    <div class="paragraph-column">
                        <p class="paragraph-title">Help Center</p>
                        <p class="paragraph-title">Contact Us</p>
                        <p class="paragraph-title">Account</p>
                        <p class="paragraph-title">Product Setup</p>
                        <p class="paragraph-title">Warranty</p>
                        <p class="paragraph-title">Order Status</p>
                    </div>
                    <div class="paragraph-column">
                        <p class="paragraph-title">Custom Product</p>
                        <p class="paragraph-title"> Bulk Orders</p>
                        <p class="paragraph-title">Press Releases</p>

                    </div>
                    <div class="paragraph-column">
                        <p class="paragraph-title">Our Story</p>
                        <p class="paragraph-title">Born in PC</p>
                        <p class="paragraph-title">Protect Our Winters</p>
                        <p class="paragraph-title">Careers</p>
                    </div>
                </div>
            </div>

            <div class="footer-bottom-column" id="footer-bottom-column-3">
                <div class="podcast-container">
                    <p>SUBSRCIBE TO OUR PODCAST</p>
                    <div class="podcast-tank">
                        <a href="#" class="paragraph-title">iTunes</a>
                        <a href="#" class="paragraph-title">Spotify</a>
                        <a href="#" class="paragraph-title">YouTube</a>
                    </div>
                </div>


            </div>


    </footer>
`