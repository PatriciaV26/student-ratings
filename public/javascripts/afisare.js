var allStudents = [];

var API_URL = {
    CREATE: '...',
    READ: 'users/ratings'
};

var API_METHOD = {
    CREATE: 'POST',
    READ: 'GET',
    //ADD: 'GET'
}

fetch(API_URL.READ).then(function (r) {
    return r.json();
}).then(function (students) {
    console.log('all students', students);
    allStudents = students;
    display(students);
});

const stars = document.querySelector('#rating');

function display(students) {
    var list = students.map(function (student) {
        return `<tr>
            <td>${student.firstname}</td>
            <td>${student.lastname}</td>
            <td>${student.avg}</td>  
            <td></td>
        </tr>`
    });
    document.querySelector('#lista tbody').innerHTML = list.join('');
}