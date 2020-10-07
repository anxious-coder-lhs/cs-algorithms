
/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface HtmlParser {
 *     public List<String> getUrls(String url) {}
 * }
 */
class Solution {
    /**
     * Solution is going to rely on the parallel streams to spin up parallel immutable tasks in a multithreaded fashion. This is ideal as it
     * would use a default thread pool on its own. Alternatively, a thread pool can also be created for the same.
     * 
     * We use a DFS mechanism for crawling all the web pages. For the DFS function to operate, we get all the pages of the url and recursively
     * call the operation to recursively traverse all the child pages while maintaining a set to see if the url has already been crawled before.
     * 
     * It uses the Java Streams to collect all the items in the collection and return it by recursively computing the rest of the items and then
     * crawling it. This is a complete immutable functional approach, alternatively, it can also be done recursively, by using an additional
     * storage for the resposnes and using it for the results.
     */
    public List<String> crawl(String startUrl, HtmlParser htmlParser) {
        final String hostName = this.getHostName(startUrl);
        final Set<String> visitedUrls = Collections.synchronizedSet(new HashSet());
        return this.crawlUrl(startUrl, htmlParser, hostName, visitedUrls)
            .collect(Collectors.toList());
    }
    
    private Stream<String> crawlUrl(String startUrl, 
                                  HtmlParser htmlParser, 
                                  String domainName,
                                  Set<String> visitedUrls) {
        
        visitedUrls.add(startUrl);
        final Stream<String> childStream = htmlParser.getUrlsQ(startUrl)
            .parallelStream()
            .filter(url -> getHostName(url).equals(domainName))
            .filter(url -> !visitedUrls.contains(url))
            .flatMap(url -> crawlUrl(url, htmlParser, domainName, visitedUrls));
            
        return Stream.concat(Stream.of(startUrl), childStream);
    }
    
    private String getHostName(String url) {
        final int index = url.indexOf("/", 7); // Finding the indexes for the url post protocol.
        return (index == -1) ? url : url.substring(0, index);
    }
}