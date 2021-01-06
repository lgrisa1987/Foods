<template>
  <section class="section-3">
    <h1 class="section-heading">Gallery</h1>
    <div class="gallery">
    <a href="#" v-for="(galleryItem,index) in galleryItems" :key="index" class="gallery-link" title="Order Now">
        <img :src="require(`@/assets/gallery-img-${index+1}.jpg`)" class="food-img" :alt="galleryItem">
        <h3 class="food-name">{{galleryItem}}</h3>
        <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet accusantium, dolorum officiis, magni assumenda eligendi.</p>
    </a>
    </div>
  </section>
</template>

<script>
export default {
name: "Section3",
data(){
    return{
        galleryItems:["Pancakes", "Cupcakes", "Hummus", "Hamburger", "Salmon", "Vegetables"]
    }
},

}
</script>

<style lang="scss">
.section-3{
    @include section-styles(#333);
    height: auto;
    padding: 5rem 0;
}
.gallery{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
     @include ie11{
        justify-content: space-around;
    }
    margin-top: 10rem;
    &-link{
        position: relative;
        flex-basis: 26%;
        max-width: 26%;
        margin: 4rem 0;
        color: #fff;

        @include breakpoint(1400px){
            width: 40rem;
            height: 25rem;
            margin: 5rem;
        }
         @include breakpoint(1000px){
            flex-basis: auto;
            max-width: initial;
         }
        &:hover::before{
            height: 80%;
        }
        &:hover::after{
            width: 90%;
        }
        &:hover .food-name{
            width: 100%;
            transition: width 1.5s .5s;
        }
        &:hover .food-description{
            opacity: 1;
            visibility: visible;
            transition: opacity 1s 1s;
        }
        &:hover .food-img{
           @include multi-box-shadow(1rem, .1rem, #e92929, 2rem, .1rem, #a2e946, 3rem, .1rem, #297ce9, 4rem, .1rem, #e92999);
           filter: blur(.5rem);
           opacity: .5;
           transform: scale(1.1);
        }
        &::before,
        &::after{
             content: "";
            position: absolute;
            background-color: #fff;
        }
        &::before{
            width: .2rem;
            height: 0;
            top: 2vw;
            left: 80%;
            transition: height .5s;
            z-index: 10;
        }
        &::after{
            width: 0;
            height:.2rem;
            top: 30%;
            left: 2rem;
            transition: width .5s;
        }
    }
}

.food{
    &-img{
        width: 100%;
        height: 15vw;
        object-fit: cover;
         @include multi-box-shadow(.3rem, .1rem, #e92929, .5rem, .1rem, #a2e946, .7rem, .1rem, #297ce9, .9rem, .1rem, #e92999);
         transition: all .5s;
           @include breakpoint(1400px){
            width: 100%;
            height: 100%;
        }
    }
    &-name{
        position: absolute;
        top: 3rem;
        left: 3rem;
         font:{
            size: 2rem;
            weight: 700;
        }
        text-transform: uppercase;
        letter-spacing: .1rem;
        width: 0;
        overflow: hidden;
        transition: width .3s;
    }
    &-description{
        position: absolute;
        bottom: 3vw;
        left: 2rem;
        width: 70%;
          font:{
            size: 1.5rem;
            weight: 300;
        }
        letter-spacing: .1rem;
        text-transform: uppercase;
        opacity: 0;
        visibility: hidden;
        transition: opacity .3s;
    }
}
</style>