/**
 * Problem 146: Implement a LRU cache that takes in the key and value as integer.
 * Given a max capacity, it uses the capacity to ensure that the eldest entry is removed from the cache.
 * 
 * Solution: This solution uses an internal collection implementation in Java - LinkedHashMap which uses an internal
 * structure of HashMap and Doubly Linked List and hence ensures that the access or insertion order is maintained.
 * It uses an overridden method to configure when and how the item should be removed.
 * 
 */
class LRUCache {
    
    private final int capacity;
    private final LinkedHashMap<Integer, Integer> cache;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        // Defining the access order for the doubly linked list internally.
        this.cache = new LinkedHashMap<Integer, Integer>(capacity, 0.75f, true) {
            public boolean removeEldestEntry(Map.Entry entry) {
                return size() > capacity;
            }
        };
    }
    
    public int get(int key) {
        Integer value = this.cache.get(key);
        if (value == null) return -1;
        return value;
    }
    
    public void put(int key, int value) {
        if (this.cache.get(key) != null) {
            this.cache.remove(key);
        }
        
        this.cache.put(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */