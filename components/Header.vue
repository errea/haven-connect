<template>
    <header class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <NuxtLink to="/" class="text-3xl font-bold text-yellow-600">HavenConnect</NuxtLink>
            <nav class="space-x-6 hidden md:block">
                <NuxtLink to="/listings" class="text-gray-700 hover:text-yellow-600">Browse</NuxtLink>
                <NuxtLink to="/explore" class="text-gray-700 hover:text-yellow-600">Explore</NuxtLink>
                <NuxtLink to="/details" class="text-gray-700 hover:text-yellow-600">Available Properties</NuxtLink>
                <NuxtLink to="/auth" class="text-gray-700 hover:text-yellow-600">Login</NuxtLink>
            </nav>
            <div class="flex items-center space-x-4">
                <NuxtLink to="/auth" class="text-sm text-gray-700 hover:text-yellow-600">Login</NuxtLink>
                <NuxtLink to="/auth"
                    class="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-800 text-sm transition">
                    Sign Up
                </NuxtLink>
            </div>
        </div>
    </header>
</template>

<script setup>
// No script needed for this header component
</script>