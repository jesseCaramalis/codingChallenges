// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// Answer

function domainName(url){
    if(url.includes('https://www.')){
      return url.slice(12,url.length).split('.')[0]
    }
    else if(url.includes('http://www.')){
      return url.slice(11,url.length).split('.')[0]
    }
    else if(url.includes('https://')){
      return url.slice(8,url.length).split('.')[0]
       }
    else if(url.includes('http://')){
      return url.slice(7,url.length).split('.')[0]
    }
    else if(url.includes('www.')){
      return url.slice(4,url.length).split('.')[0]
    }
    else{
      return url.split('.')[0]
    }
  }

  function domainName(url){
    url = url.replace("https://", '')
    url = url.replace("http://", '')
    url = url.replace("www.", '')
    return url.split('.')[0]
  }