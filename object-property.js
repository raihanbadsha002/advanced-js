const students = [
     {id: 101, name: "Rafsann islam"},
     {id: 102, name: "Rofikul islam"},
     {id: 103, name: "Tania rohman"},
     {id: 104, name: "Amzad hok"},
     {id: 105, name: "Israt Jahan"},
     {id: 106, name: "Popy Akter"},
     {id: 107, name: "Pushpo Khan"}
];

const names = students.map(( s => s.name));
// const Ids = students.map(( s => s.id));
// const Ids = students.filter(( s => s.id > 105));
const Ids = students.find(( s => s.id > 105));
// console.log(names);
console.log(Ids);