import { v4 as uuidv4 } from 'uuid';

export const arr = [
    {
        id: uuidv4(),
        place: 0,
        icon: null,
    },
    {
        id: uuidv4(),
        place: 1,
        icon: null,
    },
    {
        id: uuidv4(),
        place: 2,
        icon: null,
    },
    {
        id: uuidv4(),
        place: 3,
        icon: null,
    },
    {
        id: uuidv4(),
        place: 4,
        icon: null,
    },
    {
        id: uuidv4(),
        place: 5,
        icon: null,
    },
    {
        id: uuidv4(),
        place: 6,
        icon: null,
    },
    {
        id: uuidv4(),
        place: 7,
        icon: null,
    },
    {
        id: uuidv4(),
        place: 8,
        icon: null,
    },
]

export const rules = (props) => {
    // window.confirm("hellow");
    //Possible combination to win  X = true , O = flase
    const a0 = arr[0].icon;
    const a1 = arr[1].icon;
    const a2 = arr[2].icon;
    const a3 = arr[3].icon;
    const a4 = arr[4].icon;
    const a5 = arr[5].icon;
    const a6 = arr[6].icon;
    const a7 = arr[7].icon;
    const a8 = arr[8].icon;
    // console.log(arr[0].icon , arr[1].icon , arr[2].icon)
    // console.log(arr[0].icon == arr[1].icon == arr[2].icon)
    if (a0 === a1 && a1 === a2 && a0 === a2) {
        if (a0 != null) {
            reload();
        }
       
    }
    if(a0 === a4 && a4 === a8 && a0 === a8 ){
        if(a0 != null){ 
            reload();
        }
       
    }
    if(a0 === a3 && a3 === a6 && a0 === a6 ){
        if(a0 != null){
            reload();
        }
       
    }
    if(a1 === a4 && a4 === a7 && a1 === a7 ){
        if(a1 != null){
            reload();
        }
    }
    if(a2 === a5 && a5 === a8 && a2 === a8 ){
        if(a2 != null){
            reload();
        }
    }
    if(a2 === a4 && a4 === a6 && a2 === a6 ){
        if(a2 != null){
            reload();
        }
    }
    if(a3 === a4 && a4 === a5 && a3 === a5 ){
        if(a3 != null){
            reload();
        }
    }
    if(a6 === a7 && a7 === a8 && a6 === a8 ){
        if(a6 != null){
            reload();
        }
    }

}

export const reload = () => {
    window.location.reload();
}