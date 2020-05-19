<template>
  <div class="home">
    <div class="home__content">
      <p>Présentation</p>
      <h1>A BLOG<br>FOR ALL<br>MAFIA</h1>
      <div class="home__author">
        <img class="home__author-img" src="../assets/Vito_Scaletta.jpg" alt="" srcset="">
        <p>By Vito Scaletta in New York</p>
      </div>
      <p class="home__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloribus similique maiores itaque cupiditate necessitatibus nisi quae sunt accusantium, iure id harum aliquid? Sequi non, adipisci libero pariatur consequatur minus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit obcaecati, corporis eaque, officiis animi distinctio voluptatem iure eveniet pariatur consequatur optio molestiae officia repudiandae explicabo laborum perferendis ipsa ducimus. Dignissimos!
      </p>
      <p class="home__text-time">5 min for read</p>
    </div>
    <img class="home__image" src="../assets/home.jpg" alt="" srcset="">
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="scss">
.home {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &__content {

  }
  &__image {
    width: 35vw;
    border-radius: 5px;
  }
  &__author {
    display: flex;
  }
  &__author-img {
    width: 50px;
    border-radius: 50px ;
    margin-right: 20px;
  }
  &__text {
    max-width: 700px;
  }
  &__text-time {
    font-weight: normal;
    text-decoration: underline;
  }
  @media (max-width: 700px) {
    &__image {
      display: none;
    }
  }
}
</style>
