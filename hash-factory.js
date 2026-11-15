
class HashClass{

    constructor() {
        this.loadFactor=0.75;
        this.buckets=  new Array(16).fill(null);       
    }

    get(key) {
        let hashKey= this.hash(key);
        
        if(this.buckets[hashKey]){
            return this.buckets[hashKey];
        }
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
        if (hashKey < 0 || hashKey >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        this.buckets[hashKey]= value;
        return this.buckets[hashKey];

    }

}

let hash1= new HashClass();
console.log(hash1.set("Logan", "Kool"));
console.log(14/16);