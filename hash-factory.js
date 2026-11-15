
class HashClass{

    constructor(){
        this.loadFactor=0.75;
        this.buckets=  new Array(16).fill(null);       
    }
    
    hash(key) {
        const primNumber=31;
        let hashCode=0;

        for(let cha of key) {
            hashCode= primNumber*hashCode + cha.charCodeAt(0);
        }

        return hashCode%16;
    }

    set(key, value) {
        
        const hashKey= this.hash(key);
        if (hashKey < 0 || hashKey >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

    }

}

let hash1= new HashClass();
console.log(hash1.hash("Logan")%16);