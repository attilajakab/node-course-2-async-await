const users = [{
  id: 1,
  name: 'Andrew',
  schoolId: 101
}, {
  id: 2,
  name: 'Jessica',
  schoolId: 999
}];

const grades = [{
  id: 1,
  schoolId: 101,
  grade: 86
}, {
  id: 2,
  schoolId: 999,
  grade: 100
}, {
  id: 3,
  schoolId: 101,
  grade: 80
}];

const getUser = id => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.id === id);

    if (user) {
      resolve(user);
    } else {
      reject(`User with ID ${id} not found`);
    }
  });
};

const getGrades = schoolId => {
  return new Promise((resolve, reject) => {
    resolve(grades.filter(grade => grade.schoolId === schoolId));
  });
};

// const getStatus = userId => {
//   var user;
//   return getUser(userId).then(tempUser => {
//     user = tempUser;
//     return getGrades(user.schoolId);
//   }).then(grades => {
//     let average = 0;

//     if (grades.length) {
//       average = grades.map(grade => grade.grade).reduce((a, b) => a + b) / grades.length;
//     }

//     return `${user.name} has a ${average}% in the class.`;
//   });
// };

// () => { 
//   new Promise((resolve, reject) => {
//     resolve('Mike');
//   });
// };

const getStatusAlt = async userId => {
  // throw new Error('error message'); // equal to reject
  // return 'Mike'; // equal to resolve
  const user = await getUser(userId);
  const grades = await getGrades(user.schoolId);
  let average = 0;
  
  if (grades.length) {
    average = grades.map(grade => grade.grade).reduce((a, b) => a + b) / grades.length;
  }

  return `${user.name} has a ${average}% in the class.`;
};

getStatusAlt(1).then(name => {
  console.log(name);
}).catch(err => {
  console.log(err);
});

// getStatus(2).then(status => {
//   console.log(status);
// }).catch(err => {
//   console.log(err);
// });