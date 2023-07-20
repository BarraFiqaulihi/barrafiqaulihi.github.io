<script>
    let count = 0;

    function increment() { count++; };
    function decrement() { count-- };
    function reset() { count = 0; };
</script>

<main class="h-screen w-screen container mx-auto overflow-y-auto">
    <div class="h-full flex flex-col justify-center">
        <h1 class="text-4xl text-center font-bold">Barra Fiqaulihi</h1>
        <div class="h-4"></div>
        <span class="text-2xl text-center font-semibold">Count = {count}</span>
        <div class="h-4"></div>
        <div class="flex justify-center">
            <button class="btn mx-2" on:click={decrement}>-</button>
            <button class="btn mx-2" on:click={reset}>reset</button>
            <button class="btn mx-2" on:click={increment}>+</button>
        </div>
    </div>
</main>