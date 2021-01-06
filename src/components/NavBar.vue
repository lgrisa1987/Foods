<template>
  <nav class="navbar target">
    <a href="#" class="navbar-link" v-for="(navbarItem,index) in navbarIcons" :key="index">
        <font-awesome-icon :icon="navbarItem.icon"/>
        <span>{{navbarItem.desc}}</span>
    </a>
  </nav>
</template>

<script>
export default {
name: "NavBar",
data(){
    return{
     navbarIcons: [
         {icon:"home", desc: "Home"},
         {icon:"utensils", desc: "Meals"},
         {icon:"hamburger", desc: "Burger"},
         {icon:"pizza-slice", desc: "Pizza"},
         {icon:"blender-phone", desc: "Contact"}, 
         ]
    }
},

}
</script>

<style lang="scss">
.navbar{
    width: 100%;
    height: 14rem;
    background-color: #000;
    position: fixed;
    top: -14rem;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    @include box-shadow(.2rem, .2rem, #000);
    transition: top .4s;
    &.change{
        top: 0;
        transition-delay: .2s;
        .navbar-link{
            opacity: 1;
            transition: opacity .4s, color .3s;
            &:nth-child(1){
                transition: opacity .4s .5s, color .3s;
            }
            &:nth-child(2){
                  transition: opacity .4s .6s, color .3s;
            }
            &:nth-child(3){
                 transition: opacity .4s .7s, color .3s;
            }
            &:nth-child(4){
                  transition: opacity .4s .8s, color .3s;
            }
            &:nth-child(5){
                  transition: opacity .4s .9s, color .3s;
            }
        }
    }
    &-link{
        color: #aaa;
        margin: 0 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: color .3s, opacity .2s;
        opacity: 0;
        @include breakpoint(900px){
            margin: 2rem;
        }
         @include breakpoint(550px) {
              margin: 0 .7rem;
         }
        &:hover{
            color: #fff;
        }
        svg{
            font-size: 7rem;
             @include breakpoint(900px){
                font-size: 4rem;
            }
        }
        span{
            font:{
                size: 2.5rem;
                weight: 900;
            }
            letter-spacing: .5rem;
            margin-top: .5rem;
             @include breakpoint(900px){
                font-size: 2rem;
            }
        }
    }
}
.menu{
    width: 4rem;
    height: 6rem;
    background-color: #000;
    position: fixed;
    top: 1rem;
    left: 5rem;
    border-radius: 30rem 30rem 15rem 15rem;
    @include custom-box-shadow(.1rem,-.1rem,#000);
    cursor: pointer;
    z-index: 100;
    transition: top .4s .2s;
     @include breakpoint(700px) {
          left: 2rem;
    }
    &::before{
        content: "";
        width: .3rem;
        height: 15rem;
        background-color: #000;
        position: absolute;
        top: -15rem;
        left: calc(50% - .15rem);
        box-shadow: .1rem 0 .1rem #000;
    }
    &.change{
        top: 15rem;
        transition-delay: 0s;
    }
}

</style>