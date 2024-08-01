// const container = document.getElementById("container");
let allData =[ ]
let id=0;
function AddEmp() {
  let msg = document.getElementById("massage");
  let name = document.getElementById("name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;

  if (name === "" || profession === "" || age === "") {
    msg.innerHTML = `<span class="msg_error" >Error :Please Make sure Fill All the field before adding in an emplyee</span> `;
    return;
  } else {

    // id++;
   let demo = {msg:msg, name:name,profession:profession, age:age,id:id }
   allData.push(demo)
    msg.innerHTML = `<span class="msg_success">Success : Message Added</span> `;
  }
  display(allData);
  ClearDisplay();  
}
function display(allData) {
  id=0;
  let tr=document.createElement('tr');
  document.getElementById('table').innerHTML="";
for (let i = 0; i < allData.length; i++) {
  const element = allData[i];
  

  let input1=document.createElement('td');
  let input2=document.createElement('td');
  let input3=document.createElement('td');
  let put4=document.createElement('button');
  put4.setAttribute("class", "btn4");
  put4.setAttribute("id",id);
  put4.addEventListener("click",handleDelete);
  put4.innerText="Delete"
  let td1=tr.appendChild(input1);
  let td2=tr.appendChild(input2);
  let td3=tr.appendChild(input3);  
  let td4=tr.appendChild(put4);  

  td1.innerText=element.name;
  td2.innerText=element.profession;
  td3.innerText=element.age;  
  document.getElementById('table').appendChild(tr);
  id++;
}
}
function ClearDisplay() {
  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";
}
function handleDelete(e) {
  let demo=[]
for (let i = 0; i < allData.length; i++) {
  const element = allData[i];
  console.log(element.id,e.target.id)
  if(i!=Number(e.target.id)){
  demo.push(allData[i])
  }
}
allData=demo;
display(allData);
}