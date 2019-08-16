var allPersons = [];
var editPersonId;

var API_URL = {
    CREATE: '...',
    READ: 'users',
    ADD:'users/rate',
    UPDATE : 'users/update',
    DELETE : 'users/delete'
};

var API_METHOD = {
    CREATE: 'POST',
    READ: 'GET',
    ADD: 'POST'
}

if (true||location.host === "PatriciaV26.github.io") {
    API_URL.READ = 'data/students.json';
}

function load(){
    fetch(API_URL.READ).then(function (r) {
        return r.json();
    }).then(function (persons) {
        console.log('all persons', persons);
        allPersons = persons;
        display(persons);
    });
}

load();

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
    saveRate: function() {
        this.submit(3);
    },
    saveMark:function(){
        this.submit(1);
    },

    getMarks: function () {
        var marks = Array.from(document.querySelectorAll("input[type=number]"))
        return marks.map(input => {
            return {
                studentId: input.name * 1,
                mark: input.value * 1
            };
        });
    },

    submit: function (testId) {
        var owner = document.getElementById('owner').value;
        var marks = this.getMarks();
        console.log(testId, owner, marks);

        var body = null;
        const method = API_METHOD.ADD;
        if (method === 'POST') {
            body = JSON.stringify({
                testId,
                owner,
                marks
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
               document.location.href = '/';
                //load();
            } else {
                console.warn('not saved!', status);
            }
        })
    }
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

function getParam(name) {
    return (location.search.split(name + "=")[1] || "").split("&")[0];
  }
if (getParam("test")==3){
    document.getElementById('test1').style.visibility = 'hidden';
} else if (getParam("test")==1) {
    document.getElementById('test3').style.visibility = 'hidden';
}

initEvents();
