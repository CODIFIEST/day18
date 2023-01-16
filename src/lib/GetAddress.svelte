<script lang ="ts">
    var addressFromUserInput ="";
    const getAddress = (event=>{
        addressFromUserInput = event.target.value;
    })
</script>

<input type="text" on:input={getAddress}>