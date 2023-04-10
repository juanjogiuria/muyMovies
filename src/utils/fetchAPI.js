let API_key = "&api_key=5d13f11367ab0f16d0af451127a33a38"
let base_url = "https://api.themoviedb.org/3"
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key

export let fetchAPI = () {
    const [url_set, setUrl] = useState(url)
    
}