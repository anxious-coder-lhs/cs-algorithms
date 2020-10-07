/**
 * Probleml: Design a hit counter that keeps track of the total number of hits in the last 5 minutes.
 * Solution: Uses a bounded buffer of exactly 300 seconds to keep track of the number of hits in that particular second. Each second bucket
 * will keep track of the hits incurred in that particular second. Along with that, it will also keep track of the timestamp associated 
 * with each bucket. This is required so that, when we round over and use the same buckets, we can correlate which time we are looking at
 * with respect to a bucket.
 */
class HitCounter {
    
    hits: number[]
    times: number[]
    
    constructor() {
        this.hits = Array(300).fill(0)
        this.times = Array(300).fill(0);
    }

    hit(timestamp: number): void {
        const pos = timestamp % 300;
        if (this.times[pos] !== timestamp) {
            // Starting over, the last logged timestamp was before 5 mts.
            this.hits[pos] = 1
            this.times[pos] = timestamp
        } else {
            this.hits[pos]++
        }
    }

    getHits(timestamp: number): number {
        let count = 0
        for (let idx = 0; idx < 300; idx++) {
            if (timestamp - this.times[idx] < 300) {
                // This existing time tick hit value is obselete and should not be added.
                count += this.hits[idx]
            }
        }
        
        return count;
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
