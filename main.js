
//Buttons ID's
let mainSection = document.getElementById('mainSection');

//============ITEM CLASS==================//
class Item {
    constructor(name, breed, age, img="none"){
         this.name = name;
         this.breed = breed;
         this.age = age;
         this.img = img; 
    }
}

//============ITEMS==================//
Items = [];
Items[0] = new Item('Doki', 'Puddle', 1, img="'img/dog0.jpg'");
Items[1] = new Item('Scott', 'Bulldog', 2, img="'img/dog1.jpg'");
Items[2] = new Item('Richie', 'Idkbreed', 4, img="'img/dog2.jpg'");
Items[3] = new Item('Louis', 'Doggo', 3, img="'img/dog3.jpg'");
//=================================//



let counter = 0; 
function setTemplate(){
itemTemplate =  
`
 <div class="container col-lg-12">
  <div class="container">
    <h2>${Items[counter].name}</h2>
    <span>About him</span>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
        Breed: ${Items[counter].breed}<br>
        Age: ${Items[counter].age}
    </p>
    <figure class="container">
        <img src=${Items[counter].img} alt="">
    </figure>

  </div>
 </div>


`
return itemTemplate;
;}


//===First Creation===//
let actualItem = document.createElement('div');
mainSection.appendChild(actualItem);
actualItem.setAttribute("id", "purchaseCard");
let parent = actualItem.parentNode;
actualItem.innerHTML= setTemplate();

//========PREV BUTTON=========//
function prev()
{
    if(counter > 0)
    {
     counter --; console.log('counter: '+ counter);
    }
    else
    {
     counter=Items.length-1;
    }

    //Destroy
    parent.removeChild(actualItem);

    //TemplateDiv
    mainSection.appendChild(actualItem);
    actualItem.setAttribute("id", "purchaseCard");
    actualItem.innerHTML=setTemplate();
    actualItem.classList.add('animate__animated', 'animate__fadeIn');

    //print
    console.log('added: ' + actualItem +  ' child of ' + parent);

}
//========NEXT BUTTON=========//
function next(){
    
    if(counter < Items.length-1)
    {
        counter ++; console.log('counter: '+ counter)
    }
    else
    {
     counter=0;
    }

    //Destroy
    parent.removeChild(actualItem);

    //TemplateDiv
    mainSection.appendChild(actualItem);
    actualItem.setAttribute("id", "purchaseCard");
    actualItem.innerHTML=setTemplate();
    actualItem.classList.add('animate__animated', 'animate__fadeIn');

    //print
    console.log('added: ' + actualItem +  ' child of ' + parent);
        
}

/********************************************************************************/
//==> ADOPT <==//
function setTempAdopt(){
let adoptTemplate = 
`
<h3>Adopt</h3>
<form class="container col-lg-8 col-md-6 col-sm-8 col-xs-4" id="adoptForm" action="" method="get">
  <div class="form-group container">
    <p>First and Lastname</p required>
    <input class="form-control form-control-sm" type="text">
    <p>Phone number</p required>
    <input class="form-control form-control-sm" type="tel" name="telnumber" required>
    <p>Email adress</p>
    <input class="form-control form-control-sm" type="email" name="email" required>
    <div>
    <p>Do you accept to take care of this puppy?</p>
    <input class="form-control form-control-sm" type="checkbox" name="a-takecare" required>
    <p>Do you accept to feed him and respect him?</p>
    <input class="form-control form-control-sm" type="checkbox" name="a-takecare2" required>
    </div>
  </div>

    <small class="row" id="infoPreview">Name: ${Items[counter].name} <br> Age: ${Items[counter].age} <br> Breed: ${Items[counter].breed} </small>


    <input class="adoptInput form-control-sm" type="submit" value="Process">
    <input class="adoptInput form-control-sm" type="submit" value="Cancel" onclick="cancelAdopt();">
</form>
`;
return adoptTemplate;
}

function adopt(){
    if(!document.getElementById('adoptDiv'))
    {
        let adoptDiv = document.createElement("div");
        adoptDiv.setAttribute('id', 'adoptDiv');
        adoptDiv.innerHTML = setTempAdopt();
        adoptDiv.classList.add('animate__animated', 'animate__fadeIn');
        mainSection.appendChild(adoptDiv);


        console.log(adoptDiv + "created");
    }
}

function cancelAdopt(){
    if(document.getElementById('adoptDiv'))
    {
        mainSection.removeChild(adoptDiv);
    }
}