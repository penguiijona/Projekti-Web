const petData = {
  Midnight: {
      image: "../Images/Stray1.jpg",
      intro: "Midnight is a gentle 3-year-old dog who thrives in a calm environment. He is fully house-trained and requires a loving, stable home.",
      stats: [
          { label: "Vaccinated", value: "Yes, fully up-to-date" },
          { label: "Spayed/Neutered", value: "Yes" },
          { label: "Good with Kids", value: "Ages 10+ (quiet, respectful)" },
          { label: "Good with Dogs", value: "Yes (after proper introduction)" },
          { label: "Good with Cats", value: "No (Has a high prey drive)" },
          { label: "Afraid of", value: "Loud noises, thunder" },
          { label: "Housing Needs", value: "Requires yard access or large apartment" },
          { label: "Ideal Adopter", value: "Experienced dog owner, patient, gentle-mannered" }
      ]
  },
  Sandy: {
      image: "../Images/Stray2.jpg",
      intro: "Sandy is a playful, 5-year-old mixed breed who loves to fetch. She needs daily exercise and would do best with an active family.",
      stats: [
          { label: "Vaccinated", value: "Yes, fully up-to-date" },
          { label: "Spayed/Neutered", value: "Yes" },
          { label: "Good with Kids", value: "Yes, very tolerant and friendly" },
          { label: "Good with Dogs", value: "Yes, loves to play" },
          { label: "Good with Cats", value: "Unknown, high energy" },
          { label: "Afraid of", "value": "Brooms and sudden movements" },
          { label: "Housing Needs", value: "Apartment or house, needs daily walks" },
          { label: "Ideal Adopter", value: "Active family, first-time owner possible" }
      ]
  },
  Pip: {
      image: "../Images/Stray3.jpg",
      intro: "Pip is a tiny 4-month-old kitten who is endlessly curious and loves to cuddle after a long nap. He needs constant supervision.",
      stats: [
          { label: "Vaccinated", value: "First shots received" },
          { label: "Spayed/Neutered", value: "No (too young, must be done later)" },
          { label: "Good with Kids", value: "Yes, but needs gentle handling" },
          { label: "Good with Dogs", value: "Yes (if dog is calm)" },
          { label: "Good with Cats", value: "Yes, very social" },
          { label: "Afraid of", value: "The vacuum cleaner" },
          { label: "Housing Needs", value: "Indoor only, any size home is fine" },
          { label: "Ideal Adopter", value: "Someone home often, experienced cat owner preferred" }
      ]
  },
  Cream: {
      image: "../Images/Stray4.png",
      intro: "Cream is a very quiet and independent 2-year-old cat. She prefers quiet company and is an excellent lap companion for a relaxed home.",
      stats: [
          { label: "Vaccinated", value: "Yes, fully up-to-date" },
          { label: "Spayed/Neutered", value: "Yes" },
          { label: "Good with Kids", value: "No (prefers quiet)" },
          { label: "Good with Dogs", value: "No" },
          { label: "Good with Cats", value: "Tolerates other cats" },
          { label: "Afraid of", value: "Sudden loud noises" },
          { label: "Housing Needs", value: "Indoor only, quiet home" },
          { label: "Ideal Adopter", value: "Elderly person or quiet single person" }
      ]
  },
  Ghost: {
      image: "../Images/Stray5.png",
      intro: "Ghost is a high-energy Husky mix. He needs serious exercise, jogging partners, or a very large fenced yard to stay happy and healthy.",
      stats: [
          { label: "Vaccinated", value: "Yes, fully up-to-date" },
          { label: "Spayed/Neutered", value: "Yes" },
          { label: "Good with Kids", value: "Yes, older kids (12+)" },
          { label: "Good with Dogs", value: "Only submissive female dogs" },
          { label: "Good with Cats", value: "No" },
          { label: "Afraid of", value: "Small spaces" },
          { label: "Housing Needs", value: "House with a large fenced yard (must be escape-proof)" },
          { label: "Ideal Adopter", value: "Experienced breed owner, active/athletic lifestyle" }
      ]
  },
  Brownie: {
      image: "../Images/Stray6.png",
      intro: "Brownie is a calm, senior lady at 6 years old. She's happy to lounge on the sofa and requires minimal exercise, perfect for a relaxed home.",
      stats: [
          { label: "Vaccinated", value: "Yes, fully up-to-date" },
          { label: "Spayed/Neutered", value: "Yes" },
          { label: "Good with Kids", value: "Ages 5+" },
          { label: "Good with Dogs", value: "Yes, very laid back" },
          { label: "Good with Cats", value: "Yes" },
          { label: "Afraid of", value: "Car rides" },
          { label: "Housing Needs", value: "Apartment or house, low impact walks only" },
          { label: "Ideal Adopter", value: "Someone who works from home or is retired" }
      ]
  },
  Atlas: {
      image: "../Images/Stray7.png",
      intro: "Atlas is a sweet 8-month-old puppy. He's smart and eager to learn, but needs consistent training and socialization to develop good habits.",
      stats: [
          { label: "Vaccinated", value: "Needs booster shots" },
          { label: "Spayed/Neutered", value: "Scheduled" },
          { label: "Good with Kids", value: "Yes, but may jump when excited" },
          { label: "Good with Dogs", value: "Yes, loves to roughhouse" },
          { label: "Good with Cats", value: "Needs slow introduction" },
          { label: "Afraid of", value: "Nothing yet (typical puppy confidence)" },
          { label: "Housing Needs", value: "Needs puppy-proofed home and chew toys" },
          { label: "Ideal Adopter", value: "First-time owner welcome, must enroll in obedience classes" }
      ]
  },
  Patch: {
      image: "../Images/Stray8.png",
      intro: "Patch is a playful and acrobatic 3-year-old cat. He's an expert hunter of toys and requires interactive playtime daily.",
      stats: [
          { label: "Vaccinated", value: "Yes, fully up-to-date" },
          { label: "Spayed/Neutered", value: "Yes" },
          { label: "Good with Kids", value: "Yes, older kids (8+)" },
          { label: "Good with Dogs", value: "Needs careful introduction" },
          { label: "Good with Cats", value: "Neutral" },
          { label: "Afraid of", value: "Hats and sunglasses" },
          { label: "Housing Needs", value: "Needs scratching posts and vertical space (cat trees)" },
          { label: "Ideal Adopter", value: "Someone who enjoys dedicated playtime" }
      ]
  },
  Button: {
      image: "../Images/Stray9.png",
      intro: "Button is a 6-month-old, extremely affectionate kitten. She acts like a puppy, following her human everywhere. Must be indoor only.",
      stats: [
          { label: "Vaccinated", value: "First shots received" },
          { label: "Spayed/Neutered", value: "Scheduled" },
          { label: "Good with Kids", value: "Yes, excellent with all ages" },
          { label: "Good with Dogs", value: "Yes, very curious and bold" },
          { label: "Good with Cats", value: "Loves other cats" },
          { label: "Afraid of", value: "Quick movements near her face" },
          { label: "Housing Needs", value: "Indoor only, needs window access" },
          { label: "Ideal Adopter", value: "Any loving home that provides lots of cuddles" }
      ]
  },
  Zeke: {
      image: "../Images/Stray10.png",
      intro: "Zeke is a handsome 7-year-old shepherd mix. He is experienced and reliable, but can be selective with strangers and needs patience.",
      stats: [
          { label: "Vaccinated", value: "Yes, fully up-to-date" },
          { label: "Spayed/Neutered", value: "Yes" },
          { label: "Good with Kids", value: "No, adult-only home (18+)" },
          { label: "Good with Dogs", value: "Calm female dogs only" },
          { label: "Good with Cats", value: "No" },
          { label: "Afraid of", value: "Men with deep voices" },
          { label: "Housing Needs", value: "Must have a secure, private yard" },
          { label: "Ideal Adopter", value: "Experienced owner familiar with shepherd breeds" }
      ]
  },
  Honey: {
      image: "../Images/Stray11.png",
      intro: "Honey is a happy, energetic 2-year-old retriever mix. She is eager to please and would make a great family dog, loving car rides and long walks.",
      stats: [
          { label: "Vaccinated", value: "Yes, fully up-to-date" },
          { label: "Spayed/Neutered", value: "Yes" },
          { label: "Good with Kids", value: "Yes, loves all children" },
          { label: "Good with Dogs", value: "Yes, very social" },
          { label: "Good with Cats", value: "Unknown" },
          { label: "Afraid of", value: "Empty boxes" },
          { label: "Housing Needs", value: "Any home size, needs daily physical exercise" },
          { label: "Ideal Adopter", value: "Family with children, or active couple" }
      ]
  },
  Ash: {
      image: "../Images/Stray12.png",
      intro: "Ash is a curious 7-month-old kitten. He's a budding troublemaker who enjoys climbing and exploring. Needs stimulation and patience.",
      stats: [
          { label: "Vaccinated", value: "First shots received" },
          { label: "Spayed/Neutered", value: "Scheduled" },
          { label: "Good with Kids", value: "Yes (if they can handle a playful bite)" },
          { label: "Good with Dogs", value: "Tolerates calm dogs" },
          { label: "Good with Cats", value: "Yes, loves to play rough" },
          { label: "Afraid of", value: "Ceiling fans" },
          { label: "Housing Needs", value: "Indoor only, needs plenty of toys and climbing structures" },
          { label: "Ideal Adopter", value: "Family that understands kitten energy" }
      ]
  },
  Sassy: {
      image: "../Images/Stray13.png",
      intro: "Sassy is a 4-year-old Tortoiseshell known for her 'Tortitude.' She's fiercely loyal to one person but is reserved with everyone else.",
      stats: [
          { label: "Vaccinated", value: "Yes, fully up-to-date" },
          { label: "Spayed/Neutered", value: "Yes" },
          { label: "Good with Kids", value: "No" },
          { label: "Good with Dogs", value: "No" },
          { label: "Good with Cats", value: "Needs to be the only cat" },
          { label: "Afraid of", value: "Anyone but her primary caregiver" },
          { label: "Housing Needs", value: "Indoor only, quiet, single-pet home" },
          { label: "Ideal Adopter", value: "Single adult, experienced cat owner" }
      ]
  },
  Titan: {
      image: "../Images/Stray14.png",
      intro: "Titan is a 6-year-old, large mixed breed with a calm and protective demeanor. He requires a confident owner who can manage his size.",
      stats: [
          { label: "Vaccinated", value: "Yes, fully up-to-date" },
          { label: "Spayed/Neutered", value: "Yes" },
          { label: "Good with Kids", value: "Yes, older, responsible children (14+)" },
          { label: "Good with Dogs", value: "Selectively, prefers female dogs" },
          { label: "Good with Cats", value: "Unknown" },
          { label: "Afraid of", value: "Slick floors" },
          { label: "Housing Needs", value: "House with a large fenced yard is mandatory" },
          { label: "Ideal Adopter", value: "Strong, experienced dog handler" }
      ]
  },
  Jet: {
      image: "../Images/Stray15.png",
      intro: "Jet is a clever 1-year-old Labrador. He knows basic commands and is eager to learn more. He's very food-motivated and trainable.",
      stats: [
          { label: "Vaccinated", value: "Yes, fully up-to-date" },
          { label: "Spayed/Neutered", value: "Yes" },
          { label: "Good with Kids", value: "Yes, loves all people" },
          { label: "Good with Dogs", value: "Yes, playful" },
          { label: "Good with Cats", value: "Yes (lives with a foster cat now)" },
          { label: "Afraid of", value: "Nothing!" },
          { label: "Housing Needs", value: "Any home is fine, needs structured daily walks" },
          { label: "Ideal Adopter", value: "Family or individual looking for a well-rounded companion" }
      ]
  },
  Flora: {
      image: "../Images/Stray16.png",
      intro: "Flora is a beautiful, fluffy 5-year-old Calico. She enjoys sunbathing and is happiest when she has a cozy bed near a window. She's generally quiet.",
      stats: [
          { label: "Vaccinated", value: "Yes, fully up-to-date" },
          { label: "Spayed/Neutered", value: "Yes" },
          { label: "Good with Kids", value: "Tolerates older children" },
          { label: "Good with Dogs", value: "No" },
          { label: "Good with Cats", value: "Prefers to be the only cat" },
          { label: "Afraid of", value: "Having her tail touched" },
          { label: "Housing Needs", value: "Indoor only, needs grooming tools and attention" },
          { label: "Ideal Adopter", value: "Someone willing to brush her regularly" }
      ]
  },
};

function getPetNameFromURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const petName = urlParams.get('pet');
  return petName;
}

function loadPetDetails() {
  const petName = getPetNameFromURL();
  const pet = petData[petName];
  
  if (!petName || !pet) {

      document.getElementById('pet-name-heading').textContent = "General Adoption Application";
      document.getElementById('pet-intro-text').textContent = "Please return to the main page to view and select a specific pet, or submit a general application.";
      
      document.getElementById('pet-stats-grid').innerHTML = '<p>No specific pet selected. You may still apply.</p>';
      document.getElementById('pet-name-agree').textContent = "a suitable pet"; 
      document.getElementById('pet-name-hidden').value = "Unspecified";
      document.getElementById('eligible').required = true; 
      
      return; 
  }
  
  document.getElementById('pet-name-heading').textContent = `Adopting: ${petName}`;
  document.getElementById('pet-name-agree').textContent = petName;
  document.getElementById('pet-name-hidden').value = petName;

  document.getElementById('pet-form-image').src = pet.image;
  document.getElementById('pet-form-image').alt = `${petName}'s Photo`;

  document.getElementById('pet-intro-text').textContent = pet.intro;


  const statsGrid = document.getElementById('pet-stats-grid');

  statsGrid.innerHTML = ''; 


  for (let i = 0; i < pet.stats.length; i++) {
      const stat = pet.stats[i]; 

      const statItem = document.createElement('div');
      statItem.className = 'stat-item-large';
      
      statItem.innerHTML = `
          <strong>${stat.label}:</strong> 
          <span>${stat.value}</span>
      `;
      
      statsGrid.appendChild(statItem);
  }
}

loadPetDetails();