


 async function getdata(){

    res= await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=957fbaf97c284441a1369237302cce97')
 
    data= await res.json()
    appendnews(data.articles)
   
 
  }  
 
  getdata()
 
 let randnewsbox=document.getElementById("random-news")
  function appendnews(newses){
 
      
     newses.forEach(news => {
 
         let div=document.createElement('div')
 
         div.onclick=function(){
             news_single(news)
         }
 
         let img=document.createElement('img')
         img.src=news.urlToImage
 
         let p=document.createElement('p')
 
         
           p.innerHTML=news.title
        
 
           div.append(img,p)
           randnewsbox.append(div)
     });
 
 
 
  }
 
 
 
 
  function news_single(news){
 
 
     localStorage.setItem('n_s',JSON.stringify(news))
   
     window.location.href='news.html'
 
 
  }
 
 
 
 
 
  async function searchnews(name){
 
 let newsname=document.getElementById("query").value
 
 
 res= await fetch(`https://newsapi.org/v2/everything?q=${newsname}&apiKey=957fbaf97c284441a1369237302cce97`)
 
 data= await res.json()
 appendsearchnews(data.articles)
 
 
 
 
 
 
 }
 
 
 
 var searchboxresult=document.getElementById("searchResultBox")
 
  function appendsearchnews(newses){
 
     searchboxresult.innerHTML=null;
     newses.forEach(news => {
 
 
   let p=document.createElement('p')
   p.innerHTML=news.title
   p.style.cursor='pointer'
   p.onclick=function (){
             showsearchhtml(news)
         }
 
         searchboxresult.append(p)
 
   
 
   
 });
 
  
 
 }
 
 
 function showsearchhtml(news) {
 
 localStorage.setItem('s_r_n',JSON.stringify(news))
 
  window.location.href='search.html'
 
 
 }
 
 
 
 
 

 
 function appearbox(){
 
 document.getElementById("searchResultBox").style.display="block"
 
 
 
 }