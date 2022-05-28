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
    //in composition API ref is different from the normal $ref
    

    //in setup(){

    }

    // we can use functions and constants without defining 
      methods:
      computed:
      ...

    //but we should import {refs} from "vue"

    //every const its value migth change we must use ref("")
                                                      ref({a:a})

    //to refrence to a const in setup() we dont use this anymore
      we use the const directly, and to access it value we use .value

    // if a html tag has ref : <input ref="name123">
      cant use like in data(){
        this.$ref.name123.focus
      }

    but instead: we define it as ref:
      const name123 = ref("");
      name123.value.focus();



      //////////////////////////////////////

      Slots:
      to use slot in child component
      type slot with name 
      <slot name="title"></slot>
      <slot name="body1">
        <main></main>
      </slot>


      then::: in parent component:
      <template>
        <div>
          <template #title>   //or v-slot:title
              make the design here
          </template>

          <template #body1>  ///or v-slot:body1
              make the design here
          </template>
        </div>
      </template>