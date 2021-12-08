<template>
    <button :style="{bacground: color}" class='btn'>{{ text }}</button>
</template>

<script>


export default{
    name: 'Button',
    props: {
        text: String,
        color: String,
    }
}
</script>
