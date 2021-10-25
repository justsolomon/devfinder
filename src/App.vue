<template>
  <Header />
  <SearchInput />
  <ProfileCard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import SearchInput from "./components/SearchInput.vue";
import ProfileCard from "./components/ProfileCard.vue";
import "./styles/main.scss";

export default defineComponent({
  name: "App",
  components: {
    Header,
    SearchInput,
    ProfileCard,
  },
});
</script>

<style lang="scss">
#app {
  width: 45%;
  margin: 50px auto;

  @media #{$media-desktop} {
    width: 50%;
  }

  @media #{$media-desktop-sm} {
    width: 60%;
  }

  @media #{$media-tablet} {
    width: 70%;
  }

  @media #{$media-mobile} {
    width: 80%;
  }

  @media #{$media-mobile-sm} {
    width: 90%;
    margin: 30px auto;
  }
}
</style>
