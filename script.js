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
const hobbit = new book('The Hobbit','J.R.R. Tolkien','295','not read yet');
const harryPot = new book('Harry Potter','J.K Rowling','764','read');

console.log(hobbit.info());
addBookToLibrary(hobbit);
addBookToLibrary(harryPot);



//DOM
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

//delete button function
//const deleteInfo =;


//dom
let addButton = document.querySelector('#add-book');

addButton.addEventListener('click',function(){
      let bookTitle = document.querySelector('#title');
      let bookAuthor = document.querySelector('#author');
      let bookPages = document.querySelector('#pages');
      let bookStatus = document.querySelector('#status');
      
      let newInput = new book(`${bookTitle.value}`,`${bookAuthor.value}`,`${bookPages.value}`,`${bookStatus.value}`);
      addBookToLibrary(newInput);
      console.log( newInput.info());// test console.log

      for(let j=0; j<myLibrary[myLibrary.length-1].length; j++){
        if(j === 3){
          let data = document.createElement('div');
          data.classList.add('data');
          dataContainer.appendChild(data);
          data.textContent= myLibrary[myLibrary.length-1][j];
          //delete button
          let deleteBtn= document.createElement('button');
          deleteBtn.classList.add('delete');
          deleteBtn.textContent= 'Delete';
          data.appendChild(deleteBtn);
          deleteBtn.addEventListener('click', function(){
            myLibrary.pop();
            console.log(myLibrary);
            dataContainer.innerHTML='';

            //make data from myLibrary array
            for(let i=0; i< myLibrary.length; i++){
              for(let j=0; j<myLibrary[i].length; j++){
               let data = document.createElement('div');
             data.classList.add('data');
             dataContainer.appendChild(data);
             data.textContent= myLibrary[i][j];
             }
           }
           
            
          });



        } else{
          let data = document.createElement('div');
          data.classList.add('data');
          dataContainer.appendChild(data);
          data.textContent= myLibrary[myLibrary.length-1][j];
      }}
          // reset input
        bookTitle.value= '';
        bookAuthor.value='';
        bookPages.value='';
        bookStatus.value='';

        console.log(myLibrary);// test        
});


//make data on display always update same as myLibrary after delete

// create button for changing reading status

