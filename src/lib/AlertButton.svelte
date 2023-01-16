<!-- 4) Using Counter.svelte as an inspiration, 
    create a new component, AlertButton.svelte, that is a 
    button that when you click it, it alerts a message to the page. 
    Add AlertButton to your App.svelte page so you can use it! -->
<script lang="ts">
const redalert = () => alert(`WTF`)
</script>
<button on:click ={redalert}>
Click Me
</button>
