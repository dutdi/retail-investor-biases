# Retail Investor Biases

This is the repository for the tool that allows people to recognize their investment biases and offer solutions to combat with them. The idea is to quantify the percentage of each bias present, and see how useful would retail investors find such a tool in combating their biases.

This project is hosted at [Retail Investor Biases](retail-investor-biases.web.app)

## Platform

This website's logic is similar to [IAT](https://implicit.harvard.edu/implicit/takeatest.html).

**What is the IAT?**

- IAT tests how strongly the participant implicitly associates a concept (e.g. a Stock) with a category (e.g. good or bad, invest or sell)
- The association strength is measured in relative comparison with association of a second concept (e.g. Cryptocurrencies) to the same category, which makes this method particularly applicable to decision contexts where choices are often made between contrasting categories (e.g. the decision to invest in either Stocks or Cryptocurrencies)
- The test operates by presenting pairs of target concepts (e.g. Stocks & Cryptocurrencies) and attributes (e.g. good or bad, return or risk) in two opposing constellations, to find out whether one is more compatible with implicit associations in the respondent’s mind than the other.
- How is a bias detected? If the participant is faster to react to a specific concept and attribute than the opposing constellations, they are biased towards the concept they were faster for.
- For e.g. If participants are faster to react to Cryptocurrencies + Good (in the presence of a contrasting pair, e.g., Stocks + Bad) compared with the opposite pairings (e.g. Cryptocurrencies + Bad and Stocks + Good), they have a bias for Cryptocurrencies

**How is the IAT conducted?**

- The IAT has at max **2 concepts** (for e.g. Stocks & Cryptocurrencies) and **2 categories** (e.g. good or bad). The respondent is then presented with series of items (high return or low return, invest or sell) who must **sort them into the 2 categories**.
- If the respondent is faster to make an association of a concept with a respective category in relative comparison with association of a second concept, they have a bias for the category they were faster for.

---

- An IAT usually has 7 parts:
  1. 2x initial training rounds
  2. 2x "easy” paired tests
  3. 1x training round
  4. 2x "hard" paired tests

## Project Info

**The project is using IAT to help retail investors recognize the following biases:**

- Representativeness heuristic bias
- Anchoring Bias
- Overconfidence Bias
- Herding Bias/Bandwagon effect
- Disposition effect
- Action Bias

The same methodology i.e. 2 Concepts & 2 Categories is being applied. However, instead of items, series of scenarios are being presented to the respondent.
If the respondent is faster to make an association of a concept with a respective category in relative comparison with association of a second concept, they have a bias for the category they were faster for.

## Developers

The website is developed by Tunar Mahmudov and all the logic, inputs, details, and designs are provided by Muneeb Ahmed.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
