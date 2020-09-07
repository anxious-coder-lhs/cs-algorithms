// Compressing the string in place using the run-length encoding technique.
function compress(chars: string[]): number {

    // Returning as it is, since it cannot be done.
    if (chars.length <= 1) {
        return chars.length;
    }
    
    // Using 3 pointers: read, write and anchor.
    let write = 0, anchor = 0;
    
    // Moving the read pointer continuously for O(n) operation.
    chars.forEach((char, read) => {
    
        // Checking boundary conditions for writing where the contiguous array is stopped.
        if (read + 1 === chars.length || chars[read+1] != char) {
            const count = read - anchor + 1
            chars[write++] = char;
            if (count > 1) {
                for (const digit of count.toString()) {
                    chars[write++] = digit;
                }
            }
            
            // Updating anchor for next consequitive group reading.
            anchor = read + 1;
        }
    })
    
    return write;
};
