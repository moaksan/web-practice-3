# website with navigation list

## 개요
일반적인 웹사이트의 navigation 기능을 구현했다.

## 사용언어
html, css, javascript

## 구조

main page: index.html

sub page: somewhere1.html, somewhere2.html, somewhere3.html...

page information: data.json

각각의 페이지는 하나의 html 파일에 대응된다. 어느 페이지에서든 다른 임의의 페이지로 이동할 수 있도록 만들었다. 모든 페이지 왼편에는 navigation list가 존재한다. 
서브 페이지(somewhere1.html...)에는 별도로 content 영역 상단에 navigation bar가 존재하며, 이를 통해서도 다른 페이지로 이동할 수 있다.

## 검토
1. 동작하는 기능에 따라 함수를 구분하였다.
2. 변수 이름을 정하는 데에 명확한 기준이 있어야 할 것 같다. 가독성도 고려해야 할 것이다.
3. 외부 데이터를 가져올 때 경로 문제가 발생했다. 모든 html 파일은 동일한 js 파일(script.js)을 참조한다. 그리고 script.js는 data.json을 참조한다. 그런데 index.html은 루트 폴더에 있는 반면, 나머지 somwhere*.html 파일들은 각각의 카테고리 폴더 안에 존재하기 때문에, data.json을 불러올 때 동일한 상대 경로를 사용할 수 없다. 현재 코드는 data.json을 포함한 외부 데이터를 불러올 때 절대 경로를 사용해서 문제를 해결했다. 하지만 절대 경로를 사용하면 전체 폴더를 다른 서버로 옮기거나 로컬 영역에서 실행할 때 에러가 발생할 것이다. 이 문제를 해결하는 방법을 강구해보아야 겠다. 한가지 대안은 hash url을 사용하여 모든 페이지를 하나의 html 파일로 구현하는 것이다. 이 경우 해당 html 파일 내에서는 경로 문제가 발생하지 않을 것이다. 
