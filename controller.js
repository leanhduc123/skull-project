const controller = {}

controller.register = async function (registerInfor) {

    let email = registerInfor.email
    let password = registerInfor.password
    let displayName = registerInfor.firstname + " " + registerInfor.lastname

    try {

        // 1, tao user

        await firebase.auth().createUserWithEmailAndPassword(email,password)

        // 2, update user
        await firebase.auth().currentUser.updateProfile({
            displayName: displayName
        })

        //3, send email

        await firebase.auth().currentUser.sendEmailVerification()
        view.setText('register-success','An email has been sent to your email address')

    } catch (error) {

        view.setText('register-error', error.message)

        view.showComponent('register')

    }

}

controller.logIn = async function (logInInfor) {

    let email = logInInfor.email

    let password = logInInfor.password

    try {

        let infor = await firebase.auth().signInWithEmailAndPassword(email,password)

        console.log(infor)

        if (infor.user && infor.user.emailVerified) {

            let data = localStorage.setItem('dataUser', JSON.stringify(infor))

            view.showComponent('default')
            
        }

        else{
            throw new Error('You must have verified email')
        }
        
    } catch (error) {

        view.setText('login-error', error.message)
        
    }
    
}

controller.loadShowPage = async function(){
    let doc = await firebase
        .firestore()
        .collection("product")
        .doc("USyQbxHe4MfZwbMqRPtc")
        .get()
    console.log(doc.exists)
    if (doc && doc.exists){
        let item = transformDoc(doc)
        console.log(item)
        model.saveProductInfo(item)
    }

    view.showPage()
}

function transformDoc(doc){
    let data = doc.data() 
    data.id = doc.id
    return data
}