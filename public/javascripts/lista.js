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

        var marks = this.getMarks();
        console.log(marks);
    },
    saveNote:function(){
        var note = this.getMarks();
        console.log(note);
        
    },
    getMarks: function () {
        var marks = Array.from(document.querySelectorAll("input[type=number]"))
        var firstName = document.querySelectorAll('[name=firstName]').value;
        return marks.map(input => {
            return {
                studentId: input.name,
                nota: input.value

            };
        });
    },
}
    function inlineAdd(){
        this.list.push({
            id,
            firstName,
        });
        this.display(this.list);
    }

  
    function submitNewNote(firstName,note) {
        var body = null;
        const method = API_METHOD.ADD;
        if (method === 'POST') {
            body = JSON.stringify({
                firstName,
                note
            })
        }
        fetch(API_URL.ADD, {
            method,
            body,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function(r) {
            return r.json();
        }).then(function(status) {
            if (status.success) {
                inlineAdd();
            } else {
                console.warn('not saved!', status);
            }
        })
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
