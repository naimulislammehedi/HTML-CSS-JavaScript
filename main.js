function analyzeText(str) {    
    if (typeof str !== 'string' || str.trim() === '') {
        return "Invalid";
    }
    
    const words = str.trim().split(/\s+/);
    
    const longestWord = words.reduce((longest, current) => 
        current.length > longest.length ? current : longest
    , "");
    
    const charCount = str.replace(/\s/g, '').length;
    
    return { longwords: longestWord, token: charCount };
}

console.log(analyzeText("I am a little honest person"))