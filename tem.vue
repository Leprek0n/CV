<template>
    <button text="Add task" color="green"></button>
</template>

<script>
import Button from './Button'

export default{
    name: 'Header',
    props: {
        title: String,
    },
    components: {
        Button,
    }
}
</script>
