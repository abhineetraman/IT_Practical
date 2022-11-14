function formObj(){
    var obj={ name: document.getElementById("name").value,
                age: document.getElementById("age").value,
                weight: document.getElementById("weight").value,
                pet_type : document.getElementById("type").value,
                Likes: document.getElementById("like").value
             };
     console.log(obj);
     var fi = JSON.stringify(obj);
     console.log(fi);
     JSON.parse(fi);
}
