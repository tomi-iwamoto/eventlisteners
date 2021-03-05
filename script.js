const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandparent.addEventListener('click', function(e) {

    console.log(e);
    //Will show me what has been targetted (in the console)
    console.log(e.target);

})


//I can also add multiple event listeners to an element in the order that's been defined
grandparent.addEventListener('click', function(e) {

   console.log('word one')

})

grandparent.addEventListener('click', function(e) {

   console.log('word two')

})

