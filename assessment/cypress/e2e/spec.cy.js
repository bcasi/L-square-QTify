describe("Qtify Automation", () => {
    beforeEach(() => {
      cy.visit("https://example.com/");
      // cy.visit("https://example.com/");
    });
    describe("Hero Section Tests", () => {
      it('should find the parent element with "100 Thousand Songs, ad-free" text (case-insensitive) and an image', () => {
        // Find element containing the text (case-insensitive)
        cy.contains(/100 Thousand Songs, ad-free/i).then(($textEl) => {
          let currentEl = $textEl;
          while (currentEl.length > 0 && !currentEl.find("img").length) {
            currentEl = currentEl.parent();
          }
  
          if (currentEl.find("img").length) {
            cy.wrap(currentEl).as("parentWithImage");
          } else {
            assert.fail("No parent with the specified text and an image found.");
          }
        });
      });
  
      it("should check the background color of the parent element", () => {
        // Locate the parent element with the specified text (case-insensitive)
        cy.contains(/100 Thousand Songs, ad-free/i)
          .closest(":has(img)")
          .as("targetElement");
  
        // Check the background color of the parent element
        cy.get("@targetElement")
          .invoke("css", "background-color")
          .then((bgColor) => {
            // Assuming a variant of black has RGB values close to 0
            const rgba = bgColor.match(
              /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,?[\s+]?([\d.]+)?[\s+]?/i
            );
            const red = parseInt(rgba[1]);
            const green = parseInt(rgba[2]);
            const blue = parseInt(rgba[3]);
  
            // Check if the color is a variant of black
            expect(red).to.be.lessThan(50);
            expect(green).to.be.lessThan(50);
            expect(blue).to.be.lessThan(50);
          });
      });
    });
  });
  