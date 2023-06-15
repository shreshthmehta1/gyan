const puppeteer = require("puppeteer");

(async () => 
{
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250, // slow down by 250ms
  });
  const page = await browser.newPage();
  await page.goto("https://engagementteam1.typeform.com/to/pC8r7d81");
  await page.click("#root > main > div.base-styles__BaseStyle-sc-1oava9b-0.htZiTp > div.animate__AnimateStyled-nw4u3g-0.jFfXbt > div > section > div.screen__StickyFooter-sc-9mfxmi-10.kGFHJJ > div.submit__Root-sc-1ra8r4w-0.ldZReJ")
  await page.click("#block-c209d2e7-a1a9-4ada-ad25-a6caf38fb539 > div > div > div > div > div > div > div > div.responsive-spacer__SpacerWrapper-sc-2bvre0-0.iFWjeU > div:nth-child(1) > div > div.dropdown__InputWrapper-sc-1w8q90m-3.gaaiai > button")
  
  //*[@id="dropdown-c209d2e7-a1a9-4ada-ad25-a6caf38fb539-rfcDLuAeud0KmNHl-option-3"]
  await page.select("#dropdown-c209d2e7-a1a9-4ada-ad25-a6caf38fb539-rfcDLuAeud0KmNHl-option-3 > div.checkbox-choice__ChoiceContent-m4g23g-1.erBFfO > div > div", "Sydney South: Car")
  await page.screenshot({ path: "example.png" });
  console.log("here");
  await browser.close();
})();

//*[@id="dropdown-c209d2e7-a1a9-4ada-ad25-a6caf38fb539-rfcDLuAeud0KmNHl-option-3"]/div[1]/span
// document.querySelector("#dropdown-c209d2e7-a1a9-4ada-ad25-a6caf38fb539-rfcDLuAeud0KmNHl-option-3 > div.checkbox-choice__ChoiceContent-m4g23g-1.erBFfO > span")
// #dropdown-c209d2e7-a1a9-4ada-ad25-a6caf38fb539-rfcDLuAeud0KmNHl-option-3 > div.checkbox-choice__ChoiceContent-m4g23g-1.erBFfO > span
