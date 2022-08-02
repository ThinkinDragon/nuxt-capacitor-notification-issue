<template>
  <div class="flex flex-col items-start justify-between w-full">
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
      <InputLabel for="password" value="Password" />
      <InputText
        class="w-full" type="password"
        @input="$emit('update:password', $event.target.value)"
        :value="password"
        id="password"
      />
    </div>

  </div>
</template>

<script setup>
 defineProps ({
    email: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
    errors:{
      type: Array,
    }
  })
</script>