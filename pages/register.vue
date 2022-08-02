<template>
  <div class="container flex flex-col px-4 py-8 mx-auto justify-evenly">
    <Title>Register | {{ title }}</Title>
    <InputValidationErrors :errors="errors" />
    <form action="#" class="space-y-6" @submit.prevent="register">
      <FormRegister 
        v-model:name="name"
        v-model:email="email"
        v-model:mobile="mobile"
        v-model:password="password"
        v-model:passwordConfirm="passwordConfirm"
        :errors="errors"
      />

      <div>
              <button :disabled="isLoading" class="inline-flex items-center justify-center w-full px-2 py-3 leading-6 bg-gradient-to-b from-gray-600 to-black rounded-xl">
          <p class="text-base font-semibold text-white">Register</p> 
          <svg v-if="isLoading" class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth',
  middleware: ['guest'],
})
const title = useState('title')

const router = useRouter()

const name = ref('')
const email = ref('')
const mobile = ref('')
const password = ref('')
const passwordConfirm = ref('')
const isLoading = ref(false)
const errors = ref([])

const { $apiFetch } = useNuxtApp()

function csrf() {
  return $apiFetch('/sanctum/csrf-cookie')
}

async function register() {
  await csrf()

  isLoading.value = true

  try {
    await $apiFetch('/api/user/signup', {
      method: 'POST',
      body: {
        first_name: name.value,
        last_name: name.value,
        email: email.value,
        mobile: mobile.value,
        password: password.value,
        password_confirmation: passwordConfirm.value,

        device_type: 'android',
        device_token: mobile.value,
        device_id: mobile.value,
        login_by: 'manual',
        country_code: '+91'
      },
    })

    const user = await $apiFetch('/api/user/user')
    console.log(user);
    const { setUser } = useAuth()
    setUser(user.name)

    alert('Registered')
    // router.push('/my-info')
    window.location.pathname = '/my-info'
  } catch (err) {
    console.log(err.data)
    //errors.value = Object.values(err.data.errors).flat()
        errors.value = Object.entries(err.data.errors).map(([name, value]) => ({
      name,
      value,
    })) //Object.values(err.data.errors)
  }

  isLoading.value = false
}
</script>
