<template>
    <div class="min-h-screen bg-gray-50 p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Booking Calendar</h1>
  
      <div class="bg-white rounded-xl p-4 shadow-md">
        <FullCalendar :options="calendarOptions" />
      </div>
    </div>
  </template>
  
  <script setup>
  import FullCalendar from '@fullcalendar/vue3'
  // import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'
  
  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'prev,next today',
      center: 'title',
      end: '',
    },
    events: [
      {
        title: 'Michael - Cozy Studio',
        start: '2025-04-26',
        end: '2025-04-28',
      },
      {
        title: 'Anita - Bungalow',
        start: '2025-04-29',
        end: '2025-05-02',
      },
    ],
  }
  </script>
  
  <style>
  /* @import "@fullcalendar/daygrid/main.css"; */
  </style>