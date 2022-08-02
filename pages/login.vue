<template>
  <div class="container flex flex-col px-4 py-8 mx-auto justify-evenly">
    <Title>Login | {{ title }}</Title>
    <div class="flex flex-col space-y-3.5 items-center justify-center h-20">
      <p class="text-2xl font-semibold text-center text-gray-900">
        Login to your account
      </p>
      <p class="text-xs text-center text-gray-900">
        Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Fames
        velit
      </p>
    </div>
    <InputValidationErrors :errors="errors" />
    <!-- <ul
      v-if="errors.length > 0"
      className="mb-4 list-disc list-inside text-sm text-red-600"
    >
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul> -->
    <form action="#" class="space-y-6" @submit.prevent="login">
      <FormLogin
        v-model:email="email"
        v-model:password="password"
        :errors="errors"
      />
      <div>
        <button :disabled="isLoading" class="inline-flex items-center justify-center w-full px-2 py-3 leading-6 bg-gradient-to-b from-gray-600 to-black rounded-xl">
          <p class="text-base font-semibold text-white">Login</p> 
          <svg v-if="isLoading" class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </button>
      </div>
    </form>
    <div class="flex flex-col items-center mt-20 space-y-6">
      <div
        class="inline-flex flex-row space-x-2.5 items-center justify-center w-full h-4"
      >
        <div class="h-0.5 border-gray-300" />
        <p class="text-xs text-center text-gray-900">Or continue with</p>
        <div class="h-0.5 border-gray-300" />
      </div>
      <div class="inline-flex items-center justify-end w-full h-12 space-x-4">
        <div
          class="flex space-x-2.5 items-center justify-center w-full h-full p-4 bg-gray-100 border rounded-lg"
        >
          <img class="w-1/4 h-8" src="https://via.placeholder.com/32x32" />
          <p class="text-sm">Facebook</p>
        </div>
        <div
          class="flex space-x-2.5 items-center justify-center w-full h-full p-4 bg-gray-100 border rounded-lg"
        >
          <img class="w-1/4 h-8" src="https://via.placeholder.com/32x32" />
          <p class="text-sm">Google</p>
        </div>
      </div>
      <div class="w-full h-4">
        <p class="text-xs text-center">Already have an account? Sign in</p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth',
  middleware: ['guest'],
})
const title = useState('title')

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errors = ref([])

const { $apiFetch } = useNuxtApp()

function csrf() {
  return $apiFetch('/sanctum/csrf-cookie')
}

async function login() {
  await csrf()

  isLoading.value = true

  try {
    await $apiFetch('/api/user/oauth/token', {
      method: 'POST',
      body: {
        username: email.value,
        device_type: 'android',
        device_token: email.value,
        device_id: email.value,
        password: password.value,
      },
    })

    const user = await $apiFetch('/api/user/user')

    // router.push('/my-info')
    const { setUser } = useAuth()
    setUser(user.name)
    window.location.pathname = '/my-info'
  } catch (err) {
    console.log(err.data)
    errors.value = Object.entries(err.data.errors).map(([name, value]) => ({
      name,
      value,
    })) //Object.values(err.data.errors)
  }

  isLoading.value = false
}
</script>
