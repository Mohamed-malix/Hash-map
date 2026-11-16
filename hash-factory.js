
class HashClass{

    constructor() {
        this.leng=0;    
        this.keyPair=[];   
        this.loadFactor=0.75;
        this.numBuckets=16;
        this.buckets=  new Array(this.numBuckets).fill(null);
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
        this.rehash()

        this.buckets[hashKey]= value;
        this.keyPair.push([key, value]);
        this.leng++;

        return this.buckets[hashKey];

    }

    rehash() {
        if(this.leng/this.numBuckets>this.loadFactor) {

            let temp=this.buckets;
            this.numBuckets*=2;
            this.buckets= new Array(this.numBuckets).fill(null);
            for(let i=0; i<temp.length; i++){
                this.buckets[i]=temp[i];
            }

            console.log(this.buckets);
        }
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

    entries() {
        return this.keyPair;
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

    remove(key) {
        let hashKey= this.hash(key);
        
        if(this.buckets[hashKey]){
            this.buckets.splice(hashKey, 1);
            this.leng--;
            return;
        }
        return "key not found";
    }

    clear() {
        // this.buckets.forEach((cha) => cha=null);
        this.buckets=  new Array(16).fill(null);
        this.keyPair=[];   
        this.leng=0;  
    }

}

let test= new HashClass();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('Dragon', 'Darkness')

console.log(test.keys());
