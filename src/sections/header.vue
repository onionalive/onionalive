<template>
  <div class="header">
    <div class="header__section header__left">
      <img class="person-image" alt="Stephen" src="../../Media/stephen.jpg">
      <h2>Stephen R.</h2>
    </div>

    <div class="header__right">
      <ul class="header__nav">
        <li><a  href="#about">About</a></li>
        <li><a  href="#clients">Clients</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;

  background-color: #2c3e50;
  box-shadow: 0 -2px 20px 0 #333333;
}

.header__left {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

img {
  height: 50px;
  width: auto;
  margin-right: 20px;
}

ul {
  display: flex;
  flex-direction: row;

  list-style: none;
  padding: 0;
}

li {
  margin-right: 5px;
}
</style>
