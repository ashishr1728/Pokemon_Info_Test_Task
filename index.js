export const getPoke = async () => {
    const response = await fetch("https://685d3183769de2bf085fb3e1.mockapi.io/api/v1/pokemons",
        {method : 'GET'});
    return await response.json();
}