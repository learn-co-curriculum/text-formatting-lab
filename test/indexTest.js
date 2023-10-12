require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("index.html", function () {
  it("contains <h1> opening and closing tags", function () {
    const h1 = document.querySelector("h1");
    expect(h1).to.exist;
    expect(h1.outerHTML).to.include("</h1>");
  });

  it("contains <h2> opening and closing tags", function () {
    const h2 = document.querySelector("h2");
    expect(h2).to.exist;
    expect(h2.outerHTML).to.include("</h2>");
  });

  it("contains <h3> opening and closing tags", function () {
    const h3 = document.querySelector("h3");
    expect(h3).to.exist;
    expect(h3.outerHTML).to.include("</h3>");
  });

  it("contains two sets of opening and closing <p> tags", function () {
    const pTags = document.querySelectorAll("p");
    expect(pTags).to.have.lengthOf.at.least(2);

    pTags.forEach((p) => {
      expect(p.outerHTML).to.include("</p>");
    });
  });
});
