
const end1arrow1 = document.getElementById('end1arrow1');
const end1arrow2 = document.getElementById('end1arrow2');
const end1arrow3 = document.getElementById('end1arrow3');

const end2arrow1 = document.getElementById('end2arrow1');
const end2arrow2 = document.getElementById('end2arrow2');
const end2arrow3 = document.getElementById('end2arrow3');

const end3arrow1 = document.getElementById('end3arrow1');
const end3arrow2 = document.getElementById('end3arrow2');
const end3arrow3 = document.getElementById('end3arrow3');

const end4arrow1 = document.getElementById('end4arrow1');
const end4arrow2 = document.getElementById('end4arrow2');
const end4arrow3 = document.getElementById('end4arrow3');

const end5arrow1 = document.getElementById('end5arrow1');
const end5arrow2 = document.getElementById('end5arrow2');
const end5arrow3 = document.getElementById('end5arrow3');

const end6arrow1 = document.getElementById('end6arrow1');
const end6arrow2 = document.getElementById('end6arrow2');
const end6arrow3 = document.getElementById('end6arrow3');

const end7arrow1 = document.getElementById('end7arrow1');
const end7arrow2 = document.getElementById('end7arrow2');
const end7arrow3 = document.getElementById('end7arrow3');

const end8arrow1 = document.getElementById('end8arrow1');
const end8arrow2 = document.getElementById('end8arrow2');
const end8arrow3 = document.getElementById('end8arrow3');

const end9arrow1 = document.getElementById('end9arrow1');
const end9arrow2 = document.getElementById('end9arrow2');
const end9arrow3 = document.getElementById('end9arrow3');

const end10arrow1 = document.getElementById('end10arrow1');
const end10arrow2 = document.getElementById('end10arrow2');
const end10arrow3 = document.getElementById('end10arrow3');

const end1total = document.getElementById('end1total')
const end2total = document.getElementById('end2total')
const end3total = document.getElementById('end3total')
const end4total = document.getElementById('end4total')
const end5total = document.getElementById('end5total')
const end6total = document.getElementById('end6total')
const end7total = document.getElementById('end7total')
const end8total = document.getElementById('end8total')
const end9total = document.getElementById('end9total')
const end10total = document.getElementById('end10total')

const end1Xcount = document.getElementById('end1Xcount')
const end2Xcount = document.getElementById('end2Xcount')
const end3Xcount = document.getElementById('end3Xcount')
const end4Xcount = document.getElementById('end4Xcount')
const end5Xcount = document.getElementById('end5Xcount')
const end6Xcount = document.getElementById('end6Xcount')
const end7Xcount = document.getElementById('end7Xcount')
const end8Xcount = document.getElementById('end8Xcount')
const end9Xcount = document.getElementById('end9Xcount')
const end10Xcount = document.getElementById('end10Xcount')



function sumEnd() {

    function charToInt(c){
        acceptableArr = ['1','2','3','4','5','6','7','8','9','10','x','X','0','']
        if (n=acceptableArr.includes(c)){
        switch(c){
            
            case 'X': return 10;
            case 'x': return 10;
            case '': return 0;
            case '1': return 1;
            case '2': return 2;
            case '3': return 3;
            case '4': return 4;
            case '5': return 5;
            case '6': return 6;
            case '7': return 7;
            case '8': return 8;
            case '9': return 9;
            case '10': return 10;
            break;

        }
        }
    }

    function xCount(x){
        switch(x){
            case 'X': return 1;
            case 'x': return 1;
            case (x !== 'x' || x !=='X'): 0;
        }
    }
    end1total.innerHTML=(charToInt($(end1arrow1).val()) || 0) + (charToInt($(end1arrow2).val()) || 0) + (charToInt($(end1arrow3).val()) || 0)
    end2total.innerHTML=(charToInt($(end2arrow1).val()) || 0) + (charToInt($(end2arrow2).val()) || 0) + (charToInt($(end2arrow3).val()) || 0)
    end3total.innerHTML=(charToInt($(end3arrow1).val()) || 0) + (charToInt($(end3arrow2).val()) || 0) + (charToInt($(end3arrow3).val()) || 0)
    end4total.innerHTML=(charToInt($(end4arrow1).val()) || 0) + (charToInt($(end4arrow2).val()) || 0) + (charToInt($(end4arrow3).val()) || 0)
    end5total.innerHTML=(charToInt($(end5arrow1).val()) || 0) + (charToInt($(end5arrow2).val()) || 0) + (charToInt($(end5arrow3).val()) || 0)
    end6total.innerHTML=(charToInt($(end6arrow1).val()) || 0) + (charToInt($(end6arrow2).val()) || 0) + (charToInt($(end6arrow3).val()) || 0)
    end7total.innerHTML=(charToInt($(end7arrow1).val()) || 0) + (charToInt($(end7arrow2).val()) || 0) + (charToInt($(end7arrow3).val()) || 0)
    end8total.innerHTML=(charToInt($(end8arrow1).val()) || 0) + (charToInt($(end8arrow2).val()) || 0) + (charToInt($(end8arrow3).val()) || 0)
    end9total.innerHTML=(charToInt($(end9arrow1).val()) || 0) + (charToInt($(end9arrow2).val()) || 0) + (charToInt($(end9arrow3).val()) || 0)
    end10total.innerHTML=(charToInt($(end10arrow1).val()) || 0) + (charToInt($(end10arrow2).val()) || 0) + (charToInt($(end10arrow3).val()) || 0)

    end1Xcount.innerHTML=(xCount($(end1arrow1).val()) || 0) + (xCount($(end1arrow2).val()) || 0) + (xCount($(end1arrow3).val()) || 0)
    end2Xcount.innerHTML=(xCount($(end2arrow1).val()) || 0) + (xCount($(end2arrow2).val()) || 0) + (xCount($(end2arrow3).val()) || 0)
    end3Xcount.innerHTML=(xCount($(end3arrow1).val()) || 0) + (xCount($(end3arrow2).val()) || 0) + (xCount($(end3arrow3).val()) || 0)
    end4Xcount.innerHTML=(xCount($(end4arrow1).val()) || 0) + (xCount($(end4arrow2).val()) || 0) + (xCount($(end4arrow3).val()) || 0)
    end5Xcount.innerHTML=(xCount($(end5arrow1).val()) || 0) + (xCount($(end5arrow2).val()) || 0) + (xCount($(end5arrow3).val()) || 0)
    end6Xcount.innerHTML=(xCount($(end6arrow1).val()) || 0) + (xCount($(end6arrow2).val()) || 0) + (xCount($(end6arrow3).val()) || 0)
    end7Xcount.innerHTML=(xCount($(end7arrow1).val()) || 0) + (xCount($(end7arrow2).val()) || 0) + (xCount($(end7arrow3).val()) || 0)
    end8Xcount.innerHTML=(xCount($(end8arrow1).val()) || 0) + (xCount($(end8arrow2).val()) || 0) + (xCount($(end8arrow3).val()) || 0)
    end9Xcount.innerHTML=(xCount($(end9arrow1).val()) || 0) + (xCount($(end9arrow2).val()) || 0) + (xCount($(end9arrow3).val()) || 0)
    end10Xcount.innerHTML=(xCount($(end10arrow1).val()) || 0) + (xCount($(end10arrow2).val()) || 0) + (xCount($(end10arrow3).val()) || 0)
}

const userNameEL=document.getElementById('greeting')
const emailVal = sessionStorage.getItem('username')
const user = session.username

console.log(user)
userNameEL.innerHTML=emailVal;