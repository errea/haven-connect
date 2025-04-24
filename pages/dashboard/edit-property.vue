<template>
    <div class="max-w-3xl mx-auto py-10 px-4">
      <h2 class="text-2xl font-bold mb-6">Edit Property</h2>
      <form @submit.prevent="updateProperty" class="grid gap-5">
        <input v-model="form.title" type="text" placeholder="Title" class="border p-3 rounded-xl" />
        <input v-model="form.location" type="text" placeholder="Location" class="border p-3 rounded-xl" />
        <input v-model="form.price" type="number" placeholder="Price" class="border p-3 rounded-xl" />
        <textarea v-model="form.description" rows="4" placeholder="Description" class="border p-3 rounded-xl"></textarea>
        <input v-model="form.imageUrl" type="text" placeholder="Image URL" class="border p-3 rounded-xl" />
        <button class="bg-blue-600 text-white py-2 px-6 rounded-xl">Update</button>
      </form>
    </div>
  </template>
  
  <script setup>
  const route = useRoute()
  const router = useRouter()
  const { $supabase } = useNuxtApp()
  
  const form = reactive({ title: '', location: '', price: '', description: '', imageUrl: '' })
  
  onMounted(async () => {
    const id = route.query.id
    const { data } = await $supabase.from('properties').select('*').eq('id', id).single()
    if (data) {
      Object.assign(form, {
        title: data.title,
        location: data.location,
        price: data.price,
        description: data.description,
        imageUrl: data.images?.[0] || ''
      })
    }
  })
  
  const updateProperty = async () => {
    const { error } = await $supabase.from('properties').update({
      title: form.title,
      location: form.location,
      price: form.price,
      description: form.description,
      images: [form.imageUrl],
    }).eq('id', route.query.id)
  
    if (!error) {
      alert('Property updated!')
      router.push('/dashboard')
    }
  }
  </script>