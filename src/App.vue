<template>
  <div>
    <h1>Hello App!</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'home'}">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'foo'}">Foo</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'bar'}">Bar</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'users.show', params: { id: 1 }}">User 1</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'users.show', params: { id: 2 }}">User 2</router-link>
      </li>
    </ul>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
};
</script>

<style src="./css/tailwind.css">
ul li{
  display: inline-block;
  padding: 0 5px;
}
ul li a{
  display: inline-block;
  border: 1px solid;
  text-decoration: none;
  padding: 5px 10px;
}
</style>
