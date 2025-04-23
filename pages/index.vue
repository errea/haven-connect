<template>
    <div class="min-h-screen bg-white text-gray-800 font-sans">
      <!-- Hero Section -->
      <section class="px-6 py-20 text-center bg-gradient-to-br from-blue-100 to-purple-100">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
        <p class="text-lg md:text-xl mb-6 text-gray-700">Connecting guests to homes. Hassle-free, every time.</p>
  
        <div class="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search location..."
            class="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm"
          />
          <button class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </section>
  
      <!-- How It Works -->
      <section class="px-6 py-16 text-center">
        <h2 class="text-2xl font-bold mb-8">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-semibold">1. Browse</h3>
            <p class="text-gray-600">Explore listings in your ideal location with real reviews and photos.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold">2. Book</h3>
            <p class="text-gray-600">Select your dates and reserve instantly with flexible options.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold">3. Enjoy</h3>
            <p class="text-gray-600">Move in, check-in, relax. We handle the rest between you and the host.</p>
          </div>
        </div>
      </section>
  
      <!-- Benefits Section -->
      <section class="bg-gray-50 px-6 py-16 text-center">
        <h2 class="text-2xl font-bold mb-8">Why Choose HavenConnect Co.?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h3 class="font-semibold text-lg mb-2">Trusted Listings</h3>
            <p class="text-gray-600">Every listing is verified for quality, cleanliness, and accuracy.</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h3 class="font-semibold text-lg mb-2">Reliable Support</h3>
            <p class="text-gray-600">Our support team is available 24/7 to help you with your bookings.</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h3 class="font-semibold text-lg mb-2">Secure Transactions</h3>
            <p class="text-gray-600">Payments are handled safely with transparency on both ends.</p>
          </div>
        </div>
      </section>
  
      <!-- CTA -->
      <section class="px-6 py-16 text-center bg-gradient-to-br from-blue-100 to-purple-100">
        <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p class="text-lg text-gray-700 mb-6">Whether you're hosting or booking, HavenConnect makes it easy.</p>
        <div class="flex justify-center gap-4 flex-wrap">
          <NuxtLink to="/auth/signup" class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            I'm a Guest
          </NuxtLink>
          <NuxtLink to="/onboard" class="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
            I'm a Landlord
          </NuxtLink>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="px-6 py-8 text-center text-sm text-gray-500">
        © 2025 HavenConnect Co. · All rights reserved.
      </footer>
    </div>
  </template>


<script setup>

</script>