const teste = async () => {
    const response = await fetch('https://api.github.com/blmoura')
    const json = await response.json();
    console.log(json)
}