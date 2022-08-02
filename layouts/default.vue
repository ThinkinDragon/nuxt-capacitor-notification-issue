<template>
  <div class="min-h-screen text-gray-900 bg-gray-100">
    <Title>{{ title }}</Title>

		<div>
    <slot/>

    <!-- <nav class="px-6 py-6 text-lg bg-white shadow">
      <div class="container flex items-center justify-between px-6 mx-auto">
        <div>
          <NuxtLink to="/">Logo</NuxtLink>
        </div>
        <div>
          <ClientOnly>
            <ul class="flex space-x-12">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li v-if="!isLoggedIn"><NuxtLink to="/login">Login</NuxtLink></li>
              <li v-if="!isLoggedIn">
                <NuxtLink to="/register">Register</NuxtLink>
              </li>
              <li v-if="isLoggedIn">
                <NuxtLink to="/my-info">My Info</NuxtLink>
              </li>
              <li v-if="isLoggedIn">
                <NuxtLink to="/create">Create</NuxtLink>
              </li>
              <li><NuxtLink to="/about">About</NuxtLink></li>
              <li><NuxtLink to="/contact">Contact</NuxtLink></li>
              <li v-if="isLoggedIn">
                <a href="#" @click.prevent="logout">Logout</a>
              </li>
              <li>{{ getUser()?.name }}</li>
            </ul>
          </ClientOnly>
        </div>
      </div>
    </nav>
    <slot /> -->
  </div>
  </div>
</template>

<script setup>
const title = useState('title', () => 'Nuxt 3 Blog')
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
