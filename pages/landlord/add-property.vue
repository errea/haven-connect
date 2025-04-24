<template>
    <div class="max-w-3xl mx-auto py-10 px-4">
        <h2 class="text-2xl font-bold mb-6">Add New Property</h2>
        <form @submit.prevent="submitProperty" class="grid gap-5">
            <input v-model="title" type="text" placeholder="Property Title" class="border rounded-xl p-3" />
            <input v-model="location" type="text" placeholder="Location" class="border rounded-xl p-3" />
            <input v-model="price" type="number" placeholder="Price per night" class="border rounded-xl p-3" />
            <textarea v-model="description" rows="4" placeholder="Description" class="border rounded-xl p-3"></textarea>
            <input v-model="imageUrl" type="text" placeholder="Image URL" class="border rounded-xl p-3" />
            <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded-xl">Create Property</button>
        </form>
    </div>
</template>

<script setup>
const { $supabase } = useNuxtApp()
const user = useSupabaseUser()

const title = ref('')
const location = ref('')
const price = ref('')
const description = ref('')
const imageUrl = ref('')

const submitProperty = async () => {
    const { data, error } = await $supabase.from('properties').insert([
        {
            landlord_id: user.value.id,
            title: title.value,
            location: location.value,
            price: price.value,
            description: description.value,
            images: [imageUrl.value],
        },
    ])
    if (error) {
        console.error(error)
        alert('Error creating property')
    } else {
        alert('Property created successfully!')
        navigateTo('/dashboard')
    }
}
</script>