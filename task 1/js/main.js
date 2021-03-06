
// let studAdd = document.querySelector("#add-student");

// let studentTable = document.querySelector('#student-tables');
// console.log(studentTable)
// let actions = [
//     {
//         txt : "Delet Student" , 
//         classes : "btn btn-primary ps-4 pe-4 pt-2 pb-2 mt-3 me-2 text-light"
//     } ,
//     {
//         txt : "Edit Student" ,
//         classes : "btn btn-danger ps-4 pe-4 pt-2 pb-2 mt-3 text-light" 
//     } 
// ]
// let tableHeaders = [

//     "Name" , 
//     "Class" , 
//     "Age" , 
//     "Degree" , 
//     "Grade" , 

// ]
// let students = [

// ]
 
// let addElem = function (creatElem , parent , txt=' ' , classes=[]){
//     let elem = document.createElement(creatElem) ; 
//      if(txt!=' ')elem.innerText = txt ; 
//      if(classes.length > 0 ) elem.classList = classes ;    
//     parent.appendChild(elem) ; 
//     return elem ; 
// }
     
// let showStudents = function(){
//     studentTable.innerText=""
//     students.forEach((student , i)=>{
//        tr =  addElem("tr" , studentTable)
//         addElem("td" , tr , i+1)
//         console.log(student);
//         tableHeaders.forEach(elemnt=>{
//              addElem("td" , tr , student[elemnt])
         
//         })
//         td = addElem("td" , tr)
//         actions.forEach( action =>{
//            btnEvent =  addElem('button' , td, action.txt , action.classes, i  );
//            btnEvent.addEventListener("click" , function(e){
//                if(actions.txt= "Delet Student") deletStudent(i)
//                else if(actions.txt=="Edit Student")  editStudent(i)
//            })
//         }

//         )
//     })
// }
// function deletStudent(index){
//     students.splice(index , 1 )
//     showStudents();
// }
// function editStudent(index){
//     let degree = prompt('enter new degree') ; 
//     students[index].Degree = degree ; 
//     showStudents();
// }
// showStudents();
// function Grade(Degree){
//     let Grade;
//     if(Degree >= 90 && Degree <= 100)
//     {
//         Grade = "A" ;  
//     }else if (Degree >= 80 && Degree < 90){
//         Grade = "B" ; 
//     }else if (Degree >= 70 && Degree < 80){
//         Grade = "C" ; 
//     } else {
//         Grade = "F"
//     }
//     return Grade ; 
// }
// studAdd.addEventListener('submit' , function(e){
//     e.preventDefault()
//     let student = {
//         Name : this.elements['Name'].value , 
//         Class : this.elements['Class'].value , 
//         Age   : this.elements['Age'].value, 
//         Degree : this.elements['Degree'].value , 
//         Grade : Grade(this.elements['Degree'].value)
            
//     }

//     students.push(student);
//     this.reset();
//     showStudents();
// })
// const start = ( a ) =>{
//     return {
//         a , 
//         add(x){ a+= x } , 
//         dec(){ a + 5 } , 
//         getSum(){console.loge(`start = `) ${a}}

//     }
// }

let adder = add(5)
adder.inc()
console.log(adder.getSum())

const myCb = ( num , cb)=>{
    setTimeout(() => { 
        if(typeof num == 'number'){cb(num , false )}
        else cb(false , 'must be number')
        
    }, 1500);
}

myCb( "10" , (date , error) => {
    if(error){
        console.log(error)
    }
    else{(console.log(date)) }
}

)
//promise 
