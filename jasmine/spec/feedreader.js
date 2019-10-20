/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * This test loops through all the feed and make sure the feed has
         * URL and this URL is not empty
         */
        it('URL is defined and is not empty',function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });

        /* TODO: Write a test that loops through each feed
         * This test loops through all the feed and make sure the feed has
         * name and this name is not empty
         */
        it('name is defined and is not empty',function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });

    
    /* TODO: Write a new test suite named "The menu" */

    describe('The menu',function(){
        let body = document.querySelector('body'); // selecting body element

        // This test ensures the menu element is hidden by default
        it('hidden by default',function(){
        expect(body.className).toBe('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * This test ensures the menu changes visibility when the menu icon is clicked.
          */

         it('can be toggle between display & hide',function(){
           body.classList.toggle('menu-hidden');
           expect(body.className).not.toBe('menu-hidden');
           body.classList.toggle('menu-hidden');
           expect(body.className).toBe('menu-hidden');
        });
      });

    /* TODO: Write a new test suite named "Initial Entries" 
    *  This test for checking that feed load very smoothly every time
    *  and at least the feed has a single element using BeforeEach which 
    *  will help with the asynchronous.
    */
    describe('Initial Entries',function(){
        let entries;
        beforeEach(function(done){
            loadFeed(0,function(){ 
                entries= Array.from(document.querySelectorAll('.feed .entry'));
                done();
            });
        });
        // check the feed has at least single entry 
        it('feed should has more than 0 entry',function(){
            expect(entries.length).toBeGreaterThan(0);
        });
    });
        
        
    /* TODO: Write a new test suite named "New Feed Selection" 
    *  I used to beforeEach to load oldContent and newContent 
    *  and then write test to compare them, making sure the content really change
    */
    describe('New Feed Selection',function(){
        let oldContent, newContent;

        beforeEach(function(done){
            loadFeed(0,function(){
                oldContent= Array.from(document.querySelectorAll('.feed'));
            loadFeed(1,function(){
                newContent= Array.from(document.querySelectorAll('.feed'));
                done();
            });
            });
        });
        //  here will test oldContent != the newContent
        it('The content can load new feed',function(){
            expect(oldContent).not.toBe(newContent);
        });
    });
    
}());

