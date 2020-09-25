// Roman to Integer
function romanToInt(s: string): number {
    
    const map: {[k: string]: number} = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let total = 0, last='';
    for (let idx=0;idx<s.length;idx++) {
        const curr = s[idx];
        total += map[curr];
        if (last === 'I' && (curr === 'V' || curr === 'X')) total -= 2
        else if (last === 'X' && (curr === 'L' || curr === 'C')) total -= 20
        else if (last === 'C' && (curr === 'D' || curr === 'M')) total -= 200
        last = curr
    }
    
    return total;
};
