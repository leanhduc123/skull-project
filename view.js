const view = {}

view.showComponent = function (name) {

    switch (name) {
        case 'default': {

            let app = document.getElementById('app')
            app.innerHTML = component.default

            defaultFunction()

            let logIn = document.getElementById('sign-in')

            logIn.onclick = signIn

            function signIn() {

                if (typeof (localStorage.getItem('dataUser')) == 'string') {

                    view.showComponent('user')

                } else {

                    view.showComponent('logIn')

                }

            }

            let shopBtn = document.getElementById('shop')

            shopBtn.onclick = showListHandler

            function showListHandler() {
                view.showComponent('shopPage1')
            }

            // console.log(logInHandler())
            break

        }

        case 'logIn': {
            let app = document.getElementById('app')

            app.innerHTML = component.logIn

            defaultFunction()

            let register = document.getElementById('create-account')

            register.onclick = createAccount

            function createAccount() {

                view.showComponent('register')

            }
            let logIn = document.getElementById('sign-in')

            logIn.onclick = signIn

            function signIn() {

                view.showComponent('logIn')
            }

            let shopBtn = document.getElementById('shop')

            shopBtn.onclick = showListHandler

            function showListHandler() {
                view.showComponent('shopPage1')
            }

            let formLogIn = document.getElementById('log-in-side-container')

            formLogIn.onsubmit = formLogInHandler

            function formLogInHandler(event) {

                event.preventDefault()

                let logInInfor = {
                    email: formLogIn.email.value,
                    password: formLogIn.password.value
                }

                let validateResult = [
                    view.validateResult(logInInfor.email, 'email-error', 'Invalid Email'),
                    view.validateResult(logInInfor.password, 'password-error', 'Invalid Password')

                ]

                // submit 

                if (check(validateResult)) {

                    controller.logIn(logInInfor)

                }

            }
            break

        }


        case 'user': {

            let app = document.getElementById('app')

            app.innerHTML = component.user;

            defaultFunction()

            let inforUser = JSON.parse(localStorage.getItem('dataUser'));

            let displayName = inforUser.user.displayName

            document.getElementById('name-user').innerText = displayName;

            let signOut = document.getElementById('sign-out')
            signOut.onclick = sigOutHandler

            function sigOutHandler() {
                localStorage.removeItem('dataUser')
                view.showComponent('logIn')
            }

            let shopBtn = document.getElementById('shop')

            shopBtn.onclick = showListHandler

            function showListHandler() {
                view.showComponent('shopPage1')
            }

            break
        }

        case 'register': {

            let app = document.getElementById('app')

            app.innerHTML = component.register

            defaultFunction()

            let shopBtn = document.getElementById('shop')

            shopBtn.onclick = showListHandler

            function showListHandler() {
                view.showComponent('shopPage1')
            }

            let formsubmit = document.getElementById('register-container')

            formsubmit.onsubmit = formSubmitHandler

            function formSubmitHandler(event) {

                event.preventDefault()
                //1, get data
                let registerInfor = {

                    firstname: formsubmit.firstname.value,
                    lastname: formsubmit.lastname.value,
                    email: formsubmit.email.value,
                    password: formsubmit.password.value,
                    confirmPassword: formsubmit.confirmPassword.value
                }

                console.log(registerInfor)

                //2,validate information

                let validateResult = [

                    view.validateResult(registerInfor.firstname, 'firstname-error', 'Invalid First Name'),
                    view.validateResult(registerInfor.lastname, 'lastname-error', 'Invalid Last Name'),
                    view.validateResult(registerInfor.email, 'email-error', 'Invalid Email'),
                    view.validateResult(registerInfor.password && registerInfor.password.length >= 6, 'password-error', 'Invalid Password'),
                    view.validateResult(registerInfor.confirmPassword === registerInfor.password, 'confirmPassword-error', 'Invalid Confirm Password')

                ]

                //3,check submitForm

                if (check(validateResult)) {

                    controller.register(registerInfor)


                }
            }

            defaultFunction()

            let logIn = document.getElementById('sign-in')

            logIn.onclick = signIn

            function signIn() {

                view.showComponent('logIn')
            }

            break
        }

        case 'shopPage1': {
            controller.loadShowPage()

            let app = document.getElementById('app')

            app.innerHTML = component.shopPage1;

            defaultFunction()

            let logIn = document.getElementById('sign-in')

            logIn.onclick = signIn


            function signIn() {

                if (typeof (localStorage.getItem('dataUser')) == 'string') {

                    view.showComponent('user')

                } else {

                    view.showComponent('logIn')

                }

            }



            break
        }
        case 'detail': {
            let app = document.getElementById('app')

            app.innerHTML = component.detail;

            defaultFunction()

            let logIn = document.getElementById('sign-in')

            logIn.onclick = signIn

            view.showDetail(model.currentProductDetail)


            function signIn() {

                if (typeof (localStorage.getItem('dataUser')) == 'string') {

                    view.showComponent('user')

                } else {

                    view.showComponent('logIn')

                }

            }

            break
        }
    }
}

function onOff(element) {


    if (element.style.display == 'none') {

        element.style.display = 'block'

    } else {
        element.style.display = 'none'
    }

}

function defaultFunction() {

    window.onscroll = function () {

        let slogan = document.getElementById('slogan')

        if (window.scrollY > 0) {

            slogan.style.display = 'none'


        }

        if (window.scrollY == 0) {
            slogan.style.transition = 'all 0.4s 0.5s ease'
            slogan.style.display = 'block'


        }

    }

    let search = document.getElementById('search-navbar-container')

    search.style.display = 'none'

    let exitBtn = document.getElementById('search-button')

    exitBtn.addEventListener('click', function () {

        onOff(search)

    })

    let exit = document.getElementById('exit')

    exit.addEventListener('click', function () {

        onOff(search)

    })

}

function tab(event, name) {

    let i, tabContent, tabButton;

    //Get all elements with class="input-infor" and hide them
    tabContent = document.getElementsByClassName('input-infor')

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none'
    }
    console.log(tabContent.length)

    // Get all elements with class="navbar-button" and remove the class "active"

    tabButton = document.getElementsByClassName("navbar-button")

    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" active", "")

    }

    console.log(tabButton.length)

    document.getElementById(name).style.display = 'block'
    console.log(name)
    event.currentTarget.className += " active";

}

view.setText = function (id, text) {

    document.getElementById(id).innerText = text

}

view.validateResult = function (condition, id, text) {

    if (condition) {
        view.setText(id, '')
        return true

    } else {

        view.setText(id, text)
        return false

    }

}

function check(validateResult) {

    for (let result of validateResult) {

        if (!result) {
            return false

        } else {
            return true
        }
    }

}

view.showPage = function () {
    let infos = model.productInfo.info
    let productContainer = document.getElementById("product-container")
    productContainer.innerHTML = ""
    let productIndex = 0
    let row = 1
    for (let info of infos) {
        if (productIndex % 3 == 0) {
            productContainer.innerHTML += `<div class="product-detail-row" id="${row}"></div>`
            row = row + 1
        }
        let rowNumber = `${row - 1}`
        let productDetailRow = document.getElementById(rowNumber)
        let productDetail = `
        <div class="product-cell" id="product-cell" onclick="view.myFunction(${productIndex})">
                <a href="#" class="product-tank">
                    <figure class="product-figure">
                        <img class="product-picture"
                            src="${info.image}"
                            alt="">
                    </figure>

                    <div class="name-product-container">
                        <div class="name-product">
                            ${info.name}
                        </div>

                        <div class="price-container">
                            <div class="price-tag">
                                ${info.price}
                            </div>

                        </div>

                    </div>
                </a>
            </div>
        `
        productDetailRow.innerHTML += productDetail
        productIndex = productIndex + 1
        
    }
}
view.myFunction = function(index) {
    let infos = model.productInfo.info
    for (let info of infos)
    {
        if (info.idProduct == index) model.saveCurrentProductDetail(info)
    }
    view.showComponent("detail")
}

view.showDetail = function (info) {
    let backgroundCover = document.getElementById("background-cover")
    backgroundCover.innerHTML = `
    <div class="center-container">
                <ul class="product-infor-container">
                    <li id="name-tag-product" class="tag-product">
                        <h3>
                            ${info.name}
                        </h3>
                    </li>
                    <li id="price-tag-product" class="tag-product">
                        <h3>
                            ${info.price}
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
    `

}

