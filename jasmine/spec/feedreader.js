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
  /* This is our first test suite - it is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', () => {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     * */
    it('are defined', () => {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* This is our second test - it loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('have defined and not empty URLs', () => {
      for (const feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      }
    });

    /* This is our third test - it loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('have defined and not empty names', () => {
      for (const feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }
    });
  });

  /* This is our second test suite - it is all about the
   * menu element.
   */
  describe('The menu', () => {
    /* This is our first test - it tests to make sure that the
     * menu is hidden by default. We hide menu element by applying
     * menu-hidden class to the body element.
     * */
    it('is hidden by default', () => {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* This is our second test - it ensures the menu changes
    * visibility when the menu icon is clicked.
    */
    it('changes visibility when the menu icon is clicked', () => {
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  /* This is our third test suite - it is all about the
   * loadFeed function.
   */
  describe('Initial Entries', () => {
    /* This is our first test - it ensures that when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   */
    beforeEach((done) => {
      loadFeed(0, done);
    });

    it('exist when the loadFeed function is called', () => {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });

  /* TODO: Write a new test suite named "New Feed Selection" */

  /* TODO: Write a test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   * Remember, loadFeed() is asynchronous.
   */
}());
