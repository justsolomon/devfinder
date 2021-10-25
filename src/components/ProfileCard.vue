<template>
  <div class="profile-card">
    <div class="profile-card__details">
      <img
        class="profile-card__image"
        src="https://avatars.githubusercontent.com/u/55158465?v=4"
      />
      <div class="profile-card__user-info">
        <div class="profile-card__name">
          <h2 class="profile-card__full-name">Gbolahan Balogun</h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopenner noreferrer"
            class="profile-card__username"
            >@justsolomon</a
          >
        </div>
        <div class="profile-card__date">Joined 11 Oct 2019</div>
      </div>
    </div>

    <p class="profile-card__bio">Building cool stuff for the web</p>

    <div class="profile-card__stats">
      <div class="profile-card__stats__section">
        <h3 class="profile-card__stats__section__title">Repos</h3>
        <p class="profile-card__stats__section__value">44</p>
      </div>
      <div class="profile-card__stats__section">
        <h3 class="profile-card__stats__section__title">Followers</h3>
        <p class="profile-card__stats__section__value">26</p>
      </div>
      <div class="profile-card__stats__section">
        <h3 class="profile-card__stats__section__title">Following</h3>
        <p class="profile-card__stats__section__value">32</p>
      </div>
    </div>

    <div class="profile-card__personal-details">
      <div
        :class="[
          'profile-card__personal-details__section',
          !value && 'profile-card__personal-detils__section--inactive',
        ]"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          class="profile-card__personal-details__section__icon"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
          ></path>
        </svg>
        <p class="profile-card__personal-details__section__value">
          Lagos, Nigeria
        </p>
      </div>
      <div
        :class="[
          'profile-card__personal-details__section',
          !value && 'profile-card__personal-detils__section--inactive',
        ]"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          class="profile-card__personal-details__section__icon"
        >
          <path
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          ></path>
        </svg>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopenner noreferrer"
          class="profile-card__personal-details__section__value"
        >
          @gbsolomon1
        </a>
      </div>
      <div
        :class="[
          'profile-card__personal-details__section',
          !value && 'profile-card__personal-detils__section--inactive',
        ]"
      >
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="profile-card__personal-details__section__icon"
        >
          <path
            fill-rule="evenodd"
            d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
          ></path>
        </svg>
        <p class="profile-card__personal-details__section__value">haq</p>
      </div>
      <div
        :class="[
          'profile-card__personal-details__section',
          !value && 'profile-card__personal-detils__section--inactive',
        ]"
      >
        <svg
          class="profile-card__personal-details__section__icon"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"
          ></path>
        </svg>
        <p class="profile-card__personal-details__section__value">@qucoon</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileCard",
});
</script>

<style lang="scss">
.profile-card {
  margin-top: 24px;
  padding: 48px 32px 32px 32px;
  background-color: $white;
  border-radius: $border-radius--lg;
  box-shadow: $shadow;

  &__details {
    width: 100%;
    display: flex;
  }

  &__image {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-right: 24px;
  }

  &__user-info {
    width: 100%;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
  }

  &__full-name {
    font-size: $font-size--3xl;
    font-weight: $font-weight--medium;
    margin-bottom: 8px;
  }

  &__username {
    color: $brand-color;
  }

  &__date {
    font-size: $font-size--md;
    margin-top: 8px;
  }

  &__bio,
  &__personal-details {
    margin-left: 124px;
  }

  &__stats {
    margin: 32px 0 32px 124px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    border-radius: $border-radius--lg;
    background-color: $bg-light--primary;
    box-shadow: $shadow;

    &__section {
      width: 33.3%;

      &__title {
        margin-bottom: 8px;
      }

      &__value {
        font-size: $font-size--2xl;
        font-weight: $font-weight--bold;
      }
    }
  }

  &__personal-details {
    display: flex;
    flex-wrap: wrap;

    &__section {
      width: 50%;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      color: $primary-color;

      &__icon {
        height: 18px;
        width: 18px;
        margin-right: 8px;
      }

      &__value {
        color: $primary-color;
      }
    }
  }

  @media #{$media-desktop-sm} {
    &__full-name {
      font-size: $font-size--2xl;
    }

    &__date {
      font-size: $font-size--base;
      margin-top: 4px;
    }

    &__stats {
      padding: 16px;
    }
  }

  @media #{$media-tablet} {
    &__details {
      margin-bottom: 24px;
    }

    &__user-info {
      flex-direction: column;
    }

    &__date {
      margin-top: 12px;
    }

    &__bio,
    &__personal-details,
    &__stats {
      margin-left: 0;
    }
  }

  @media #{$media-mobile-sm} {
    padding: 32px 24px 24px 24px;

    &__image {
      height: 75px;
      width: 75px;
    }

    &__full-name {
      font-size: $font-size--xl;
      margin-bottom: 6px;
    }

    &__stats__section {
      text-align: center;

      &__title {
        font-size: $font-size--xs;
      }

      &__value {
        font-size: $font-size--xl;
      }
    }
  }
}
</style>
