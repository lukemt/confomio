<script lang="ts">
	export let data;
	console.log(data);
</script>

<h1>Hello</h1>

{#each data.clients as client}
	{client.name}
	<br />
{/each}

<a href="/">go home</a>
