//js 파일

var todo_input = document.querySelector("#todo_input");
var todo_button = document.querySelector("#todo_button");
var ul = document.querySelector("ul");
var todo_list = document.querySelector("#ist");
//추가할 때마다 ul에 li 추가해주기

todo_button.addEventListener("click", function(){
    var li = document.createElement("li");
    //요소 만들기
    li.appendChild(document.createTextNode(todo_input.value));
    ul.appendChild(li);
    todo_input.value = "";

    //완료
    li.addEventListener("click", function(){
        li.style.textDecoration = "line-through";
    })
    
    //삭제
    //상수인 const로 하면 에러가 발생함
    var todo_delete = document.createElement("button");
    todo_delete.classList.add('todoDelete');
    li.appendChild(todo_delete);
    todo_delete.innerHTML = '삭제';
    // todo_delete.innerHTML('<i class="fa fa-trash" aria-hidden="true"></i>');
    // todo_delete 버튼에 todoDelete라는 클래스 생성함 
    // todolist 내용 삭제
    // 삭제할 text와 클릭한 todolist의 text 값이 일치하면 제거(fillter)
    
    todo_delete.addEventListener("click", function(){
        ul.removeChild(li);
    });
    



})


/*
TODOLIST 삭제 기능
-
TODOLIST 체크기능
var todo_input = document.querySelector("#todo_input");
-input.setAttribute("type", "checkbox");
-input.setAttribute("class"."btn=chk")

전체삭제는 전체 list body에 접해서
for문을 돌며 자식요소만큼 반복하며 접근.
removeChild 이용
-> list의 자식요소 0번째, 1번째. 2번째 제거..


리스트 추가 생성
-> addEventListener를 사용해서
click하면 li 생성되게 만들기 
-> list.innerText  = todo.input.value 혹은 
document.createTextNode(todo_input.value)
-> 


공부할 키워드 

*createElement
*createTextNode
*addEventListener
*innerText
*appendChild
*removeChild
*closest


ul
-> li가 위치할 영역!

    li.addEventListener("click", function(){
        ul.removeChild(li);
    });
    -> 하면 정상적으로 삭제됨. 



*
버튼이나 아이콘을 클릭하면 , 항목이 사라지게끔



*/
