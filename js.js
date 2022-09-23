
  let new_url = window.location.href.split('?url=')[1];
  
  window.history.pushState(null,null,"/"); // 地址变动 不刷新

  let lock = false;
  
  if(
    document.referrer != undefined
    &&
    document.referrer != ""
    &&
    document.referrer != "null"
    &&
    document.referrer != null
  ){
    
    lock = true;
    
    if(
      document.referrer.indexOf('://www.yunzhongzhuan.com/') != -1
      ||
      document.referrer.indexOf('://www.yzzpan.com/') != -1
      ||
      document.referrer.indexOf('://http-redirects-www-http.yunzhongzhuan.com/') != -1
    ){
      lock = false;
    }
  
  }
  
  if(lock == false && navigator.language.toLowerCase().indexOf('cn')!=-1 ){

    new_url = window.atob(new_url);

    if(
      
      new_url.indexOf('.yunzhongzhuan.com/download/')!=-1
      ||
      new_url.indexOf('.yzzpan.com/download/')!=-1
      ||
      new_url.indexOf('wenhua.eu.org/download/')!=-1
      ||
      new_url.indexOf('yunzhongzhuan.eu.org/download/')!=-1
      ||
      new_url.indexOf('yantudefengjing.eu.org/download/')!=-1
      ||
      new_url.indexOf('cmhkg.eu.org/download/')!=-1
      ||
      new_url.indexOf('bc.googleusercontent.com/download/')!=-1
      
      
      ){
      
      /*
      let a = document.createElement('a');
      a.href = new_url;
      a.target = "_blank";
      a.click();
      setTimeout(function(){
        window.close();
      },1000);
      
      */
      
      window.location.href=new_url;
      
     //  window.open(new_url，"_blank");
      


    }

  }
  
