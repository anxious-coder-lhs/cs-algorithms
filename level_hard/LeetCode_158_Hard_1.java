/**
 * The read4 API is defined in the parent class Reader4.
 *     int read4(char[] buf4); 
 */
public class Solution extends Reader4 {

    /**
     * Solution uses a buffering approach in order to read and write. The write operation
     * continues to write the elements into the output buffer one step at a time in the iteration
     * loop. The read step updates the internal read buffer when the internal buffer gets empty.
     */
    
    private char[] intBuf = new char[4];
    private int intBufWritePtr = 0;
    private int intBufReadPtr = 0;
    
    /**
     * @param buf Destination buffer
     * @param n   Number of characters to read
     * @return    The number of actual characters read
     */
    public int read(char[] buf, int n) {
        
        int writeLoc = 0;
        
        // Repeat adding new elements till the write location does not reach till n-1
        while (n > writeLoc) {
            if (intBufReadPtr < intBufWritePtr) {
                // If there is something already existing in the input buffers, use it.
                buf[writeLoc++] = intBuf[intBufReadPtr++];
            } else {
                // If not, lets fetch more items and fill the internal buffer for further use.
                int totalItems = this.read4(intBuf);
                intBufReadPtr = 0;
                intBufWritePtr = totalItems;
                if (totalItems == 0) break;
            }
        }
        
        return writeLoc;
    }
}