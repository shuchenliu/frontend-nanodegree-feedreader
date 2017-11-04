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


        // check each feed for the vadility of its url
         it('each have a valid url', () => {
           allFeeds.forEach(feed => {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });
         });

         // check each feed for the vadility of its name
         it('each have a valid name', () => {
           allFeeds.forEach(feed => {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });
    });


    /*
    * test if menu is hidden by default
    */
    describe('The menu', () => {

      // If the body contains 'menu-hidden' class
      // the slide-menu will be hidden by shifting to the left of visible
      // area, as defined in the style.css
      it('is hidden by default', ()=> {
        expect(document.body.classList.contains('menu-hidden')).toBe(true);
      });

      // Create click event and check if the 'menu-hidden' class is toggled
      // after each click
      it('will change its visibility after each click', () => {
        const click = new Event('click');
        const menuIcon = document.getElementsByClassName('menu-icon-link')[0];

        menuIcon.dispatchEvent(click);
        expect(document.body.classList.contains('menu-hidden')).toBe(false);

        menuIcon.dispatchEvent(click);
        expect(document.body.classList.contains('menu-hidden')).toBe(true);
      });
    });

    /*
    * test if initial entries are loaded
    */
    describe('Initial Entries', () => {
      // set up beforeEach to test asynchronous function
      beforeEach(done => {
        loadFeed(0, () => {
          done();
        });
      });

      // test if the container initially contains 1 or more entries
      it('should be defined and non-empty', (done) => {
        const container = document.getElementsByClassName('feed')[0].children;
        expect(container).toBeDefined();
        expect(container.length === 0).toBe(false);
        done();
      });
    });


    /*
    * test if new feed is properly loaded
    */
    describe('New Feed Selection', () => {

      let feedId = 0;
      let prevHeadRef = '';

      // call loadFeed() before each check
      beforeEach(done => {
        // update target by using feedId++
        loadFeed(feedId++, () => {
          done();
        });
      });

      // loop through all feed source
      it('has been successfully loaded for feed 0', done => {
          const container = document.getElementsByClassName('feed')[0].children;

          // check if the feed is loaded
          expect(container.length).toBeDefined();
          expect(container.length > 0).toBe(true);

          // check if new feed is loaded
          let nowHeadRef = container[0].href;
          expect(nowHeadRef).not.toBe(prevHeadRef);
          prevHeadRef = nowHeadRef;
          done();
      });


      it('has been successfully loaded for feed 1', done => {
          const container = document.getElementsByClassName('feed')[0].children;

          // check if the feed is loaded
          expect(container.length).toBeDefined();
          expect(container.length > 0).toBe(true);

          // check if new feed is loaded
          let nowHeadRef = container[0].href;
          expect(nowHeadRef).not.toBe(prevHeadRef);
          prevHeadRef = nowHeadRef;
          done();
      });

      it('has been successfully loaded for feed 2', done => {
          const container = document.getElementsByClassName('feed')[0].children;

          // check if the feed is loaded
          expect(container.length).toBeDefined();
          expect(container.length > 0).toBe(true);

          // check if new feed is loaded
          let nowHeadRef = container[0].href;
          expect(nowHeadRef).not.toBe(prevHeadRef);
          prevHeadRef = nowHeadRef;
          done();
      });

      it('has been successfully loaded for feed 3', done => {
          const container = document.getElementsByClassName('feed')[0].children;

          // check if the feed is loaded
          expect(container.length).toBeDefined();
          expect(container.length > 0).toBe(true);

          // check if new feed is loaded
          let nowHeadRef = container[0].href;
          expect(nowHeadRef).not.toBe(prevHeadRef);
          prevHeadRef = nowHeadRef;
          done();
      });

    });
}());
