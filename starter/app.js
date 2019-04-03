
// class budgetController{
    
// }




// class UIController {
//   constructor(){
//     this.type = '';
//     this.description = '';
//     this.value = '';

//     this.DOMstrings = {
//       inputType: '.add__type',
//       inputDescription: '.add__description',
//       inputValue: '.add__value',
//       inputBtn:'.add__btn'
//     };
//   }

//   getInput = () => {
//     return {
//       type : document.querySelector(DOMstrings.inputType).value,// will be either inc or exp
//       description : document.querySelector(DOMstrings.inputDescription).value,
//       value : document.querySelector(DOMstrings.inputValue).value
//     }  
//   }
//   getDomStrings = () => {
//     return DOMstrings;
//   }
// }


// class controller{
//   constructor(){
//     budgetCtrl;
//     UICtrl;
//     ctrlAddItem;
//     this.input = '';
//     this.DOM = UICtrl.getDomStrings();
//   }
   
//     ctrlAddItem(){
//        //1) Get the field input data
//         this.input = UICtrl.getInput();
//           //2) Add the item to the budget controller
//           //3) Add the item to UI
//           //4) Calculate the budget 
//           //5) display the budget on the UI
//     }
//     whenClicked() {
//       document.querySelector(DOM.inputBtn).addEventListener('click', this.ctrlAddItem);

//       document.addEventListener('keypress', (event) => {
//         if(event.keyCode === 13 || event.which === 13 ){
//            console.log('enter was pressed');
//      }     
//   });
//  };
// }






class budgetController{
  constructor(){

  }
}



class UIController {
  constructor(){


  }
}





class controller {
  constructor(budgetCtrl, UICtrl){
    this.budgetSCtrl = budgetCtrl;
    this.UICtrl = UICtrl;
  }
    whenClicked(){
       document.querySelector('.add__btn').addEventListener('click', () =>{
        console.log('btn clicked');
       });
    }
    document.addEventListener('keypress', (event) => {

    });
  }

      // get input field data
      // add the item to the budget controller
      // add the item to the UI
      // calculate the budget
      // display the budget on the UI




// controller.whenClicked();