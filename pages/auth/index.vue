<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
      <div class="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 space-y-6">
        <div class="text-center">
          <h1 class="text-2xl font-bold text-gray-800">{{ isSignup ? 'Create Account' : 'Welcome Back' }}</h1>
          <p class="text-gray-500 text-sm">
            {{ isSignup ? 'Sign up to manage your listings or book a stay.' : 'Login to your dashboard or book your trip.' }}
          </p>
        </div>
  
        <!-- Auth Form -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-600">Email</label>
            <input v-model="form.email" type="email" required class="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-600">Password</label>
            <input v-model="form.password" type="password" required class="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
            {{ isSignup ? 'Sign Up' : 'Login' }}
          </button>
        </form>
  
        <p class="text-center text-sm text-gray-500">
          {{ isSignup ? 'Already have an account?' : 'No account yet?' }}
          <button class="text-blue-600 font-semibold ml-1" @click="isSignup = !isSignup">
            {{ isSignup ? 'Login' : 'Sign up' }}
          </button>
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const isSignup = ref(false)
  const form = ref({
    email: '',
    password: '',
  })
  
  const { $supabase } = useNuxtApp()

const handleSubmit = async () => {
  let result
  if (isSignup.value) {
    result = await $supabase.auth.signUp({
      email: form.value.email,
      password: form.value.password,
    })
  } else {
    result = await $supabase.auth.signInWithPassword({
      email: form.value.email,
      password: form.value.password,
    })
  }

  if (result.error) {
    alert(result.error.message)
  } else {
    console.log('Auth success:', result)
    navigateTo('/dashboard') // or use role-based route
  }
}
  </script>