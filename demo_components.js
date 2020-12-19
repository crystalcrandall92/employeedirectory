function App() {
    const state = { name: "Benjamin" };

    const changeState = val => state.name = val

    Search({ change: changeState })

    return Container({ name: state.name });
}

// var props = { name: ??? };
function Container(props) {
    return props.name
}

// var props = state // assignment by reference
function Search(props) {
    props.change("Bradley")
}

console.log(App())

// var one = "cat"
// var two = one; // assignment by value
// two = "dog";

// console.log(one, two);

// var ob1 = { name: "Ben" }
// var ob2 = ob1; // assignment by reference
// ob2.age = 32;

// console.log(ob1, ob2)

// var num = 1;

// // var val = num:primitive i.e. pass by value
// function Inc(val){
//     val++
//     return val
// }

// num = Inc(num)

// console.log(num)

// var state = { num: 1 }

// function _Inc(prop){
//     prop.num++
// }

// _Inc(state)

// console.log(state.num)