<template>
  <div id="app">
    <Header />
    <Hero />
    <About />
    <Clients />
    <Footer />
  </div>
</template>

<script>
import Header from './sections/header.vue'
import Hero from './sections/hero.vue'
import About from './sections/about.vue'
import Clients from './sections/clients.vue'
import Footer from './sections/footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Hero,
    About,
    Clients,
    Footer
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

body {
  background-color: #2c3e50;
  color: #ffffff;
  margin: 0;
}

.section {
  margin-top: 50px;
  margin-bottom: 50px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

.person-image {
  border-radius: 50%;
}

.-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 25px;
}

a {
  color: #0097a7;
  font-weight: bold;

  transition: color 300ms;

  &:hover,
  &:focus {
    color: #56c8d8;
  }
}
</style>
