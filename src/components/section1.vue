<template>
  <section class="section-1">
    <h1 class="section-heading">Variety of Foods</h1>
    <div class="section-1-icons">
        <font-awesome-icon :icon="icon" v-for="(icon,index) in icons" :key="index" :class="{'change':index===0}"/>
    </div>
  </section>
</template>

<script>
export default {
name: "Section1",
data(){
    return{
        icons:["egg", "stroopwafel", "cheese", "hotdog", "drumstick-bite", "apple-alt", "ice-cream", "fish", "cookie", "seedling"],
        domIcons: []
    }
},
mounted: function(){
  this.iconSlider();
},
methods:{
  iconSlider(){
    this.domIcons = [...document.querySelectorAll('.section-1-icons svg')];
    setInterval(()=>{
      const icon = document.querySelector('.section-1-icons .change');
      icon.classList.remove('change');
      if(!icon.nextElementSibling){
        this.domIcons[0].classList.add('change');
      }else{
        icon.nextElementSibling.classList.add('change');
      }   
    }, 4000)
  }
}
}
</script>

<style lang="scss">
.section-1{
@include section-styles(#333);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @include ie11{
    justify-content: space-around;
  }
  &-icons{
    svg{
      font-size: 35rem;
      color: #a79a2d;
      position: absolute;
      transform: translate(-50%,-50%) scale(0);
      @include text-shadow(.2rem);
      transition: transform .3s;
      &.change{
        transform: translate(-50%,-50%) scale(1);
        transition-delay: .3s;
      }
       @include breakpoint(1000px){
         font-size: 25rem;
       }
       @include breakpoint(700px) {
         font-size: 20rem;
       }
    }
  }
}

.section-heading{
  font:{
    size: 12rem;
    weight: 900;
  }
  color: white;
  text:{
    align: center;
    transform: capitalize;
  };
  letter-spacing: .5rem;
  @include text-shadow(.3rem);
}

</style>