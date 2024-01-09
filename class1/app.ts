const app = (x1:number, y1:number, x2:number, y2:number) => {
    let dataAndFunctions = {
        x1:x1,
        y1:y1,
        x2:x2,
        y2:y2,
        square: (num:number):number => Math.pow(num, 2),
        squareRoot: (num:number):number => Math.sqrt(num),
        distance: ():number => {
            return dataAndFunctions.squareRoot(dataAndFunctions.square((x2-x1))+dataAndFunctions.square((y2-y1)));
        }
    }
    return dataAndFunctions;
}

console.log(app(10, 5, 2, 3).distance());