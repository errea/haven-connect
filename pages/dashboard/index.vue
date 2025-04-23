<template>
    <div class="min-h-screen bg-gray-50 py-10 px-6">
      <!-- Dashboard Header -->
      <h1 class="text-3xl font-bold text-gray-800 mb-8">Landlord Dashboard</h1>
  
      <!-- Metrics Summary -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div class="bg-white rounded-xl p-6 shadow-md">
          <h2 class="text-sm text-gray-500 mb-2">Total Listings</h2>
          <p class="text-2xl font-bold text-blue-600">{{ metrics.listings }}</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-md">
          <h2 class="text-sm text-gray-500 mb-2">Total Bookings</h2>
          <p class="text-2xl font-bold text-blue-600">{{ metrics.bookings }}</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-md">
          <h2 class="text-sm text-gray-500 mb-2">Earnings This Month</h2>
          <p class="text-2xl font-bold text-blue-600">${{ metrics.earnings }}</p>
        </div>
      </div>
  
      <!-- Recent Bookings Table -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Recent Bookings</h2>
        <table class="w-full text-sm text-left text-gray-600">
          <thead>
            <tr class="text-gray-500 border-b">
              <th class="py-2">Guest</th>
              <th class="py-2">Property</th>
              <th class="py-2">Check-in</th>
              <th class="py-2">Check-out</th>
              <th class="py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="booking in bookings" :key="booking.id" class="border-b hover:bg-gray-50">
              <td class="py-2">{{ booking.guest }}</td>
              <td class="py-2">{{ booking.property }}</td>
              <td class="py-2">{{ booking.checkIn }}</td>
              <td class="py-2">{{ booking.checkOut }}</td>
              <td class="py-2 text-right">${{ booking.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <NuxtLink
          to="/dashboard/add-listing"
          class="bg-blue-600 text-white px-6 py-3 rounded-xl text-center hover:bg-blue-700 transition"
        >
          Add New Listing
        </NuxtLink>
        <NuxtLink
          to="/dashboard/payouts"
          class="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-xl text-center hover:bg-blue-50 transition"
        >
          View Payouts
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  const metrics = {
    listings: 4,
    bookings: 27,
    earnings: 1250,
  }
  
  const bookings = [
    {
      id: 1,
      guest: 'Sarah J.',
      property: 'Modern Villa',
      checkIn: 'Apr 20',
      checkOut: 'Apr 23',
      amount: 360,
    },
    {
      id: 2,
      guest: 'Michael B.',
      property: 'Cozy Studio',
      checkIn: 'Apr 18',
      checkOut: 'Apr 21',
      amount: 180,
    },
    {
      id: 3,
      guest: 'Anita W.',
      property: 'Beachfront Bungalow',
      checkIn: 'Apr 22',
      checkOut: 'Apr 26',
      amount: 440,
    },
  ]
  </script>