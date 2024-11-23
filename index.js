const name = document.querySelector('#name');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const contact = document.querySelector('#contact');
const submitBtn = document.querySelector('button');
const tbody = document.querySelector('tbody')

const userdetails=[];

submitBtn.addEventListener("click",()=>
{
    if(!name.value && !email.value &&
        !age.value && !contact.value)
        {
            alert("Please enter details properly");
            return;
        }
        const userdata =
        {
            name:name.value,
            email:email.value,
            age:age.value,
            contact:contact.value
        }
    userdetails.push(userdata);
        
    alert('Registered sucessfully')

})