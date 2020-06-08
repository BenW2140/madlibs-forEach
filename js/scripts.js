$(document).ready(function() {
$("form#formOne").submit(function(event) {
  const person1Input = $("input#person1").val();
  const person2Input = $("input#person2").val();
  const animalInput = $("input#animal").val();
  const exclamationInput = $("input#exclamation").val();
  const verbInput = $("input#verb").val();
  const nounInput = $("input#noun").val();
const togethers = ["person1","person2", "animal", "exclamation", "verb", "noun"];

togethers.forEach(function(together) {
  const userInput = $("input#" + together).val();
  $("." + together).text(userInput);

})


// $(".person1").text(person1Input);
// $(".person2").text(person2Input);
// $(".animal").text(animalInput);
// $(".exclamation").text(exclamationInput);
// $(".verb").text(verbInput);
// $(".noun").text(nounInput);

$("#story").show();

 event.preventDefault();

});
});

