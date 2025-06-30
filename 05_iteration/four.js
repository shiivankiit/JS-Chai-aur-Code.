const myObject = {
    js:'javascript',
    cpp:"c++",
    rb:'ruby',
    swift:"swift by apple"
}

for(const key in myObject ){
     console.log(`${key} shortcut is for ${myObject[key]}`);     
}

const programming =["js","rb","py","java","cpp"]

for (const key in programming){
    console.log(key);
    console.log(programming[key]);    
}
//for of loop is used for array
//for in loop used for objects.