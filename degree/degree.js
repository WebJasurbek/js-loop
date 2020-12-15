
    let number =  +prompt('Please enter a number, we  will show you its level')
    
    let l =  +prompt('please enter the its level')
    
    let answer = 1
    
    if (l == 0) {
        alert(answer + 'the response rate cannot be 0')
    }else if (number <= 0) {
        alert('such a number cannot be entered')
    }else {
        for (let i = 1; i <= l; i++) {
            answer = answer * number
            console.log(i);
        }
        
    }
    alert(answer)
    
