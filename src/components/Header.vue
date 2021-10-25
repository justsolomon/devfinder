<template>
  <header class="header">
    <h1 class="header__title">devfinder</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style lang="scss">
.header {
  margin-bottom: 24px;

  &__title {
    font-size: $font-size--2xl;
    font-weight: $font-weight--bold;
  }
}
</style>
