const arr = [23, 44, 12];

let func = a => {
    console.log(`too: ${a}`);
}

const arr2 = [...arr, 44, 1223, ];

func(arr2[4]);