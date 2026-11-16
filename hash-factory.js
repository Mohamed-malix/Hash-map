
class HashClass{

    constructor() {
        this.loadFactor=0.75;
        this.buckets=  new Array(16).fill(null);
        this.keyPair=[];   
        this.leng=0;    
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
        this.keyPair.push([key, value]);
        this.leng++;

        return this.buckets[hashKey];

    }

    get(key) {
        let hashKey= this.hash(key);

        if(this.buckets[hashKey]){
            return this.buckets[hashKey];
        }
        return "key not found";
    }

    length() {
        return this.leng;
    }

    has(key) {
        let hashKey= this.hash(key);
        
        if(this.buckets[hashKey]){
            return true;
        }
        return "key not found";
    }

    clear() {
        this.buckets.forEach((cha) => cha=null);
    }

    values() {
        const keysList= [];

        for(let k of this.buckets) {
            if(k!=null){
                keysList.push(k);
            }
        }

        return keysList
    }

    keys() {

        let keys=[];
        this.keyPair.forEach((key) => {
            keys.push(key[0]);
        })

        return keys;
    }

    entries() {
        return this.keyPair;
    }

    remove(key) {
        let hashKey= this.hash(key);
        
        if(this.buckets[hashKey]){
            this.buckets.splice(hashKey, 1);
            this.leng--;
            return;
        }
        return "key not found";
    }

}

let hash1= new HashClass();
hash1.set("Me", "Super");
hash1.set("Logan", "Kool");
hash1.set("Eliet", "Outstanding");
console.log(hash1.clear());
console.log(hash1.entries());