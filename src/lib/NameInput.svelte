<!-- 5) Create a new component, NameInput.svelte. 
    This component should have a text input that, 
    when you type in it, it changes the value of name variable. 
    This componetn should also have a header tag where 
    the name variable is displayed. So, as you type in the input, 
    the name displayed to the page in the header changes! -->
    <script lang="ts">
   var variable ="yo there We Go"
   const newHead = (event) =>{
    variable = event.target.value;
   }
      </script>
    <h1>{variable}</h1>
    <!-- <input type="text" bind:value={variable}> -->
    <!-- bind above starts text box with yo there we go -->
<input type="text" on:input={newHead}>
