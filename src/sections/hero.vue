<template>
  <div class="hero" style="background-image: url('./images/bg.jpg')"></div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
