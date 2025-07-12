const fs = require("fs");
const chai = require("chai");
const { JSDOM } = require("jsdom");

const expect = chai.expect;

describe("Pricing Tests", () => {
  let dom;
  let document;

  before((done) => {
    const html = fs.readFileSync("src/index.html", "utf-8");
    dom = new JSDOM(html);
    document = dom.window.document;
    done();
  });

  it("Page should have a title", () => {
    const title = document.querySelector("title");
    expect(title).to.exist;
  });

  it("Page Container should exist", () => {
    const container = document.querySelector(
      "#page-container.bg-gray-200.mx-auto"
    );
    expect(container).to.exist;
  });

  it("Header section should exist with title", () => {
    const title = document.querySelector(".text-4xl");
    expect(title.textContent.toLowerCase()).to.include("pricing");
  });

  it("Header section should have subtitle", () => {
    const subtitle = document.querySelector(".text-lg.text-gray-700");
    expect(subtitle.textContent.toLowerCase()).to.include(
      "signup for a free 14-day trial today! no payment needed."
    );
  });

  it("Decorative line should be below subtitle", () => {
    const decorativeLine = document.querySelector(".bg-pink-500.w-24");
    expect(decorativeLine).to.exist;
  });

  // Check for Basic Card
  it("Basic Card should have required content and styles", () => {
    const basicCard = document.querySelector("#basic-pricing-card");
    expect(basicCard).to.exist;
    expect(basicCard.textContent.toLowerCase()).to.include("basic");
    expect(basicCard.textContent.toLowerCase()).to.include("$7");
  });

  // Check for Plus Card
  it("Plus Card should have required content and styles", () => {
    const plusCard = document.querySelector("#popular-pricing-card");
    expect(plusCard).to.exist;

    const highlightBanner = plusCard.querySelector(
      ".text-sm.text-white.bg-pink-500"
    );
    expect(highlightBanner.textContent.toLowerCase()).to.include(
      "most popular"
    );
    expect(plusCard.textContent.toLowerCase()).to.include("plus");
    expect(plusCard.textContent.toLowerCase()).to.include("$15");
  });

  // Check for Pro Card
  it("Pro Card should have required content and styles", () => {
    const proCard = document.querySelector("#pro-pricing-card");
    expect(proCard).to.exist;
    expect(proCard.textContent.toLowerCase()).to.include("pro");
    expect(proCard.textContent.toLowerCase()).to.include("$30");
  });

  // Check for Call to Action Button in all cards
  it("Each card should have the required Call to Action button", () => {
    const cards = document.querySelectorAll(
      "#basic-pricing-card, #popular-pricing-card, #pro-pricing-card"
    );

    expect(cards.length).to.equal(3);

    cards.forEach((card) => {
      const ctaButton = card.querySelector(
        "a.bg-indigo-500.text-lg.text-white.shadow-xl"
      );
      expect(ctaButton).to.exist;
      expect(ctaButton.textContent.toLowerCase()).to.include("try it free");
    });
  });

  it("Page container elements should use flex classes", () => {
    const flexElement = document.querySelector(
      "#page-container .flex.flex-col"
    );
    expect(flexElement).to.exist;
  });
});
