(function(){
  var NS='http://www.w3.org/2000/svg', root=document.documentElement;

  // pad ring
  var pads=document.getElementById('pads');
  if(pads){
  for(var i=0;i<22;i++){
    var p=34+i*22;
    [[p,6,12,12],[p,522,12,12],[6,p,12,12],[522,p,12,12]].forEach(function(a){
      var r=document.createElementNS(NS,'rect');
      r.setAttribute('x',a[0]);r.setAttribute('y',a[1]);r.setAttribute('width',a[2]);r.setAttribute('height',a[3]);r.setAttribute('rx',2);
      pads.appendChild(r);
    });
  }
  // 16 x 16 = 256 MACs
  var mac=document.getElementById('mac');
  for(var y=0;y<16;y++)for(var x=0;x<16;x++){
    var d=document.createElementNS(NS,'rect');
    d.setAttribute('class','mac');
    d.setAttribute('x',216+x*10);d.setAttribute('y',338+y*9.3);
    d.setAttribute('width',7);d.setAttribute('height',6.3);d.setAttribute('rx',1);
    d.style.animationDelay=(0.25+(x+y)*0.035)+'s';
    mac.appendChild(d);
  }
  document.getElementById('die').classList.add('run');
  }

  // language
  var btn=document.getElementById('lang');
  function set(l){
    root.setAttribute('data-lang',l);
    root.setAttribute('lang',l==='zh'?'zh-Hant':'en');
    btn.textContent=l==='zh'?'English':'中文';
    var t=root.getAttribute(l==='zh'?'data-title-zh':'data-title-en');if(t)document.title=t;
    try{localStorage.setItem('ws-lang',l)}catch(e){}
  }
  var saved=null;try{saved=localStorage.getItem('ws-lang')}catch(e){}
  if(!saved&&!/^zh/i.test(navigator.language||''))saved='en';
  if(saved)set(saved);
  btn.addEventListener('click',function(){set(root.getAttribute('data-lang')==='zh'?'en':'zh')});
  document.getElementById('yr').textContent=new Date().getFullYear();
})();
