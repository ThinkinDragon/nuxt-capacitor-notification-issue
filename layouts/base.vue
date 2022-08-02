<template>
  <div class="min-h-screen text-gray-900 bg-gray-100">
    <Title>{{ title }}</Title>
    <MainNav/>
<div class="relative flex flex-col items-center min-h-[90vh] sm:flex-row main sm:bg-no-repeat sm:justify-center sm:px-4 sm:py-12 sm:bg-cover md:px-6 lg:px-24">

	<div class="flex-1 hidden sm:flex md:w-auto"></div>
	<div
		class="z-10 w-full mr-28 space-y-3 overflow-y-scroll bg-white border-8 shadow-2xl h-[80vh] sm:border-gray-800 sm:w-6/12 lg:w-1/4 rounded-3xl">
      <MainMobileNav/>
    <slot>
		<div class="z-0 p-3 space-y-4 ">
			<h4 class="mt-2 font-semibold">Category</h4>
			<div class="flex items-center justify-between space-x-3 overflow-y-scroll text-gray-500 cursor-pointer">
				<div
					class="flex flex-col items-center justify-center w-20 h-20 p-1 mb-2 text-green-600 transition duration-300 ease-in bg-white bg-green-200 shadow cursor-pointer rounded-2xl hover:shadow-md">
					<i class="far fa-hotel"></i>
					<p class="mt-1 text-sm">Hotel</p>
				</div>
				<div
					class="flex flex-col items-center justify-center w-20 h-20 p-1 mb-2 text-yellow-600 transition duration-300 ease-in bg-white bg-yellow-200 shadow cursor-pointer rounded-2xl hover:shadow-md">
					<i class="far fa-bus"></i>
					<p class="mt-1 text-sm">Bus</p>
				</div>

				<div
					class="flex flex-col items-center justify-center w-20 h-20 p-1 mb-2 text-indigo-500 transition duration-300 ease-in bg-white bg-indigo-200 shadow cursor-pointer rounded-2xl hover:shadow-md">
					<i class="far fa-mountains"></i>
					<p class="mt-1 text-sm">Hills</p>
				</div>
				<div
					class="flex flex-col items-center justify-center w-20 h-20 p-1 mb-2 text-pink-500 transition duration-300 ease-in bg-white bg-pink-200 shadow cursor-pointer rounded-2xl hover:shadow-md">
					<i class="far fa-umbrella-beach"></i>
					<p class="mt-1 text-sm">Beach</p>
				</div>
			</div>
			<h4 class="font-semibold">Recomented Hotels</h4>
			<div class="flex grid items-center justify-center w-full grid-cols-2 m-0 space-x-4 overflow-y-scroll ">
				<div class="relative flex flex-col justify-between object-cover object-center w-full h-64 my-2 overflow-hidden text-gray-800 bg-white bg-cover rounded-lg shadow-md cursor-pointer rounded-3xl"
					style="background-image:url('https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80')">
					<div class="absolute inset-0 z-0 opacity-50 bg-gradient-to-t from-green-400 to-blue-400"></div>
					<div class="relative flex flex-row items-end w-full h-72 ">
						<div class="absolute top-0 right-0 m-2">
							<svg xmlns="http://www.w3.org/2000/svg"
								class="p-2 text-gray-200 transition duration-200 ease-in rounded-full h-9 w-9 hover:text-blue-400 hover:bg-white "
								fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
							</svg>
						</div>
						<div class="z-10 flex flex-col w-full p-6 rounded-lg ">
							<h4 class="mt-1 text-xl font-semibold leading-tight text-white truncate">Loremipsum..
							</h4>
							<div class="flex items-center justify-between ">
								<div class="flex flex-col">
									<h2 class="flex items-center text-sm font-normal text-gray-300">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none"
											viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
											</path>
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
										</svg>
										Dubai
									</h2>
								</div>
							</div>
							<div class="flex pt-4 text-sm text-gray-300">
								<div class="flex items-center mr-auto">
									<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1 text-yellow-500"
										viewBox="0 0 20 20" fill="currentColor">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
										</path>
									</svg>
									<p class="font-normal">4.5</p>
								</div>
								<div class="flex items-center font-medium text-white ">
									$1800
									<span class="text-sm font-normal text-gray-300"> /wk</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="relative flex flex-col justify-between object-cover object-center w-full h-64 my-2 overflow-hidden text-gray-800 bg-white bg-cover rounded-lg shadow-md cursor-pointer rounded-3xl"
					style="background-image:url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80')">
					<div class="absolute inset-0 z-0 opacity-50 bg-gradient-to-t from-blue-500 to-yellow-400"></div>
					<div class="relative flex flex-row items-end w-full h-72 ">
						<div class="absolute top-0 right-0 m-2">
							<svg xmlns="http://www.w3.org/2000/svg"
								class="p-2 text-gray-200 transition duration-200 ease-in rounded-full h-9 w-9 hover:text-blue-400 hover:bg-white "
								fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
							</svg>
						</div>
						<div class="z-10 flex flex-col w-full p-5 rounded-lg ">
							<h4 class="mt-1 text-xl font-semibold leading-tight text-white truncate">Loremipsum..
							</h4>
							<div class="flex items-center justify-between ">
								<div class="flex flex-col">
									<h2 class="flex items-center text-sm font-normal text-gray-300">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none"
											viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
											</path>
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
										</svg>
										India
									</h2>
								</div>
							</div>
							<div class="flex pt-4 text-sm text-gray-300">
								<div class="flex items-center mr-auto">
									<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1 text-yellow-500"
										viewBox="0 0 20 20" fill="currentColor">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
										</path>
									</svg>
									<p class="font-normal">4.5</p>
								</div>
								<div class="flex items-center font-medium text-white ">
									$1800
									<span class="text-sm font-normal text-gray-300"> /wk</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h4 class="font-semibold">Suggested By</h4>
			<div class="grid grid-cols-1">
				<div class="">
					<div class="flex p-2 bg-white shadow-md rounded-2xl">
						<img src="https://images.unsplash.com/photo-1439130490301-25e322d88054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                                alt="Just a flower" class="object-cover w-16 h-16 rounded-xl">
						<div class="flex flex-col justify-center w-full px-2 py-1">
							<div class="flex items-center justify-between ">
								<div class="flex flex-col">
									<h2 class="text-sm font-medium">Massive Dynamic</h2>
								</div>
								<svg xmlns="http://www.w3.org/2000/svg"
									class="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-400" fill="none"
									viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
								</svg>
							</div>
							<div class="flex pt-2 text-sm text-gray-400">
								<div class="flex items-center mr-auto">
									<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1 text-yellow-500"
										viewBox="0 0 20 20" fill="currentColor">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
										</path>
									</svg>
									<p class="font-normal">4.5</p>
								</div>
								<div class="flex items-center font-medium text-gray-900 ">
									$1800
									<span class="text-sm font-normal text-gray-400"> /wk</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</slot>

	</div>

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
