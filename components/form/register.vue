<template>
  <div class="flex flex-col items-start justify-between w-full">
      <div class="relative w-full mt-4">
      <InputLabel for="Name" value="Name" />
      <InputText
        class="w-full"
        @input="$emit('update:name', $event.target.value)"
        :value="name"
        id="name"
      />
    </div>
    <div class="relative w-full mt-4">
      <InputLabel for="Email" value="email" />
      <InputText
        class="w-full" 
        @input="$emit('update:email', $event.target.value)"
        :value="email"
        id="email"
      />
    </div>
        <div class="relative w-full mt-4">
      <InputLabel for="mobile" value="mobile" />
      <InputText type="mobile"
        class="w-full"
        @input="$emit('update:mobile', $event.target.value)"
        :value="mobile"
        id="mobile"
      />
    </div>
    <div class="relative w-full mt-4">
      <InputLabel for="password" value="Password" />
      <InputText
        class="w-full" type="password"
        @input="$emit('update:password', $event.target.value)"
        :value="password"
        id="password"
      />
    </div>
    <div class="relative w-full mt-4">
      <InputLabel for="passwordConfirm" value="Password Confirm" />
      <InputText
        class="w-full" type="password"
        @input="$emit('update:passwordConfirm', $event.target.value)"
        :value="passwordConfirm"
        id="passwordConfirm"
      />
    </div>
  </div>
</template>

<script setup>
 defineProps ({
       mobile: {
      type: String,
      default: '',
    },
        name: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
    passwordConfirm: {
      type: String,
      default: '',
    },
    errors:{
      type: Array,
    }
  })
</script>