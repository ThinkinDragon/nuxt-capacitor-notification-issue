<template>
  <div class="inline-flex flex-col w-full">
    <h5 class="text-xl font-bold">{{ servic.name['en'] }}</h5>
    <div class="grid grid-flow-col grid-rows-2 gap-4 overflow-x-scroll">
      <div
        v-for="service in servic.children_recursive"
        :key="service"
        class="relative block w-40 h-40 overflow-hidden bg-center bg-no-repeat bg-cover rounded-2xl"
        :style="{ backgroundImage: 'url(' + service.image + ')' }"
      >
        <NuxtLink :to="`/services/${service.id}`">
          <span
            class="absolute inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-black rounded-full right-4 top-4"
          >
            {{ service.price }}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1.5 text-yellow-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </span>

          <div class="relative p-8 pt-16 text-white bg-black bg-opacity-40">
            <h5 class="text-2xl font-bold">{{ service.name['en'] }}</h5>

            <p class="text-sm">{{ service.name['en'] }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { format } from 'date-fns'

const props = defineProps({
  servic: Object,
})
</script>
