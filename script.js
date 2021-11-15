$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.power-up-button').click(clickedPowerUpButton);
  });
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Kurry", weight:50, happiness:25};
    var h3 = "(Dont worry, the knife is plastic)";
    var eat = document.getElementById("eatAudio");
    var powerUp = document.getElementById("powerUpAudio");
    var exercise = document.getElementById("exerciseAudio");
    var play = document.getElementById("playAudio");
    
    //this function will "power up" the pet
    function clickedPowerUpButton(){
      h3 = "IM POWERED UP, TIME TO TAKE MY REVENGE";
      pet_info.weight += 90000;
      pet_info.happiness += 90000;
      pet_info.name = "GOD MODE KURRY";
      checkAndUpdatePetInfoInHtml();
    }
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.weight += 5;
      pet_info.happiness += 7;
      
      h3 = "YAY, I HAVE FOODZ"
      // Increase pet weight
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      h3 = "Time to practice my stabbing!!!"
      pet_info.happiness += 7;
      // Decrease pet weight
      pet_info.weight -= 5;
      if(pet_info.weight <= 0){
        pet_info.weight = 0;
        h3 = "I'M HUNGRY, PLEASE FEED ME PLEASE";
      }
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      h3 = "GAIN AND PAIN GO HAND IN HAND"
      pet_info.happiness -= 5
      pet_info.weight -= 7;
      checkWeightAndHappinessBeforeUpdating();
      
      // Decrease pet weight
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if (pet_info.weight <= 0) {
        pet_info.weight = 0;
        h3 = "FEED ME TO KEEP GOING";
      }
      if(pet_info.happiness <= 0){
        pet_info.happiness = 0;
        h3 = "MOTIVATION = 0";
      }
      if(pet_info.weight <= 0 && pet_info.happiness <= 0){
        pet_info.happiness = 0;
        pet_info.weight = 0;
        h3 = "PLEASE NO MORE! I can't take over the world if I'm dead";
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $(".subtitle").text(h3);
    }

    //function to play audio
    //src = "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play"
    function playEatAudio(){
      eat.play();
    }
    function playPowerUpAudio(){
      powerUp.play();
    }

    function playExerciseAudio(){
      exercise.play();
    }
    function playPlayAudio(){
      play.play();
    }


    
  