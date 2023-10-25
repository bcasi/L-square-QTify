describe("Qtify Automation", () => {
    beforeEach(() => {
      cy.visit("https://example.com/");
      // cy.visit("https://example.com/");
    });
  
    describe("Cards Tests", () => {
      before(() => cy.stubApiCalls());
  
      it("should match the count of top, and new album cards with their respective API responses", () => {
        // Check top albums
        cy.wait("@getTopAlbums").then((interception) => {
          const topAlbums = interception.response.body;
          let topAlbumElements = [];
  
          topAlbums.forEach((album) => {
            cy.get("body")
              .contains(album.title)
              .should("exist")
              .then(($title) => {
                if ($title.length > 0) {
                  topAlbumElements.push($title);
                }
              });
          });
  
          // After checking all top albums, assert the count
          cy.wrap(topAlbumElements).should("have.length", topAlbums.length);
        });
  
        // Check new albums
        cy.wait("@getNewAlbums").then((interception) => {
          const newAlbums = interception.response.body;
          let newAlbumElements = [];
  
          newAlbums.forEach((album) => {
            cy.get("body")
              .contains(album.title)
              .should("exist")
              .then(($title) => {
                if ($title.length > 0) {
                  newAlbumElements.push($title);
                }
              });
          });
  
          // After checking all new albums, assert the count
          cy.wrap(newAlbumElements).should("have.length", newAlbums.length);
        });
      });
    });
  });
  