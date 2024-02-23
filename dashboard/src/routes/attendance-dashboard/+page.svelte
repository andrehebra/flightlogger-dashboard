<script>
    import { Label, Input } from 'flowbite-svelte';

    let firstName;
    let lastName;

    
</script>
  
<div class="mb-6">
    <Label for="large-input" class="block mb-2">Student Name</Label>
    <Input id="large-input" size="lg" placeholder="First Name" />
    <Input id="large-input" size="lg" placeholder="Last Name" />
</div>
