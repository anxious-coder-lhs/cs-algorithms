/**
 * The read4 API is defined in the parent class Reader4.
 *     int read4(char[] buf4); 
 */
/**
 * Problem: Leetcode 158
 */
public class Solution extends Reader4 {
    
    char[] buffer = new char[16];
    int writePtr = 0;
    int readPtr = 0;
     
    /**
     * @param buf Destination buffer
     * @param n   Number of characters to read
     * @return    The number of actual characters read
     */
    public int read(char[] buf, int n) {
        if (writePtr - readPtr >= n) {
            // All data is already available in the buffer, read and return
            this.copyRange(buffer, readPtr, n + readPtr, buf, 0);
            this.readPtr += n;
            return n;
        } else {
            // Not enough items are available, try to get more items into the internal buffer.
            this.readInternal(n - (writePtr - readPtr));
            if (writePtr - readPtr >= n) {
                // All the n items can be fetched and updated.
                this.copyRange(buffer, readPtr, n + readPtr, buf, 0);
                this.readPtr += n;
                return n;
            } else {
                this.copyRange(buffer, readPtr, writePtr, buf, 0);
                int itemsRead = writePtr - readPtr;
                this.readPtr = writePtr;
                return itemsRead;
            }
        }
    }
    
    private void readInternal(int n) {
        int readItems = n % 4 == 0 ? n : (n/4 + 1) * 4;
        
        if (this.buffer.length < this.writePtr + readItems) {
            this.expandInternalBuffer(this.writePtr + readItems);
        }
        
        while(readItems > 0) {
            char[] buff4 = new char[4];
            int newItems = this.read4(buff4);
            if (newItems == 0) break;
            this.copyRange(buff4, 0, newItems, this.buffer, this.writePtr);
            this.writePtr += newItems;
            readItems -= newItems;
        }
    }
    
    private void expandInternalBuffer(int length) {
        int newLength = (length / 16 + 1) * 16;
        char[] newBuffer = new char[newLength];
        this.copyRange(buffer, 0, this.writePtr, newBuffer, 0);
        this.buffer = newBuffer;
    }
    
    // Copy the items from the input buffer to the output buffer.
    private void copyRange(char[] source,
                     int sourceBeg,
                     int sourceEnd,
                     char[] target,
                     int targetBeg) {
        // for (int idx = sourceBeg; idx < sourceEnd; idx++) {
        //     target[targetBeg++] = source[idx];
        // }
        System.arraycopy(source, sourceBeg, target, targetBeg, sourceEnd - sourceBeg);
    }
}