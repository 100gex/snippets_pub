<!-- Code tested in App.vue on Vuew playground: https://sfc.vuejs.org/ -->
<script>
export default {
    data() {
        return {
            items: [{ message: 'Foo' }, { message: 'Bar' }]
        }
    },
    methods: {
        mutate() {
            this.items[0].message += 's'
        }
    }
}
</script>

<template>
    <li v-for="(item, index) in items">{{ index }} - {{ item.message }}</li>
    <button @click="mutate">mutate</button>
</template>