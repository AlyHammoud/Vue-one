//install vue
vue create <file name>

//install vue devtools in chrome extensions

//to use modals you should use $emit to pass values between compoenet as event
    @click = $emit('change-login-status')
    then only can be used in the model name used with as    
    @change-login-status="login = false"

//firebase:
getstarted
add project
(disable analytics if i dont want to )
then create
continue

1. authentication
    getstarted:
        sign-in method
            choose: email/password
2. go to home or the console
    enter to the project we recently created
    click on the icon(</>) which means for web
    then add a register name without the hosting name if i want
    then it will generate the sdk

3. then create inside your project a file firebase.js (in this project it is put in utilities folder)
    then paste the sdk copied from firebase

4. npm install firebase
        to install module

5. follow the documnetion:
    https://firebase.google.com/docs/auth/web/password-auth


// install Emoji extension
    ctl + shift + p
    Emoji:insert emoji
    then select which Emoji
    

//teleport: to put the content inside in the index.html outside the div
  <teleport to="#app2">
    div or component
  </teleport>

  //$refs: can be used in the html tag as refrence: like getElementById
    <input type="text" ref="paragraph" />

    in methods:{
      changeParagraphtoRed(){
        this.$refs.paragraph.focus();
      }
    }


    newBranch