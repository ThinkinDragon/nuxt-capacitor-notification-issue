<template>
  <div class="container w-full px-2 py-8 mx-auto space-y-8 divide-y divide-gray-300">
    <!-- <PostItem v-for="post in posts" :key="post.id" :post="post" /> -->
  <div class="flex items-center justify-center h-screen">
    
	<button @click="setnotification()" class="p-10 font-bold text-white bg-indigo-800 border rounded-lg shadow-lg">
		button
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
  notificaton.sendLocal("test","test",345)
}
</script>
