type Node = {
    value: number
    key: number
    prev: Node | null
    next: Node | null
}

class DLL {
    
    head: Node | null
    tail: Node | null
    count: number
    
    constructor() {
        this.count = 0
        this.head = null
        this.tail = null
    }
    
    append(node: Node) {
        if (this.count === 0) {
            // Empty List for now.
            this.head = this.tail = node;
        } else {
            node.prev = this.tail
            if (this.tail !== null) this.tail.next = node
            this.tail = node
        }
        this.count++
    }

    removeFromHead() {
        if (this.head !== null) {
            this.head = this.head.next
            if (this.head !== null) this.head.prev = null
        }
    }

    removeFromTail() {
        if (this.tail !== null) {
            this.tail = this.tail.prev
            if (this.tail !== null) this.tail.next = null
        }
    }

    remove(node: Node) {
        if (this.head === node) {
            this.removeFromHead()
        } else if (this.tail === node) {
            this.removeFromTail()
        } else {
            if (node.next !== null) node.next.prev = node.prev
            if (node.prev !== null) node.prev.next = node.next
        }
        this.count--
    }
}

/**
 * Problem 146: Implement a LRU cache that takes in the key and value as integer.
 * Given a max capacity, it uses the capacity to ensure that the eldest entry is removed from the cache.
 * 
 * Solution: Uses a map as a dictionary. Additionally, uses a linked list for maintaining the order.
 */
class LRUCache {
    
    cache: Map<number, Node>
    capacity: number
    orderedList: DLL
    
    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map()
        this.orderedList = new DLL()
    }

    get(key: number): number {
        const cacheVal = this.cache.get(key);
        if (cacheVal === undefined) {
            return -1
        } else {
            // Re-Assign the order.
            this.orderedList.remove(cacheVal)
            this.orderedList.append(cacheVal)
            return cacheVal.value
        }
    }

    put(key: number, value: number): void {
        const cacheVal: Node = {
            key,
            value,
            prev: null,
            next: null
        }

        const existingVal = this.cache.get(key)
        if (existingVal !== undefined) {
            // Key already exists, removing it to update the access order.
            this.orderedList.remove(existingVal)
            this.cache.delete(key)
        }

        if (this.cache.size >= this.capacity) {
            const lruItem = this.orderedList.head
            if (lruItem !== null) {
                this.cache.delete(lruItem.key)
                this.orderedList.remove(lruItem)    
            }
        }

        this.orderedList.append(cacheVal)
        this.cache.set(key, cacheVal);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */