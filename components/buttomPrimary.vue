<template>
    <button class="inline-flex items-center justify-center w-full px-2 py-3 bg-gradient-to-b from-gray-600 to-black rounded-xl">
        <p class="text-base font-semibold text-white">{{srText}}</p>
    </button>
</template>

<script>
export default {
    props: ['srText']
}
</script>
