<template>
    <div class="max-w-xl mx-auto p-8">
        <h2 class="text-2xl font-bold mb-4">Complete Your Profile</h2>
        <form @submit.prevent="submitProfile" class="space-y-4">
            <input v-model="name" type="text" placeholder="Your full name" class="w-full border p-3 rounded-xl" />
            <button class="w-full bg-blue-600 text-white py-2 rounded-xl">Save</button>
        </form>
    </div>ß
</template>

<script setup>
const { $supabase } = useNuxtApp()
const user = useSupabaseUser()
const name = ref('')

const submitProfile = async () => {
    const { data, error } = await $supabase
        .from('landlords')
        .insert({ id: user.value.id, name: name.value, profile_complete: true })

    if (error) console.error(error)
    else navigateTo('/dashboard')
}
</script>