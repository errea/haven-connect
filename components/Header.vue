<template>
    <header class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-blue-600">HavenConnect</NuxtLink>
        <nav class="space-x-6 hidden md:block">
          <NuxtLink to="/listings" class="text-gray-700 hover:text-blue-600">Browse</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-blue-600">About</NuxtLink>
          <NuxtLink to="/dashboard" class="text-gray-700 hover:text-blue-600">Dashboard</NuxtLink>
        </nav>
        <div class="flex items-center space-x-4">
          <NuxtLink to="/auth/login" class="text-sm text-gray-700 hover:text-blue-600">Login</NuxtLink>
          <NuxtLink
            to="/auth/signup"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition"
          >
            Sign Up
          </NuxtLink>
        </div>
      </div>
    </header>
  </template>

  <script setup>
    // No script needed for this header component
    </script>