function ChangeA(){
  let a = document.querySelectorAll(".nav_a");
  for(let i =0; i<a.length; i++){
  a[i].style.color = 'black';
  }
}
ChangeA();
document.addEventListener('mouseover', function(e){
  e = event.target;
  let hover_color = document.getElementsByTagName('nav')[0].getAttribute('hover-color');
  if(e.className === "nav_a"){
    ChangeA();
    if(hover_color !=="not-set"){
       e.style.color = hover_color;
    }else{
       e.style.color = 'orange';
    }
  }
});

document.addEventListener('click',function(e){
 e = event.target;
 if(e.className === 'btn-conf'){
   let color = e.getAttribute('data-color');
   document.getElementsByTagName('nav')[0].setAttribute('hover-color', color);
 }
})
