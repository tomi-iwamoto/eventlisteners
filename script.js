const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// grandparent.addEventListener('click', function(e) {

//     console.log(e);
//     //Will show me what has been targetted (in the console)
//     console.log(e.target);

// })


// //I can also add multiple event listeners to an element in the order that's been defined
// grandparent.addEventListener('click', function(e) {

//    console.log('word one')

// })

// grandparent.addEventListener('click', function(e) {

//    console.log('word two')

// })



/*-------EVENT BUBBLING- the process of going from the closes element 
to going to the furthest---In the below case, when I click on the child 
element it technically means that all elements have been clicked because 
the child element is inside of all of the elements--------*/
//EVENT BUBBLING GOES UPWARD
// grandparent.addEventListener('click', function() {

//     console.log('grandparent');
    
// })

// parent.addEventListener('click', function() {

//     console.log('parent');

// })

// child.addEventListener('click', function() {

//     console.log('child');

// })



/*---------CAPTURING-------------*/
//GOES FROM OUTSIDE TO INSIDE
//This makes the grandparent in the "capture" phase
/*This prints out "grandparent" first and then, goes 
back to, child, parent, grandparent because it captured
the grandparent, but the rest does not have a capture event
so it goes default to bubbling*/

grandparent.addEventListener('click', function() {

    console.log('grandparent capture');
    
}, {capture: true });



grandparent.addEventListener('click', function() {

    console.log('grandparent bubble');
    
});

parent.addEventListener('click', function() {

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
    
});



