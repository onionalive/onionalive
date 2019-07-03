<template>
  <div class="footer">
    <div class="footer__section footer__left">
      <a class="footer__main-link" href="#"><h2>Stephen R.</h2></a>
    </div>

    <div class="footer__right">
      <ul class="footer__nav">
        <li><a target="_blank" href="https://github.com/onionalive">Github</a></li>
        <li><a target="_blank" href="https://www.last.fm/user/s101391">LastFM</a></li>
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
.footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 20px 20px;
  box-sizing: border-box;

  background-color: #222;
}

.footer__main-link {
  color: #ffffff;
}

.footer__left {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
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
