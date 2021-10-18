newsobj= JSON.parse(localStorage.getItem('n_s'))

document.getElementById("news_heading").innerHTML=newsobj.title


img_div=document.getElementById("img_div")
img=document.createElement('img')
img.src=newsobj.urlToImage
img_div.append(img)

document.getElementById('des').innerHTML=newsobj.description
console.log(newsobj)


document.getElementById('content').innerHTML=newsobj.content

document.getElementById('pub_date').innerHTML=newsobj.publishedAt


document.getElementById('author').innerHTML=newsobj.author