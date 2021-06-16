<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
:root {
  --primaryColor: #0061a7;
}

.bgPrimary {
  background: var(--primaryColor);
}

body {
  background: #fafafa !important;
}

input:focus,
select:focus {
  box-shadow: none !important;
  outline: none !important;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--primaryColor);
}
</style>
