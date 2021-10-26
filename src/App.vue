<template>
  <Header />
  <SearchInput
    :username="username"
    :updateUsername="updateUsername"
    :fetchProfile="fetchUserProfile"
    :loading="loading"
  />
  <p v-show="loading" class="loader">Loading...</p>
  <ProfileCard :profile="profile" v-show="!loading && profile.login" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import SearchInput from "./components/SearchInput.vue";
import ProfileCard from "./components/ProfileCard.vue";
import axios from "axios";
import "./styles/main.scss";

interface Profile {
  name: string;
  login: string;
  avatar_url: string;
  created_at: Date;
  public_repos: number;
  followers: number;
  following: number;
  blog: string;
  twitter_username: string;
  company: string;
  location: string;
}

export default defineComponent({
  name: "App",
  components: {
    Header,
    SearchInput,
    ProfileCard,
  },
  data() {
    return {
      username: "",
      loading: false,
      error: "",
      profile: {
        name: "",
        login: "",
        avatar_url: "",
        created_at: new Date(),
        public_repos: 0,
        followers: 0,
        following: 0,
        blog: "",
        twitter_username: "",
        company: "",
        location: "",
      } as Profile,
    };
  },
  methods: {
    updateUsername(e: Event) {
      this.username = (e.target as HTMLInputElement).value;
    },
    fetchUserProfile() {
      this.loading = true;

      axios
        .get(`https://api.github.com/users/${this.username}`)
        .then((data) => {
          this.profile = data.data as Profile;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
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

.loader {
  margin-top: 24px;
  text-align: center;
}
</style>
