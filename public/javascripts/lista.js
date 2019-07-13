var allPersons = [];
var editPersonId;

var API_URL = {
    CREATE: '...',
    READ: 'users',
    ADD:'users/add',
    UPDATE : 'users/update',
    DELETE : 'users/delete'
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

const stars = document.querySelector('#rating');

function display(persons) {
    var list = persons.map(function (person) {
        return `<tr>
            <td>${person.firstname}</td>
            <td>${person.lastname}</td>
            <td><input type="number" class="rate" value="0" max=5 name="${person.id}"></td>  
        </tr>`
    });
    document.querySelector('#lista tbody').innerHTML = list.join('');
}

const Students = {
    saveMarks: function() {
        //TODO READ signature 
        //READ Marks
        //POST MARKS
        // var firstName = document.querySelector('[name=firstName]').value;
        // var lastName = document.querySelector('[name=lastName]').value;
        var marks = this.getMarks();
        console.log(marks);
    },

    // inlineAdd: function(id, firstName, lastName, marks) {

    // },

    getMarks: function () {
        var marks = Array.from(document.querySelectorAll("input[type=number]"))
        
        return marks.map(input => {
            return {
                name: input.name,
                nota: input.value
            };
        });//.filter(mark => mark.nota > 0)
    }
};

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
