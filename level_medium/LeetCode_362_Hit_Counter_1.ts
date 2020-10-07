type Hit = {
    timestamp: number
    hits: number
}

/**
* Problem: Designing a hit counter which counts the total number of hits in the last 5 minutes.
* Solution: Uses a queue to keep on appending the value of the hits at each request. We do this by using a queue. If the queue contains a value for the same timestamp,
* we simply update it. If it does not contain, we increment it. While getting the values, we need to add all the values that are within 5 minutes of interval for counting
* the results. Also, we need to trim all the values that were called before 5 minutes.
*/
class HitCounter {
    
    hits: Hit[]
    
    constructor() {
        this.hits = []
    }

    hit(timestamp: number): void {
        const last = this.hits.length > 0 ? this.hits[this.hits.length - 1] : undefined
        if (last && last.timestamp === timestamp) {
            last.hits++
        } else {
            this.hits.push({
                timestamp,
                hits: 1
            });
        }
    }

    getHits(timestamp: number): number {
        let pos = this.hits.length - 1
        let hitItem = this.hits[pos]
        let total = 0
        while(hitItem !== undefined && timestamp - hitItem.timestamp < 300) {
            total += hitItem.hits;
            pos--
            hitItem = this.hits[pos]
        }
        
        if (pos > 0) {
            this.hits = this.hits.slice(pos + 1)
        }
        
        return total;
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
