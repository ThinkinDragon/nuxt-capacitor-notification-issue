<template>
  <div class="min-h-screen text-gray-900 bg-gray-100">
    <Title>{{ title }}</Title>
    <MainNav />
    <div
      class="relative flex flex-col items-center min-h-[90vh] sm:flex-row main sm:bg-no-repeat sm:justify-center sm:px-4 sm:py-12 sm:bg-cover md:px-6 lg:px-24"
    >
      <div class="flex-1 hidden sm:flex md:w-auto"></div>
      <div
        class="z-10 w-full mr-28 space-y-3 overflow-y-scroll bg-white border-8 shadow-2xl h-[80vh] sm:border-gray-800 sm:w-6/12 lg:w-1/4 rounded-3xl"
      >
        <MainMobileNav />
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = useTitle()
const { $apiFetch } = useNuxtApp()
const { removeUser, isLoggedIn, getUser } = useAuth()

async function logout() {
  try {
    await $apiFetch('/logout', {
      method: 'POST',
    })
  } catch (err) {
    console.log(err.data)
  } finally {
    removeUser()
    window.location.pathname = '/'
  }
}
</script>

<style>
.router-link-active {
  font-weight: bold;
}
.main {
  background-image: url(https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
}
::-webkit-scrollbar {
  width: 0;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
  outline: 1px solid transparent;
}
</style>
