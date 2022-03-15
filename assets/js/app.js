"use strict";
//# sourceMappingURL=main.js.map

 let options={
     Animation :'true',
     delay:2000
 };

function toasty(){
    let toaster=document.getElementById("EpicToast")
    let CallBsToastFunction= new bootstrap.Toast(toaster,options);
    CallBsToastFunction.show()
}