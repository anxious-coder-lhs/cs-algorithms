/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface HtmlParser {
 *     public List<String> getUrls(String url) {}
 * }
 */
class Solution {
    /**
     * Solution uses the approach for the DFS. However, rather than creating an immutable function and collecting all the elements that have
     * been processed and returned successfully from the recursive calls, we keep on appending them to the final set.
     * 
     * This set is finally returned as a list.
     */
    public List<String> crawl(String startUrl, HtmlParser htmlParser) {
        final String hostName = this.getHostName(startUrl);
        final Set<String> visitedUrls = Collections.synchronizedSet(new HashSet());
        this.crawlUrl(startUrl, htmlParser, hostName, visitedUrls);
        return new ArrayList(visitedUrls);
    }
    
    private void crawlUrl(String startUrl, 
                                  HtmlParser htmlParser, 
                                  String domainName,
                                  Set<String> visitedUrls) {
        
        visitedUrls.add(startUrl);
        htmlParser.getUrls(startUrl)
            .parallelStream()
            .filter(url -> getHostName(url).equals(domainName))
            .filter(url -> !visitedUrls.contains(url))
            .forEach(url -> crawlUrl(url, htmlParser, domainName, visitedUrls));
    }
    
    private String getHostName(String url) {
        final int index = url.indexOf("/", 7); // Finding the indexes for the url post protocol.
        return (index == -1) ? url : url.substring(0, index);
    }
}