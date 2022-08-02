<template>
    <nav class="px-6 py-6 text-lg bg-white shadow">
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
</template>

<script setup>
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