<template>
  <div class="profile">
    <h1>PROFILE</h1>

    <img alt="Vue logo" src="../assets/logo.png" />

    <button @click="handleDecCount">
      <b>Minus -</b>
    </button>
    <button @click="handleIncCount">
      <b>Plus +</b>
    </button>
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
