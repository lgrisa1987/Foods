<template>
  <section class="section-2">
    <h1 class="section-heading">popular meals</h1>
    <div class="cards-container">
        <div class="card" v-for="(card,index) in cardsInfo" :key="index">
            <img :src="require(`@/assets/${card.img}.png`)" :alt="card.name" class="card-img">
            <h3 class="card-name">{{card.name}}</h3>
            <button class="card-btn">Order Now</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
name: "Section2",
data(){
    return{
        cardsInfo: [
            {
                img:"card-img-1",
                name: "Fish"
            },
            {
                img:"card-img-2",
                name: "Cake"
            },
            {
                img:"card-img-3",
                name: "Lobster"
            }
        ]
    }
},
}
</script>

<style lang="scss">
.section-2{
@include section-styles(#222);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10rem 0;
   @include breakpoint(1400px){
       height: auto;
       padding: 10rem 0 12rem;
   }
}

.cards-container{
    display: flex;
    justify-content: space-evenly;
    @include ie11{
    justify-content: space-around;
  }
   @include breakpoint(1400px){
       margin-top: 10rem;
   }
    @include breakpoint(1000px){
        flex-wrap: wrap;
    }
}

.card{
    width: 30rem;
    background-color: #a79a2d;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @include box-shadow(1rem, 1rem, #000);
    @include breakpoint(1000px){
       margin: 5rem;
    }
    @include ie11{
        display: block;
        text-align: center;
    }
    transform: rotateY(20deg) skewX(-2deg);
    transition: transform .5s, box-shadow .5s;
    &:hover{
         transform: rotateY(20deg) skewX(-2deg) translateY(-3rem);
         @include box-shadow(2rem, 2rem, #000);
    }
    &::before,
    &::after{
        content: "";
        position: absolute;
    }
    &::before{
        width: 1rem;
        height: 100%;
        background-color: #817824;
        top: 0;
        left: -1rem;
        transform: skewY(45deg);
        transform-origin: right;
         @include box-shadow(-.1rem, .1rem, #000);
    }
    &::after{
         width: 100%;
        height: 1rem;
        background-color: #8f8317;
        top: -1rem;
        left:0;
        transform: skewX(45deg);
        transform-origin: bottom;
    }
    &-img{
        width: 100%;
    }
    &-name{
        font:{
            size: 3rem;
            weight: 900;
        }
        text-transform: uppercase;
        letter-spacing: .5rem;
        color: #111;
        margin: 2rem 0;
        @include text-shadow(.15rem);
    }
    &-btn{
        width: 70%;
        background-color: #111;
        color: #888;
        border-radius: 5rem;
        font:{
            size: 1.5rem;
            weight: 800;
        }
        letter-spacing: .2rem;
        text-transform: capitalize;
        border: none;
        padding: .5rem 0;
        cursor: pointer;
        @include box-shadow(-.2rem, .2rem, #000);
    }
}

</style>