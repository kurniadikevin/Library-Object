let myLibrary = [];

function book(title,author,pages,status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function(){
    return `${title}, ${author}, ${pages}, ${status}`;
  }
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push( (book.info()).split(', ') );
 
}

// add book function to my library on addBookTo

//testing
/*
const hobbit = new book('The Hobbit','J.R.R. Tolkien','295','not read yet');
const harryPot = new book('Harry Potter','J.K Rowling','764','read');

console.log(hobbit.info());
addBookToLibrary(hobbit);
addBookToLibrary(harryPot);

*/

//DOM
const dataWrap = document.querySelector('.data-input');
const dataContainer = document.querySelector('.data-main');
//make data from myLibrary array
for(let i=0; i< myLibrary.length; i++){
   for(let j=0; j<myLibrary[i].length; j++){
    let data = document.createElement('div');
  data.classList.add('data');
  dataContainer.appendChild(data);
  data.textContent= myLibrary[i][j];
  }
}
// book status option
let bookStatus = document.querySelector('#status');
bookStatus.addEventListener('change',function(ev){
  bookStatus.value = ev.target.value;
 
});

//dom for ad button
let addButton = document.querySelector('#add-book');

addButton.addEventListener('click',function(){
      let bookTitle = document.querySelector('#title');
      let bookAuthor = document.querySelector('#author');
      let bookPages = document.querySelector('#pages');
      
      
      let newInput = new book(`${bookTitle.value}`,`${bookAuthor.value}`,`${bookPages.value}`,`${bookStatus.value}`);
      addBookToLibrary(newInput);
      console.log( newInput.info());// test console.log
      let bookGroup = document.createElement('div');// make now class on dom
      bookGroup.classList.add('book-group');
      dataWrap.appendChild(bookGroup);

      // make display on main data
      for(let j=0; j<myLibrary[myLibrary.length-1].length; j++){
            if(j === 3){
              
              let data = document.createElement('div');
              data.classList.add('data');
              bookGroup.appendChild(data);
              //data.textContent= myLibrary[myLibrary.length-1][j];
              let cloneStatus = bookStatus.cloneNode(true);
              let optionStatus = cloneStatus.children;
              if( myLibrary[myLibrary.length-1][j] === 'Read'){
                optionStatus[0].setAttribute('selected','');
              } else /*if (myLibrary[myLibrary.length-1][j] === 'Not read')*/{
                optionStatus[1].setAttribute('selected','');
              }
              data.appendChild(cloneStatus);
              // if clone child value change change the data on datalist to
              cloneStatus.addEventListener('change',function(ev){
                myLibrary[myLibrary.length-1][j] = ev.target.value;
                console.log(myLibrary);
              })
              

              
              //delete button
              let deleteBtn= document.createElement('button');
              deleteBtn.classList.add('delete');
              deleteBtn.textContent= 'Delete';
              data.appendChild(deleteBtn);

              deleteBtn.addEventListener('click', function(ev){
                   // if target contain 'delete' do task
                let el= ev.target.classList.contains('fa-trash')? ev.target.parentElement : ev.target.classList.contains('delete') ? ev.target : false;
                      if (el) {
                      let card=el.parentElement.parentElement; // book-card DOM element
                      // remove myLibrary array-element here:
                      myLibrary.splice( [...card.parentElement.children].indexOf(card) ,1);
                      console.log(myLibrary)
                      // remove card DOM element:
                      card.remove();
                    }

              });

            } else{
              let data = document.createElement('div');
              data.classList.add('data');
              bookGroup.appendChild(data);
              data.textContent= myLibrary[myLibrary.length-1][j];
          }}
          // reset input
        bookTitle.value= '';
        bookAuthor.value='';
        bookPages.value='';
        bookStatus.value='';

        console.log(myLibrary);// test  
        console.log('bookGroup:'+ bookGroup);      
});


//make data on display always update same as myLibrary after delete

// create button for changing reading status

// if checkbox is checked display value read else it is not read
// display checkbox for read status on data list
