<script>
    import { Label, Input, Button } from 'flowbite-svelte';

    export let data;

    $: ({ Cancellations } = data)

    console.log("data: ")
    console.log(data)
    console.log("Collections: ")
    //console.log(Cancellations.data)
    
    let firstName;
    let lastName;
</script>
  
<div class="mb-6 container">
    <Label for="large-input" class="block mb-2">Student Name</Label>
    <Input class="form" id="large-input" size="lg" placeholder="First Name" />
    <Input class="form" id="large-input" size="lg" placeholder="Last Name" />
    <Button id="submit">Generate Report</Button>
    {JSON.stringify($Cancellations.data)}
    
</div>

<style>
    Label {
        padding: 10px;
    }
    .form {
        padding: 10px;
        margin: 10px;
    }
</style>
