const results = document.querySelector(".result");
const api = "https://dev.to/api/articles?tag=";
const search = document.getElementById("form-data");

const getposts = async (Tag) => {
    try {
      const tag = await document.getElementById("tags").value;
      const response = await axios.get(`${api}${tag}`+"&per_page=5");
      
      var articles="";
        if(response.data.length!=0){
            for(var i=0;i<response.data.length;i++){
                articles+='<li><a href='+response.data[i].url+'>'+response.data[i].title+'</a></li>';
            }
        link="https://dev.to/t/"+tag
        articles+='<br><center><a href='+link+'>Checkout blog</a><center>';
      }
        results.innerHTML=articles;
    }
      catch (error) {
      console.log("error")
    }
  };
  // declare a function to handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    getposts(tags);
    
  };
  search.addEventListener("submit", e => handleSubmit(e));