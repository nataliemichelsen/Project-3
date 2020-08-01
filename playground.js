// copy to clipboard 
function copy() {
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
  }


// print window
function print_current_page()
{
window.print();
}

// share via email
var subject = "This is a subject";
var subjectEncoded = encodeURIComponent(subject);
document.getElementById('emailMe').href = "mailto:example@website.com?subject=" + subjectEncoded;


// save to favorites functionality - just needs to be implemented & connected to the vector icon we choose
function bookmark(title,url){

    var sPath = window.location.pathname;
  
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  
    url =url+sPage;
  
    if (window.sidebar) // firefox
  
    window.sidebar.addPanel(title, url, "");
  
    else if(window.opera && window.print){ // opera
  
    var elem = document.createElement('a');
  
    elem.setAttribute('href',url);
  
    elem.setAttribute('title',title);
  
    elem.setAttribute('rel','sidebar');
  
    elem.click();
  
    }
  
    else if(document.all)// ie
  
    window.external.AddFavorite(url, title);
  
  }
  
  {/* <script src="**/dir/**favorites.js" charset="UTF-8" type="text/javascript" defer/></script> */}
  // add this code to the TOP of all HTML pages ^^
  
//   <a href="javascript:bookmark()"><img src="imgs/bookmarklogo.png" **other-img-definition-stuff**></a>
  // add this code to the TOP of all JS pages ^^


  // 