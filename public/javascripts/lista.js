var allPersons = [];
var editPersonId;

var API_URL = {
    CREATE: '...',
    READ: 'users',
    ADD:'users/add'

};
var API_METHOD = {
    CREATE: 'POST',
    READ: 'GET',
    //ADD: 'GET'
}

fetch(API_URL.READ).then(function (r) {
    return r.json();
}).then(function (persons) {
    console.log('all persons', persons);
    allPersons = persons;
    display(persons);
});

const stars = document.querySelector('#rating')   
function display(persons) {
    var list = persons.map(function (person) {
        return `<tr 'data/person.json'>
            <td>${person.firstname}</td>
            <td>${person.lastname}</td>
            <td>${person.email}</td>  
        </tr>`
    });

    document.querySelector('#lista tbody').innerHTML = list.join('');
}


// if one parameter can skipp pharantesis 
// "(value)" will be "value"
const search = value => {
    value = value.toLowerCase().trim();
    const filtered = allPersons.filter(person => {
        return person.firstName.toLowerCase().includes(value) ||
            person.lastName.toLowerCase().includes(value)
    });
    display(filtered);
};

function initEvents() {
    const tbody = document.querySelector('#lista tbody')

}

initEvents();
