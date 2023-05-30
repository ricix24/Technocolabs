const apiKey = '4M3MoT1h1pUhaNO17kpWRZ3EW29sn-OaIN_XzB08IF0ZebjcjTdUIwVkV-v2M1nM5jXOHR5gb3lh4YSbg5y0s15zg_b9HzohQuTGSlrKoRhgEvJeac0ioe6cjoh0ZHYx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization:`Bearer ${apiKey}`
            }
        }).then(response=>{
            return response.json();
        }).then(jsonResponse =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;