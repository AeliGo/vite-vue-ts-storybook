<script setup lang="ts">
import BIcon from "./components/Icon/Icon.vue";
</script>

<template>
  <div>
    <h2>MDI</h2>

    <section>
      <div class="block">
        <b-icon icon="account" size="is-small"> </b-icon>
        <b-icon icon="home" size="is-small"> </b-icon>
        <b-icon icon="view-dashboard" size="is-small"> </b-icon>
      </div>

      <div class="block">
        <b-icon icon="account"></b-icon>
        <b-icon icon="home"></b-icon>
        <b-icon icon="view-dashboard"></b-icon>
      </div>

      <div class="block">
        <b-icon icon="account" size="is-medium"> </b-icon>
        <b-icon icon="home" size="is-medium"> </b-icon>
        <b-icon icon="view-dashboard" size="is-medium"> </b-icon>
      </div>

      <div class="block">
        <b-icon icon="account" size="is-large" type="is-success"> </b-icon>
        <b-icon icon="home" size="is-large" type="is-info"> </b-icon>
        <b-icon icon="view-dashboard" size="is-large" type="is-primary">
        </b-icon>
      </div>
    </section>

    <h2>FontAwesome</h2>

    <section>
      <div class="block">
        <b-icon pack="fas" icon="user" size="is-small"> </b-icon>
        <b-icon pack="fas" icon="home" size="is-small"> </b-icon>
        <b-icon pack="fas" icon="tachometer-alt" size="is-small"> </b-icon>
      </div>

      <div class="block">
        <b-icon pack="fas" icon="user"> </b-icon>
        <b-icon pack="fas" icon="home"> </b-icon>
        <b-icon pack="fas" icon="tachometer-alt"> </b-icon>
      </div>

      <div class="block">
        <b-icon pack="fas" icon="user" size="is-medium"> </b-icon>
        <b-icon pack="fas" icon="home" size="is-medium"> </b-icon>
        <b-icon pack="fas" icon="tachometer-alt" size="is-medium"> </b-icon>
      </div>

      <div class="block">
        <b-icon pack="fas" icon="user" size="is-large" type="is-success">
        </b-icon>
        <b-icon pack="fas" icon="home" size="is-large" type="is-info"> </b-icon>
        <b-icon
          pack="fas"
          icon="tachometer-alt"
          size="is-large"
          type="is-primary"
        >
        </b-icon>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
body {
  background-color: color(light);
  color: color(dark);

  @media (prefers-color-scheme: dark) {
    background-color: color(dark);
    color: color(light);
  }
}

#app {
  text-align: center;
  margin-top: 60px;
}
</style>
