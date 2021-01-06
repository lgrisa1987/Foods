<template>
  <section class="section-4">
    <div class="section-4-text">
        <h2 class="section-4-heading">Sign Me Up</h2>
        <p class="section-4-paragraph">Be the first to know about new products</p>
    </div>
    <form class="signup-form">
        <input type="email" class="signup-form-input" placeholder="Enter Your Email">
        <button type="submit" class="signup-form-btn">
            <font-awesome-icon :icon="icon"/>
        </button>
    </form>
    <p class="copyright">
        CodeAndCreate &copy; All Rights Reserved
    </p>
  </section>
</template>

<script>
export default {
name: "Section4",
data(){
    return{
       icon: "arrow-right"
    }
},

}
</script>

<style lang="scss">
.section-4{
    width: 100%;
    height: 30vh;
    background-color: #222;
    display: flex;
    justify-content: space-around;
    padding: 3rem 0;
    position: relative;
    align-items: flex-start;
    @include breakpoint(1000px){
        height: 30rem;
    }
    @include breakpoint(700px){
        height: 40rem;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    &-text{
        text-transform: uppercase;
         @include breakpoint(700px){
             margin-bottom: 8rem;
         }
    }
    &-heading{
        font:{
            size: 4rem;
            weight: 900;
        }
        color: #a79a2d;
    }
    &-paragraph{
        font-size: 1.8rem;
        color: #888;
    }
}

.signup-form{
    display: flex;
    align-items: center;
    &-input{
        width: 35rem;
        height: 5rem;
        padding: 1rem;
        border: .2rem solid #a79a2d;
         font:{
            size: 1.6rem;
            weight: 700;
        }
        letter-spacing: .1rem;
        color: #a79a2d;
        &::placeholder{
        color: currentColor;
        }
    }
    &-btn{
        position: relative;
        left: -4.5rem;
        width: 4rem;
        height: 4rem;
        background-color: #333;
         color: #a79a2d;
         border: none;
         font-size: 1.8rem;
         cursor: pointer;
    }
}
.copyright{
    position: absolute;
    bottom: 3rem;
     font:{
            size: 1.7rem;
            weight: 200;
        }
    color: #eee;
    letter-spacing: .1rem;
    border-top: .1rem solid #888;
    padding-top: 6rem;
    width: 100%;
    text-align: center;
    left: 0;
}

</style>