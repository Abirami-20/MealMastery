
export async function fetchRecipes (filter){
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=96b38b6b&app_key=96eea15cd1361dd1fc85cf330ce55a78&from=0&to=${limit}&`;


    const response = await fetch(url)
    console.log(response)
    const data = await response.json();
    console.log(data)
    return data?.hits;
}

export async function fetchRecipe(id){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=96b38b6b&app_key=
96eea15cd1361dd1fc85cf330ce55a78`

const response = await fetch(url)

const data = await response.json();

return data[0];
}