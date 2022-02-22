
function makeanotherNav(){
  let content;
  d1wrap.innerHTML=`
    <div class="d1-current">${category}</div>
    <div class="wrap"></div>
  `;
  for(let i of data[category]){
    if(i['ref']==ref){
      d2wrap.innerHTML=`
        <div class="d2-current">${i['name']}</div>
        <div class="wrap"></div>
      `
      content=i['name'];
  }}
  
  for(let i in data){
    if(i!==category){
      d1wrap.querySelector('.wrap').innerHTML+=`
      <div class="d1">${i}</div>
      `
    }
  }
  for(let i of data[category]){
    if(i['name']!==content){
      d2wrap.querySelector('.wrap').innerHTML+=`
        <div class="d2">${i['name']}</div>
      `
    }
  }
}

function setEventlistener2(){
//another-nav 설정
  //main화면으로 이동 설정
  main.setAttribute('href', '/web-practice-3/index.html');

  //category를 클릭했을 때 목록을 보이게 함
  const d1current=d1wrap.querySelector('.d1-current');
  const d1list=d1current.parentNode.querySelectorAll('.d1');

  d1current.addEventListener('click', e=>{
    d1current.classList.toggle('show');
    if(d1current.classList.contains('show')){
      for(let i of d1list){
        i.style.display='flex';
        setTimeout(() => {
          i.style.opacity=1;
        }, 0);
      }
      d1current.style.outline='solid 2px #40e9d2';
    } else{
      for(let i of d1list){
        i.style.opacity=0;
        setTimeout(() => {
          i.style.display='none';
        }, 200);
      }
      d1current.style.outline='none';
    }
  });

  //content를 클릭했을 때 목록을 보이게 함
  const d2current=d2wrap.querySelector('.d2-current');
  const d2list=d2current.parentNode.querySelectorAll('.d2');

  d2current.addEventListener('click', e=>{
    d2current.classList.toggle('show');
    if(d2current.classList.contains('show')){
      for(let i of d2list){
        i.style.display='flex';
        setTimeout(() => {
          i.style.opacity=1;
        }, 0);
      }
      d2current.style.outline='solid 2px #40e9d2';
    } else{
      for(let i of d2list){
        i.style.opacity=0;
        setTimeout(() => {
          i.style.display='none';
        }, 200);
      }
      d2current.style.outline='none';
    }
  });

  //category item 클릭했을 때 해당 category로 이동
  for(let i of d1list){
    i.addEventListener('click', e=>{
      for(let j in data){
        if(i.textContent==j){
          location.href=`/web-practice-3/${j}/${data[j][0]['ref']}`;
        }
      }
    });
  }

  //content item 클릭했을 때 해당 content로 이동
  for(let i of d2list){
    i.addEventListener('click', e=>{
      for(let j of data[category]){
        if(i.textContent==j['name']){
          location.href=`/web-practice-3/${category}/${j['ref']}`;
        }
      }
    });
  }
}

//현재 주소에 알맞게 왼쪽의 navlist창을 열어둠
function openNavlist(){
  const categorylist=document.querySelectorAll('.d1-item');
  find:
  for(let i of categorylist){
    if(i.querySelector('.category').textContent==category){
      i.querySelector('.d1-btn').classList.add('show');
      i.querySelector('.d2-wrap').style.display='block';
      i.querySelector('.open-close').innerHTML=`
      <img src="/web-practice-3/img/remove_black_24dp.svg" alt="">
      `

      const content=i.querySelector('.d2-wrap').querySelectorAll('.d2-item');
      for(let idx=0;idx<data[category].length;idx++){
        if(data[category][idx]['ref']==ref){
          content[idx].querySelector('span').style.textDecoration='underline orange';
          break find;
        }
      }
    }
  }
}
//main
const anotherNav=document.querySelector('.another-nav');
const main=anotherNav.querySelector('.main');
const d1wrap=anotherNav.querySelector('.another-d1-wrap');
const d2wrap=anotherNav.querySelector('.another-d2-wrap');

const x=location.pathname.split('/');
x.shift();
const category=x[1];
const ref=x[2];

fetchData()
.then(json=>{
  data=json;
  makeanotherNav();
  openNavlist();
  setEventlistener2();
});

