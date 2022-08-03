<template>
  <div class="container w-full px-2 py-8 mx-auto space-y-8 divide-y divide-gray-300">
    <!-- <PostItem v-for="post in posts" :key="post.id" :post="post" /> -->
  <div class="flex items-center justify-center h-screen">
    
	<button @click="setnotification()" class="p-10 font-bold text-white bg-indigo-800 border rounded-lg shadow-lg">
		first sound
	</button>
		<button @click="setnotification2()" class="p-10 font-bold text-white bg-indigo-800 border rounded-lg shadow-lg">
		second sound
	</button>
  </div>

  </div>
</template>

<script lang="ts" setup>
// const nuxtApp = useNuxtApp()
// const { data: posts } = await useFetch('/api/posts', {
//   baseURL: 'http://localhost:8000',
// })

onBeforeMount(async() => {
  await notificaton.registerLocalNotifications().then((result) => {
    notificaton.addLocalNotificationListeners()
  }).catch((res)=>{console.log(res);
  })
})
const notificaton = useLocalNotification()

async function setnotification() {
  notificaton.sendLocal("test","sound 1",345)
}
async function setnotification2() {
  notificaton.sendLocal2("test","sound 2",345)
}
</script>
