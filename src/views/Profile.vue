<template>
  <div class="profile">
    <h1>PROFILE asdfa sfsfsfsfs 123123123 rrrasds</h1>
    {{ $store.state.countModule.count }}

    <img alt="Vue logo" src="../assets/logo.png" />

    <button @click="handleDecCount">
      <b>Minus -</b>
    </button>
    <button @click="handleIncCount">
      <b>Plus +</b>
    </button>

    <router-link to="/profile/new">Go to profie new</router-link>
  </div>
</template>

<script>
export default {
  name: "Profile",
  methods: {
    handleIncCount() {
      this.$store.commit("incCount");
    },
    handleDecCount() {
      this.$store.commit("decCount");
    }
  }
};
</script>
