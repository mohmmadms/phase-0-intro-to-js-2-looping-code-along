const gifts = ["teddy bear", "drone", "doll"];
const emptyArray=[];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
   
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, eventName) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;
}

const names = ["Charlie", "Samip", "Ali"];
const eventName = "birthday";
const thankYouNotes = writeCards(names, eventName);

console.log(thankYouNotes);



let numberTest=0;
function countDown(numberTest){
  while(numberTest>=0){
  console.log(numberTest);
numberTest--;}
return(numberTest);
}
countDown(10);
