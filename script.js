// navlist의 데이터를 가져온다.
function fetchData(){

return fetch('/web-practice-3/data.json')
.then(res=>res.json())
.catch(e=>console.log(e));
}

// navlist를 화면에 표시한다.
function makeNavlist(navlist){
  const d1wrap=document.querySelector('.d1-wrap');
  d1wrap.innerHTML='';
  let idx=0;

  for(const category in navlist){
    idx++;
    d1wrap.innerHTML+=`
      <li class='d1-item item${idx}'>
        <button class="d1-btn">
          <div class="category">${category}</div>
          <div class="open-close">
            <img src="/web-practice-3/img/add_black_24dp.svg" alt="">
          </div>
        </button>
        <ul class="d2-wrap">
        </ul>
      </li>
    `
    const d2wrap=document.querySelector(`.d1-item.item${idx}`).querySelector('.d2-wrap');
    
    let idx2=0;
    for(const content of navlist[category]){
      idx2++;
      const name=content['name'];
      const ref=content['ref'];

      d2wrap.innerHTML+=`
        <li class="d2-item item${idx2}">
          <a href="/web-practice-3/${category}/${ref}" class="d2-btn">
            <span>${name}</span>
          </a>
        </li>
      `

    }
  }
}

function setEventlistener(){
  // 카테고리를 클릭했을 때 content를 show/hide한다.
  const category=document.querySelectorAll('.d1-btn');
  for(let i=0;i<category.length;i++){
    category[i].addEventListener('click', e=>{
      category[i].classList.toggle('show');
      if(category[i].classList.contains('show')){
        category[i].parentNode.querySelector('.d2-wrap').style.display='block';
        category[i].querySelector('.open-close').innerHTML=`
          <img src="/web-practice-3/img/remove_black_24dp.svg" alt="">
        `
      } else{
        category[i].parentNode.querySelector('.d2-wrap').style.display='none';
        category[i].querySelector('.open-close').innerHTML=`
          <img src="/web-practice-3/img/add_black_24dp.svg" alt="">
        `
      }
    });
    
  }

}


//main
let navlist;

fetchData()
.then(json=>{
  navlist=json;
  makeNavlist(navlist);
  setEventlistener();
});
