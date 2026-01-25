const key = "e5c14b514f38c3798b6bc05ae3205834";

const url = `https://api.themoviedb.org/3`;

export const getMovies = async () => {
    
    const res = await fetch(`${url}/movie/popular?api_key=${key}`);
    const data = await res.json();
    
    console.log(data)

    return data;
}

export const searchMovies = async (query) => {
    
    const res = await fetch(`${url}/search/movie?api_key=${key}&query=${encodeURIComponent(
        query
    )}`)
    const data = await res.json();

    return data;
}

export default url;