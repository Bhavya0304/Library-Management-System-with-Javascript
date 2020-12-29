

let try1 = localStorage.getItem("books");
let try2 = localStorage.getItem("students");
let try3 = localStorage.getItem("issued");

if(try1 == null){
    try1 = [];
    try1 = JSON.stringify(try1);
    try2 = [];
    try2 = JSON.stringify(try2);
    try3 = [];
    try3 = JSON.stringify(try3);
    localStorage.setItem("books",try1);
    localStorage.setItem("students",try2);
    localStorage.setItem("issued",try3);

}


function firstpage(){
    
    upperline.style.display = "flex";
    lowerline.style.display = "flex";
    backbutton.style.display = "none";
    bookdiv.style.display = "none";
    studiv.style.display = "none";
    issuediv.style.display = "none";
    retdiv.style.display = "none";



}

function showform(id){
    if(id == "butt1"){
        
        let form = document.getElementById('form1');
        if(form.style.display == "none"){
        form.style.display = "block";
        }
        else{
            form.style.display = "none";
        }
    }
    else if(id == "butt2"){
        
        let form = document.getElementById('form2');
        if(form.style.display == "none"){
        form.style.display = "block";
        }
        else{
            form.style.display = "none";
        }
    }


}

function booksub(){
    let name = document.getElementById('t1').value;
    let auther = document.getElementById('t2').value;
    let aval = document.getElementById('n1').value;

    obj = localStorage.getItem("books");
    obj = JSON.parse(obj);
    let id = obj.length;
    obj.push({id:id+1,name:name,auther:auther,aval:aval});
    obj = JSON.stringify(obj);
    localStorage.setItem("books",obj);



}


function stusub(){
    let name = document.getElementById('tt1').value;
    let auther = document.getElementById('tt2').value;
    let aval = document.getElementById('nn1').value;

    obj = localStorage.getItem("students");
    obj = JSON.parse(obj);
    let id = obj.length;
    obj.push({id:auther,name:name,credit:aval});
    obj = JSON.stringify(obj);
    localStorage.setItem("students",obj);



}

//Selections//
let upperline = document.getElementById('upperline');
let lowerline = document.getElementById('lowerline');
let backbutton = document.getElementById('bb');
let bookdiv = document.getElementById('bookdiv');
let studiv = document.getElementById('studiv');
let table1 = document.getElementById('table1');
let issuediv = document.getElementById('issuediv');
let retdiv = document.getElementById('retdiv');
// backbutton.addEventListener('onclick',firstpage());



function buttonClicked(id){
    upperline.style.display = "none";
    lowerline.style.display = "none";
    backbutton.style.display = "block";

    if(id == "book"){

        bookdiv.style.display = "block";
        showallbooks()

    }

    else if(id == "students"){
        studiv.style.display = "block";
        showallstudents()

    }
    else if(id == "issue"){
        issuediv.style.display = "block"
    }
    else if(id == "return"){
        retdiv.style.display = "block";
        if(retdiv.style.display == "block"){
            var obj = localStorage.getItem("issued");
            obj = JSON.parse(obj);
            let tbody = document.getElementById('tbody5');
            tbody.innerHTML = ``;
            obj.forEach((element,index,array) => {
                tbody.innerHTML += `<tr>
                <th scope="row">${obj[index].id}</th>
                <td>${obj[index].book_name}</td>
                <td>${obj[index].stu_name}</td>
                <td>${obj[index].stu_id}</td>
                <td>${obj[index].book_id}</td>
                <td><button class="btn btn-danger" id="ret${obj[index].id}" onclick='returnbook(${index})'>Return</button></td>
              </tr>`;
            });
        
        }

    }

    

}

function showallbooks(){

    if(bookdiv.style.display == "block"){
        var obj = localStorage.getItem("books");
        obj = JSON.parse(obj);
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = ``;
        obj.forEach((element,index,array) => {
            tbody.innerHTML += `<tr>
            <th scope="row">${obj[index].id}</th>
            <td>${obj[index].name}</td>
            <td>${obj[index].auther}</td>
            <td>${obj[index].aval}</td>
            <td><button class="btn btn-danger" id="${obj[index].id}" onclick="deleteall(${obj[index].id},${index},'books')">Delete</button></td>
          </tr>`;
        });

    }

}


function showallstudents(){

    if(studiv.style.display == "block"){
        var obj = localStorage.getItem("students");
        obj = JSON.parse(obj);
        let tbody = document.getElementById('tbody2');
        tbody.innerHTML = ``;
        obj.forEach((element,index,array) => {
            tbody.innerHTML += `<tr>
            <th scope="row">${obj[index].id}</th>
            <td>${obj[index].name}</td>
            <td>${obj[index].credit}</td>
            <td><button class="btn btn-danger" id="${obj[index].id}" onclick='deleteall(${obj[index].id},${index},"students")'>Delete</button></td>
          </tr>`;
        });

    }

}


function deleteall(id,index,db){
    let obj = localStorage.getItem(db);
    obj = JSON.parse(obj);
    if(index == 0){
        obj.shift();
    }
    else{

        obj.splice(index,index);
    }
    obj = JSON.stringify(obj);
    localStorage.setItem(db,obj);
    location.reload();
    
    
}

function getbook(){
    let id = document.getElementById('issuebook1').value;
    let name = document.getElementById('issuebook2').value;
    let auther = document.getElementById('issuebook3').value;

    if(id != ""){
        var obj = localStorage.getItem("books");
        obj = JSON.parse(obj);
        let tbody = document.getElementById('tbody3');
        tbody.innerHTML = ``;
        obj.forEach((element,index,array) => {
            if(obj[index].id == id){
            tbody.innerHTML += `<tr>
            <th scope="row">${obj[index].id}</th>
            <td>${obj[index].name}</td>
            <td>${obj[index].auther}</td>
            <td>${obj[index].aval}</td>
            <td><input type="radio" name="check1" id="${obj[index].id}" value="${index}"></td>
          </tr>`;
        }});
        

    }
    else if(name != ""){
        var obj = localStorage.getItem("books");
        obj = JSON.parse(obj);
        let tbody = document.getElementById('tbody3');
        tbody.innerHTML = ``;
        obj.forEach((element,index,array) => {
            if(obj[index]["name"].includes(name)){
            tbody.innerHTML += `<tr>
            <th scope="row">${obj[index].id}</th>
            <td>${obj[index].name}</td>
            <td>${obj[index].auther}</td>
            <td>${obj[index].aval}</td>
            <td><input type="radio" name="check1" id="book${obj[index].id}" value="${index}"></td>
          </tr>`;
        }});

    }
    else if(auther != ""){
        var obj = localStorage.getItem("books");
        obj = JSON.parse(obj);
        let tbody = document.getElementById('tbody3');
        tbody.innerHTML = ``;
        obj.forEach((element,index,array) => {
            if(obj[index]["auther"].includes(auther)){
            tbody.innerHTML += `<tr>
            <th scope="row">${obj[index].id}</th>
            <td>${obj[index].name}</td>
            <td>${obj[index].auther}</td>
            <td>${obj[index].aval}</td>
            <td><input type="radio" name="check1" id="book${obj[index].id}" value="${index}"></td>
          </tr>`;
        }});

    }
    else{
        alert("please input atleast one field!")
    }

}

function getstu(){
    let id = document.getElementById('issuebook4').value;
    let name = document.getElementById('issuebook5').value;
    

    if(id != ""){
        var obj = localStorage.getItem("students");
        obj = JSON.parse(obj);
        let tbody = document.getElementById('tbody4');
        tbody.innerHTML = ``;
        obj.forEach((element,index,array) => {
            if(obj[index]["id"].includes(id)){
            tbody.innerHTML += `<tr>
            <th scope="row">${obj[index].id}</th>
            <td>${obj[index].name}</td>
            <td>${obj[index].credit}</td>
            <td><input type="radio" name="check2" id="stu${obj[index].id}" value="${index}"></td>
          </tr>`;
        }});
        

    }
    else if(name != ""){
        var obj = localStorage.getItem("students");
        obj = JSON.parse(obj);
        let tbody = document.getElementById('tbody4');
        tbody.innerHTML = ``;
        obj.forEach((element,index,array) => {
            if(obj[index]["name"].includes(name)){
            tbody.innerHTML += `<tr>
            <th scope="row">${obj[index].id}</th>
            <td>${obj[index].name}</td>
            <td>${obj[index].credit}</td>
            <td><input type="radio" name="check2" id="stu${obj[index].id}" value="${index}"></td>
          </tr>`;
        }});

    }
    else{
        alert("please input atleast one field!")
    }

}

function verifyandissue(){
    let check1 = document.querySelector('input[name="check1"]:checked');
    let check2 = document.querySelector('input[name="check2"]:checked');

    if((check1 == null) || (check2 == null)){
        alert("please select one student and one book to continue!");       
    }
    else{
        var oobj = localStorage.getItem("books");
        oobj = JSON.parse(oobj);
        var oobj2 = localStorage.getItem("students");
        oobj2 = JSON.parse(oobj2);
        moobj = oobj[check1.value];
        moobj2 = oobj2[check2.value];
        if(moobj.aval < 1){
            alert("Book not available");
        }
        else{
            if(moobj2.credit < 1){
                alert("Student has already maximum number of books issued!");
            }
            else{
                moobj.aval = moobj.aval - 1;
                moobj2.credit = moobj2.credit - 1;
                oobj[check1.value] = moobj;
                oobj2[check2.value] = moobj2;
                oobj = JSON.stringify(oobj);
                oobj2 = JSON.stringify(oobj2);
                localStorage.setItem("books",oobj);
                localStorage.setItem("students",oobj2);

                let obj4 = localStorage.getItem("issued");
                obj4 = JSON.parse(obj4);
                let id = obj4.length;
                obj4.push({id:id+1,stu_name:moobj2.name,book_name:moobj.name,book_id:moobj.id,stu_id:moobj2.id});
                obj4 = JSON.stringify(obj4);
                localStorage.setItem("issued",obj4);

                


            }
        }

    }
    
}

function getissued(){
    let bid = document.getElementById('issuebook7').value;
    let bname = document.getElementById('issuebook8').value;
    let sname = document.getElementById('issuebook9').value;
    let sid = document.getElementById('issuebook0').value;


    if(bid != ""){
        let obj = localStorage.getItem("issued");
        obj = JSON.parse(obj);
        let tbody = document.getElementById('tbody5');
        tbody.innerHTML = ``;
        obj.forEach((element,index,array) => {
            if(obj[index].book_id == bid){
                tbody.innerHTML += `<tr>
                <th scope="row">${obj[index].id}</th>
                <td>${obj[index].book_name}</td>
                <td>${obj[index].stu_name}</td>
                <td>${obj[index].stu_id}</td>
                <td>${obj[index].book_id}</td>
                <td><button class="btn btn-danger" id="ret${obj[index].id}" onclick='returnbook(${index})'>Return</button></td>
              </tr>`;
        }});
        

    }
    else if(bname != ""){
        let obj = localStorage.getItem("issued");
        obj = JSON.parse(obj);
        let tbody = document.getElementById('tbody5');
        tbody.innerHTML = ``;
        obj.forEach((element,index,array) => {
            if(obj[index]['book_name'].includes(bname)){
                tbody.innerHTML += `<tr>
                <th scope="row">${obj[index].id}</th>
                <td>${obj[index].book_name}</td>
                <td>${obj[index].stu_name}</td>
                <td>${obj[index].stu_id}</td>
                <td>${obj[index].book_id}</td>
                <td><button class="btn btn-danger" id="ret${obj[index].id}" onclick='returnbook(${index})'>Return</button></td>
              </tr>`;
        }});
        

    }
    else if(sname != ""){
        let obj = localStorage.getItem("issued");
        obj = JSON.parse(obj);
        let tbody = document.getElementById('tbody5');
        tbody.innerHTML = ``;
        obj.forEach((element,index,array) => {
            if(obj[index]['stu_name'].includes(sname)){
                tbody.innerHTML += `<tr>
                <th scope="row">${obj[index].id}</th>
                <td>${obj[index].book_name}</td>
                <td>${obj[index].stu_name}</td>
                <td>${obj[index].stu_id}</td>
                <td>${obj[index].book_id}</td>
                <td><button class="btn btn-danger" id="ret${obj[index].id}" onclick='returnbook(${index})'>Return</button></td>
              </tr>`;
        }});
        

    }
    else if(sid != ""){
        let obj = localStorage.getItem("issued");
        obj = JSON.parse(obj);
        let tbody = document.getElementById('tbody5');
        tbody.innerHTML = ``;
        obj.forEach((element,index,array) => {
            if(obj[index].stu_id == sid){
                tbody.innerHTML += `<tr>
                <th scope="row">${obj[index].id}</th>
                <td>${obj[index].book_name}</td>
                <td>${obj[index].stu_name}</td>
                <td>${obj[index].stu_id}</td>
                <td>${obj[index].book_id}</td>
                <td><button class="btn btn-danger" id="ret${obj[index].id}" onclick='returnbook(${index})'>Return</button></td>
              </tr>`;
        }});
        

    }
    else{
        alert("please input atleast one field!")
    }


}


function returnbook(index){
    let obj = localStorage.getItem("issued");
    obj = JSON.parse(obj);
    let mobj = obj[index];
    if(index == 0){
        obj.shift();
    }
    else{

        obj.splice(index,index);
    }
    obj = JSON.stringify(obj);
    localStorage.setItem("issued",obj);
    let bobj = localStorage.getItem("books");
    let sobj = localStorage.getItem("students");
    bobj = JSON.parse(bobj);
    sobj = JSON.parse(sobj);
    bobj.forEach((element,index,array) =>{
        if(mobj['book_id'] == bobj[index]['id']){
            bobj[index]['aval'] = bobj[index]['aval'] + 1; 
        }
        
    })

    sobj.forEach((element,index,array) =>{
        if(mobj['stu_id'] == sobj[index]['id']){
            sobj[index]['credit'] = sobj[index]['credit'] + 1; 
        }
        
    })

    bobj = JSON.stringify(bobj);
    sobj = JSON.stringify(sobj);
    localStorage.setItem("books",bobj);
    localStorage.setItem("students",sobj);
    location.reload();

}










