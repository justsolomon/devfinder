<template>
  <div class="input-container">
    <svg
      class="input-container__icon"
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>

    <input
      class="input-container__input"
      placeholder="Search GitHub username..."
      :value="username"
      @input="updateUsername"
    />

    <button class="input-container__button" @click="fetchProfile">
      Search
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "SearchInput",
  props: {
    username: String,
    loading: Boolean,
    updateUsername: {
      type: Function as PropType<() => void>,
    },
    fetchProfile: {
      type: Function as PropType<() => void>,
    },
  },
});
</script>

<style lang="scss">
.input-container {
  position: relative;
  display: flex;
  align-items: center;

  &__icon,
  &__button {
    position: absolute;
  }

  &__button,
  &__input {
    border-radius: $border-radius--lg;
    border: none;

    &:focus {
      outline: none;
    }
  }

  &__icon {
    color: $brand-color;
    height: 24px;
    width: 24px;
    left: 15px;
  }

  &__input {
    height: 55px;
    width: 100%;
    padding: 0 90px 0 50px;
    box-shadow: $shadow;
    font-size: $font-size--md;

    &::placeholder {
      color: $secondary-color;
    }
  }

  &__button {
    height: 40px;
    width: 80px;
    right: 10px;
    color: $white;
    font-size: $font-size--base;
    font-weight: $font-weight--bold;
    background-color: $brand-color;

    &:hover,
    &:focus {
      background-color: $brand-color-dark;
    }
  }

  @media #{$media-mobile-sm} {
    &__icon {
      height: 20px;
      width: 20px;
    }

    &__input,
    &__button {
      border-radius: $border-radius--md;
    }

    &__input {
      height: 45px;
      font-size: $font-size--sm;
    }

    &__button {
      height: 35px;
      width: 70px;
      font-size: $font-size--sm;
    }
  }
}
</style>
