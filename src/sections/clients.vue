<template>
  <v-layout class="clients section" id="clients">
    <h2>Some of my work / clients: </h2>
    <v-flex xs12 sm10 offset-sm1>
      <v-container grid-list-md fluid>
        <v-layout row wrap>
          <v-flex v-for="(image, index) in this.images" :key="index" xs2 d-flex>
            <a :href="`${image.href}`" target="_blank">
              <v-img :src="`${image.image}`" :lazy-src="`${image.image}`" contain max-height="100px"></v-img>
            </a>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      images: [
        {
          image: "./images/fxm.png",
          href: "https://get.fuelbymckinsey.com/"
        },
        {
          image: "./images/lp.png",
          href: "https://www.littlepassports.com/"
        },
        {
          image: "./images/bac.png",
          href: "http://bayareacouncil.org"
        },
        {
          image: "./images/aemc.jpg",
          href: "http://www.aemc.gov.au/"
        },
        {
          image: "./images/oporto.webp",
          href: "https://www.oporto.com.au/"
        },
        {
          image: "./images/lxxhjxxn.png",
          href: "http://lxxhjxxn.com/"
        },
        {
          image: "./images/cb.png",
          href: "https://www.craveablebrands.com/"
        },
        {
          image: "./images/patter.svg",
          href: "https://www.patter.com.au/"
        },
        {
          image: "./images/ws.png",
          href: "https://www.wsitradeandcontract.com/"
        }
      ]
    };
  },
};
</script>

<style scoped lang="scss">
.clients {
  display: flex;
  flex-direction: column;
}

a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;

  .v-image__image {
    transition: background-size 300ms;
  }

  &:hover {
    .v-image__image--contain {
      background-size: 120% !important;
    }
  }
}
</style>
