// creating a array of object of food items


const foodMenu = [
    // each object represent a food item
    {
     itemimage: './images/karai.jpg',
     itemName : 'Karai',
     itemPrice: '1200 PKR',
     itemDescripition: 'lorem lreeandadjjdsajkjsaddas',
     itemCategory: 'Dinner',
     
    },


    {
        itemimage: './images/omlet.jpg',
        itemName : 'omlait Paratah',
        itemPrice: '180 PKR',
        itemDescripition: 'lorem lreeandadjjdsajkjsaddasasddsadsalknsasdasdandsa',
        itemCategory: 'Breakfast',
        
       },


       {
        itemimage: './images/salad.jpg',
        itemName : 'salad',
        itemPrice: '150 PKR',
        itemDescripition: 'lorem lreeandadjjdsajkjsaddas',
        itemCategory: 'lunch',
        
       },

       {
        itemimage: './images/shake1.jpg',
        itemName : 'Chocolate Shake',
        itemPrice: '180 PKR',
        itemDescripition: 'lorem lreeandadjjdsajkjsaddas',
        itemCategory: 'shakes',
        
       },


]

//  Creating Buttons for food items display 
const buttons = ['All', 'Breakfast', 'Lunch', 'shakes'];

// getting the MenuitemCategory id 
const buttonContainer = document.getElementById('Menu-items-category');

// for creating buttons, buttons par forEach ka loop chalega 
buttons.forEach(function(Button){
    buttonContainer.innerHTML += `<button class="btn btn-outline-primary" onclick="showItems('${button.toLowerCase()}')">${button}</button>`;
});

