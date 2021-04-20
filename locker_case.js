module.exports = (x) => {
    floor_number = 1;
    flag_nine = true;
    flag_three = false;
    flag_seven = false;
    flag_two = false;
    temp = [];
    if (Number.isInteger(x) && x > 0){
        for(i = 1; i <= x; i++){
            temp.push(i);
            if (x==i){
                return 'Locker on floor ' + floor_number
                // console.log('hi');
            }
            else if (flag_nine && temp.length==9){
                floor_number+= 1
                flag_nine = false
                flag_three = true
                temp = []
            }
            else if (flag_three && temp.length==3){
                floor_number+= 1
                flag_three = false
                flag_seven = true
                temp = []
            }
            else if (flag_seven && temp.length==7){
                floor_number+= 1
                flag_seven = false
                flag_two = true
                temp = []
            }
            else if (flag_two && temp.length==2){
                floor_number += 1
                flag_two = false
                flag_nine = true
                temp = []
            }
        }
    } else {
        return 'Please input a valid number'
    }
}
// console.log(locker_case(0));