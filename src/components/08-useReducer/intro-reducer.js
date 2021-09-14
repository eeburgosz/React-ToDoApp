const initialState= [{
    id: 1,
    toDo: 'Comprar café',
    done: false
}];

const toDoReducer= (state= initialState, action)=> {
    if(action?.type === 'agregar'){
        //console.log(action?.payload)
        return [...state, action.payload];    
    }
    return state;
};

let toDos= toDoReducer();
//console.log(toDos);

const newToDo= {
    id: 2,
    toDo: 'Comprar pan',
    done: false 
};

const agregarToDoAction= {
    type: 'agregar',
    payload: newToDo
};
toDos= toDoReducer(toDos, agregarToDoAction);
console.log(toDos)