const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

/*grandparent.addEventListener('click', function(e) {

     console.log(e);
     //Will show me what has been targetted (in the console)
     console.log(e.target);

 })


I can also add multiple event listeners to an element in the order that's been defined
grandparent.addEventListener('click', function(e) {

    console.log('word one')

 })

 grandparent.addEventListener('click', function(e) {

    console.log('word two')

 })*/



/*-------EVENT BUBBLING- the process of going from the closes element 
to going to the furthest---In the below case, when I click on the child 
element it technically means that all elements have been clicked because 
the child element is inside of all of the elements--------*/
//EVENT BUBBLING GOES UPWARD
/*grandparent.addEventListener('click', function() {

     console.log('grandparent');
    
 })

 parent.addEventListener('click', function() {

     console.log('parent');

 })

 child.addEventListener('click', function() {

     console.log('child');

 })*/



/*---------CAPTURING-------------*/
/*GOES FROM OUTSIDE TO INSIDE
This makes the grandparent in the "capture" phase
This prints out "grandparent" first and then, goes 
back to, child, parent, grandparent because it captured
the grandparent, but the rest does not have a capture event
so it goes default to bubbling*/

/*grandparent.addEventListener('click', function() {

     console.log('grandparent capture');
    
 }, {capture: true });



 grandparent.addEventListener('click', function() {

     console.log('grandparent bubble');
    
 });

 parent.addEventListener('click', function(e) {

     //This stops from all bubbling or capturing phases to occur after this parent
     e.stopPropagation();
     console.log('parent capture');
    
 }, {capture: true });



 parent.addEventListener('click', function() {

     console.log('parent bubble');
    
 });

 child.addEventListener('click', function() {

     console.log('child capture');
    
 }, {capture: true });



 child.addEventListener('click', function() {

     console.log('child bubble');
    
 });*/


/*----------ONE TIME EVENTS----------*/


/*grandparent.addEventListener('click', function() {

     console.log('grandparent bubble');
    
 });

 parent.addEventListener('click', function() {

     console.log('parent bubble');
    
     /*This will make it so that the parent element will fire
     an event one time, but when clicked the next time it will 
     not happen
}, { once: true });

child.addEventListener('click', function() {

     console.log('child bubble');
    
 });*/

/*-----------DELEGATING EVENTS------------*/

/*const divs = document.querySelectorAll('div');

 divs.forEach(div => {

     div.addEventListener("click", function () {

         console.log('hi');

     })
 })

/*If I click on the below new element, the event listener
created above will NOT work because the selector above (const divs = document...)
was ran before we created this new div below- the new created element
was added after the event listener was created*/
/*const newDiv = document.createElement('div');
 newDiv.style.width = "500px";
 newDiv.style.height = "500px";
 newDiv.style.backgroundColor = "blue";
 document.body.append(newDiv);*/

/*You can always add an additional event listener to the new created div but it can be unnecessary
and cluncky. In order to make sure that all of the divs get an event listener, you can do the following:*/


const divs = document.querySelectorAll('div');

document.addEventListener("click", function (e) {

    //If the clicked element matches the element difined below, the event will fire. 
    if (e.target.matches("div")) {

        console.log("Hello");

    }

    //Can target the match by id
    if (e.target.matches("#newdivtwo")) {

        console.log("I'm the second new div!")
    }

    //Can target the match by class
    if (e.target.matches(".newdivclass")) {

        console.log("I'm the first new div!");

    }

})




const newDiv = document.createElement('div');
newDiv.style.width = "500px";
newDiv.style.height = "500px";
newDiv.style.backgroundColor = "blue";
newDiv.classList.add("newdivclass");
document.body.append(newDiv);


const newDiv2 = document.createElement('div');
newDiv2.style.width = "500px";
newDiv2.style.height = "500px";
newDiv2.style.backgroundColor = "brown";
newDiv2.id = "newdivtwo";
document.body.append(newDiv2);



