import representativenessBiasTable from '../img/representativeness-bias-table.png';
import anchoringBiasTable from '../img/anchoring-bias-table.png';
import overconfidenceBiasTable from '../img/overconfidence-bias-table.png';
import herdingBiasTable from '../img/herding-bias-table.png';
import dispositionEffectTable from '../img/disposition-effect-table.png';
import actionBiasTable from '../img/action-bias-table.png';

export const BiasEducationCenter = [
  {
    bias: 'Bias #1: Representativeness Heuristic Bias',
    description:
      'The representativeness bias describes the event in which people might confuse the probabilities of two things or events to be more correlated than they actually are. In the world of investment, this can take the form of investors making decisions based on their previous experiences, often wrongly judging that something is more representative than it actually is.',
    categoriesAndItems: representativenessBiasTable,
    tips: '1. Categorization is fundamental to our perception of the world, and therefore, it is very difficult to completely avoid the representativeness bias. However, being aware of it is a good start: research has shown that when people become aware that they are using a heuristic, they often correct their judgment.\n2.  Pointing out other people’s reliance on representativeness, and asking them to do the same for you, provides useful feedback that might help to avoid representative bias.\n3. Other researchers have tried to reduce the effects of the representativeness bias by encouraging people to “think like statisticians”. These nudges do seem to help, but the problem is that without an obvious cue, people don’t think to use their statistical knowledge - not even educated people, such as graduate students.',
    part1TimeSpent: 0,
    part2TimeSpent: 0,
    part3TimeSpent: 0,
    part4TimeSpent: 0,
    questions: [
      {
        part: 'Part 1',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Representative Bias"\n2.Put a right finger on I key for items that belong to the category "Not a Bias"',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 1',
        prompt:
          'Since Google`s stock has offered great returns in the past, it will continue doing so.',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'Amazon`s stock has offered  great returns in the past, but it might not offer the same returns in the future.',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'Cryptocurrencies are bound to crash someday, just like the Bitcoin crashed in 2017.',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'Many of Chamath`s SPACs have performed well in the past, but all of them might continue doing so in the future.',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'The stock market crashes every 10 years, therefore a widespread crash is due now.',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'Tesla`s stock just crashed, but it might not go back up again soon as it did previously.',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Buy"\n2.Put a right finger on I key for items that belong to the category "Sell"',
        A: 'Buy',
        B: 'Sell',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 2',
        prompt: 'To the moon.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Crash.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Diamond Hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Paper Hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Long.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Short.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Representative Bias & Sell"\n2.Put a right finger on I key for items that belong to the category "Not a Bias & Buy"',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 3',
        prompt:
          'Since Google`s stock has offered great returns in the past, it will continue doing so.',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'Amazon`s stock has offered great returns in the past, but it might not offer the same returns in the future.',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'Since Google`s stock has offered great returns in the past, it will continue doing so.',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'Cryptocurrencies are bound to crash someday, just like the Bitcoin crashed in 2017.',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'The stock market crashes every 10 years, therefore a widespread crash is due now.',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'Tesla`s stock just crashed, but it might not go back up again soon as it did previously.',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Representative Bias & Buy"\n2.Put a right finger on I key for items that belong to the category "Not a Bias & Sell"',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 4',
        prompt:
          'Since Google`s stock has offered great returns in the past, it will continue doing so.',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'Amazon`s stock has offered great returns in the past, but it might not offer the same returns in the future.',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'Cryptocurrencies are bound to crash someday, just like the Bitcoin crashed in 2017.',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'Many of Chamath`s SPACs have performed well in the past, but all of them might continue doing so in the future.',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'The stock market crashes every 10 years, therefore a widespread crash is due now.',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'Tesla`s stock just crashed, but it might not go back up again soon as it did previously.',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
    ],
  } /*
  {
    bias: 'Bias #2: Anchoring Bias',
    description:
      'Anchoring bias is a cognitive bias that causes us to rely too heavily on the first piece of information we are given about a topic. When we are setting plans or making estimates about something, we interpret newer information from the reference point of our anchor, instead of seeing it objectively. In the world of investment, this can take the form of investors skewing their judgement based on their point of anchor, thereby failing to update plans or predictions as much as they should.',
    categoriesAndItems: anchoringBiasTable,
    tips: '1. One strategy to combat anchoring bias that is evidence-based, and pretty straightforward, is to come up with reasons why that anchor is inappropriate for the situation. In one study, car experts were asked to judge whether a resale price of a certain car (the anchor) was too high or too low, after which they were asked to provide a better estimate. However, before giving their own price, half of the experts were also asked to come up with arguments against the anchor price. These participants showed a weaker anchoring effect, compared to those who hadn’t come up with counterarguments.\n2. Secondly, considering alternative options is always a good idea to aid decision making. This strategy is similar to that of red teaming, which involves designating people to oppose and challenge the ideas of a group. By building a step into the decision-making process that is specifically dedicated to exposing the weaknesses of a plan, and considering alternatives, it might be possible to reduce the influence of an anchor.',
    part1TimeSpent: 0,
    part2TimeSpent: 0,
    part3TimeSpent: 0,
    part4TimeSpent: 0,
    questions: [
      {
        part: 'Part 1',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Anchoring Bias"\n2.Put a right finger on I key for items that belong to the category "Not a Bias"',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 1',
        prompt:
          'Since the current price of Google is below the 52-week high, it is a good deal right now.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'Amazon is currently below the 52-week high, but that alone does not make it a good stock.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'My Ark ETF has underperformed S&P 100 in the last quarter, therefore I should sell it.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'My ETF has underperformed S&P 100 in the last quarter, however that alone is not a reason to sell it.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'BMW`s current price is €85, and Volkswagen stock is €150, therefore I should buy BMW.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'Twitter`s current price is €45, and Facebook`s is €300, however that alone is not a reason to buy Twitter.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Buy"\n2.Put a right finger on I key for items that belong to the category "Sell"',
        A: 'Buy',
        B: 'Sell',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 2',
        prompt: 'To the moon.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Crash.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Diamond hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Paper hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Long.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Short.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Anchoring Bias & Sell"\n2.Put a right finger on I key for items that belong to the category "Not a Bias & Buy"',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 3',
        prompt:
          'Since the current price of Google is below the 52-week high, it is a good deal right now.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'Amazon is currently below the 52-week high, but that alone does not make it a good stock.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'My Ark ETF has underperformed S&P 100 in the last quarter, therefore I should sell it.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'My ETF has underperformed S&P 100 in the last quarter, however that alone is not a reason to sell it.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'BMW`s current price is €85, and Volkswagen stock is €150, therefore I should buy BMW.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'Twitter`s current price is €45, and Facebook`s is €300, however that alone is not a reason to buy Twitter.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Anchoring Bias & Buy"\n2.Put a right finger on I key for items that belong to the category "Not a Bias & Sell"',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 4',
        prompt:
          'Since the current price of Google is below the 52-week high, it is a good deal right now.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'Amazon is currently below the 52-week high, but that alone does not make it a good stock.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'My Ark ETF has underperformed S&P 100 in the last quarter, therefore I should sell it.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'My ETF has underperformed S&P 100 in the last quarter, however that alone is not a reason to sell it.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'BMW`s current price is €85, and Volkswagen stock is €150, therefore I should buy BMW.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'Twitter`s current price is €45, and Facebook`s is €300, however that alone is not a reason to buy Twitter.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
    ],
  },
  {
    bias: 'Bias #3: Overconfidence Bias',
    description:
      'The overconfidence bias refers to our belief or perception in our abilities to be higher than our `actual` or realized abilities. Investors with overconfidence bias often tend to believe that "they can pick the next big stock". This often results in ill-advised attempts to time the market or build concentrations in risky investments they consider a sure thing.',
    categoriesAndItems: overconfidenceBiasTable,
    tips: '1. Trade less and invest more - Understand that by entering into trading activities you are trading against computers, institutional investors and others around the world with better data and more experience than you. The odds are overwhelmingly in their favour. By increasing your time frame, mirroring indexes, and taking advantage of dividends, you will likely build wealth over time.\n 2. Think of the consequences - While making a decision, think of the consequences. For example, when you believe you have found the next best stock and decide to put a big sum of money in it, calculate what would happen if you went wrong. When you realize how badly a decision can hurt you, you will have a reality check.\n3. Act as your own devil`s advocate - When estimating your abilities, challenge yourself. When you play the role of the devil`s advocate, you will ask yourself the right questions. Resist the urge to believe that your information and intuition are better than others in the market.\n4. Have an open mind - Have an open mind about the possibility of making a mistake. When you have the humility to admit your weaknesses, you will also gain the insight to overcome them.',
    part1TimeSpent: 0,
    part2TimeSpent: 0,
    part3TimeSpent: 0,
    part4TimeSpent: 0,
    questions: [
      {
        part: 'Part 1',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Overconfidence Bias"\n2.Put a right finger on I key for items that belong to the category "Not a Bias"',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 1',
        prompt:
          'Since I invested in Amazon at it`s start, I have a high probability of identifying the next big company as well.',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'I am an ill-informed investor, therefore I am better off buying a single index fund than investing in individual stocks myself.',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'The S&P 500 Index averages about 6.6% a year, but I personally can perform way better than that.',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'I have made great returns in the past, but that was not based upon my own capabilities only',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'I have lost money on all my crypto investments, but I think I make decent investment decisions.',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'I identified great web 2.0 stocks, but that does not mean I could do the same in the web 3.0 space.',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Buy"\n2.Put a right finger on I key for items that belong to the category "Sell"',
        A: 'Buy',
        B: 'Sell',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 2',
        prompt: 'To the moon.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Crash.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Diamond Hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Paper Hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Long.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Short.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Overconfidence Bias & Sell"\n2.Put a right finger on I key for items that belong to the category "Not a Bias & Buy"',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 3',
        prompt:
          'Since I invested in Amazon at it`s start, I have a high probability of identifying the next big company as well.',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'I am an ill-informed investor, therefore I am better off buying a single index fund than investing in individual stocks myself.',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'The S&P 500 Index averages about 6.6% a year, but I personally can perform way better than that.',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'I have made great returns in the past, but that was not based upon my own capabilities only.',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'I have lost money on all my crypto investments, but I think I make decent investment decisions.',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'I identified great web 2.0 stocks, but that does not mean I could do the same in the web 3.0 space.',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Overconfidence Bias & Buy"\n2.Put a right finger on I key for items that belong to the category "Not a Bias & Sell"',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 4',
        prompt:
          'Since I invested in Amazon at it`s start, I have a high probability of identifying the next big company as well.',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'I am an ill-informed investor, therefore I am better off buying a single index fund than investing in individual stocks myself.',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'The S&P 500 Index averages about 6.6% a year, but I personally can perform way better than that.',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'I have made great returns in the past, but that was not based upon my own capabilities only.',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'I have lost money on all my crypto investments, but I think I make decent investment decisions.',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'I identified great web 2.0 stocks, but that does not mean I could do the same in the web 3.0 space.',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
    ],
  },
  {
    bias: 'Bias #4: Herding Bias / Bandwagon effect',
    description:
      'The Bandwagon effect refers to our habit of adopting certain behaviors or beliefs because many other people do the same. In the world of investment, this can take the form of investors rationalizing that their course of action is the right one because "everybody else" is doing it.',
    categoriesAndItems: herdingBiasTable,
    tips: '1. While it is impossible to completely rid ourselves of the bandwagon effect, we may be able to counteract our tendency to automatically use social cues as a driving factor when making influential decisions. This can be achieved by first slowing down our decision-making process. Allowing some time to pass between when we notice the social signal and our final decision, can allow for critical thinking and prevent us from quickly adopting a popular idea.\n2. Second, try to make decisions in an environment where you don’t feel pressured by other people.\n3. Lastly, consider alternative options that go against the majority view. They may prove to be more beneficial or at least mitigate the appeal of going with the prevailing sentiment.',
    part1TimeSpent: 0,
    part2TimeSpent: 0,
    part3TimeSpent: 0,
    part4TimeSpent: 0,
    questions: [
      {
        part: 'Part 1',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Herding Bias"\n2.Put a right finger on I key for items that belong to the category "Not a Bias"',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 1',
        prompt:
          'People from my country believe that Wirecard, a local startup is primed to become a “global player”, therefore I should invest in it.',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'My friends think Tesla is the best stock ever,  but I will not invest in it unless I am convinced about it myself.',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'Everybody around me seems to be investing in the cryptocurrency Solana, therefore I should too.',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'Everybody seems to be investing Bitcoin, but I would not until I understand what it is, and how it works.',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'I personally cannot make sense out of Chamath`s IPOs, but since the entire reddit army is buying it, I should buy it too.',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'The reddit army is aiming to take GameStop to the moon, but I am wary of letting FOMO drive my decisions.',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Buy"\n2.Put a right finger on I key for items that belong to the category "Sell"',
        A: 'Buy',
        B: 'Sell',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 2',
        prompt: 'To the moon.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Crash.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Diamond Hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Paper Hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Long.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Short.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Herding Bias & Sell"\n2.Put a right finger on I key for items that belong to the category "Not a Bias & Buy"',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 3',
        prompt:
          'People from my country believe that Wirecard, a local startup is primed to become a “global player”, therefore I should invest in it.',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'My friends think Tesla is the best stock ever,  but I will not invest in it unless I am convinced about it myself.',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'Everybody around me seems to be investing in the cryptocurrency Solana, therefore I should too.',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'Everybody seems to be investing Bitcoin, but I would not until I understand what it is, and how it works.',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'I personally cannot make sense out of Chamath`s IPOs, but since the entire reddit army is buying it, I should buy it too.',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'The reddit army is aiming to take GameStop to the moon, but I am wary of letting FOMO drive my decisions.',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Herding Bias & Buy"\n2.Put a right finger on I key for items that belong to the category "Not a Bias & Sell"',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 4',
        prompt:
          'People from my country believe that Wirecard, a local startup is primed to become a “global player”, therefore I should invest in it.',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'My friends think Tesla is the best stock ever,  but I will not invest in it unless I am convinced about it myself.',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'Everybody around me seems to be investing in the cryptocurrency Solana, therefore I should too.',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'Everybody seems to be investing Bitcoin, but I would not until I understand what it is, and how it works.',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'I personally cannot make sense out of Chamath`s IPOs, but since the entire reddit army is buying it, I should buy it too.',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'The reddit army is aiming to take GameStop to the moon, but I am wary of letting FOMO drive my decisions.',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
    ],
  },
  {
    bias: 'Bias #5: Disposition effect',
    description:
      'The disposition effect refers to our tendency to prematurely sell assets that have made financial gains while holding on to assets that are losing money. While investing, this can take the form of selling winning investments in order to ensure a profit, but being averse to selling losing investments in hopes of turning them into gains.',
    categoriesAndItems: dispositionEffectTable,
    tips: 'So what can we do to prevent the disposition effect from causing us to make poor decisions and poor investments? Simply, the answer is to stop holding on to losing investments for too long and selling winners too soon. But that is easier said than done, so we can walk through a cognitive mechanism that helps facilitate this.\nOne tool is broad framing, or, trying to view our decisions in the scheme of the many financial decisions we make rather than in isolation. Here`s an excerpt of Kahneman`s “sermon” on broad framing from his book "Thinking Fast and Slow":\n“You will do yourself a large financial favour if you are able to see each of these gambles as a part of a bundle of small gambles and rehearse the mantra that will get you significantly closer to economic rationality: you win a few, you lose a few”.\nThis quote is worth internalizing. Broadframing is a tool that experienced traders use to fight the emotional reactions surrounding gain and loss.',
    part1TimeSpent: 0,
    part2TimeSpent: 0,
    part3TimeSpent: 0,
    part4TimeSpent: 0,
    questions: [
      {
        part: 'Part 1',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Disposition Effect"\n2.Put a right finger on I key for items that belong to the category "Not a Bias"',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 1',
        prompt:
          'My Bitcoin just hit $60,000. I should sell it before it goes down again.',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'Wirecard`s stock price is going down because of a fraud scandal, and I should sell it off without losing any more money.',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'I am losing money on my Wirecard stock due to an accused scandal, but I would not sell it until I recover my losses.',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'I have lost quite a lot of money on my Docusign stock in the past 6 months and future prospects do not look well, therefore I would sell it.',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'My Tesla stock just hit $1,000. I should sell it before Elon Musk tweets "Tesla stock price is too high in my opinion".',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'My tesla stock has made over 300%, and the stock looks a bit overvalued, but I would continue betting on my winners.',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Buy"\n2.Put a right finger on I key for items that belong to the category "Sell"',
        A: 'Buy',
        B: 'Sell',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 2',
        prompt: 'To the moon.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Crash.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Diamond Hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Paper Hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Long.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Short.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Disposition Effect & Sell"\n2.Put a right finger on I key for items that belong to the category "Not a Bias & Buy"',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 3',
        prompt:
          'My Bitcoin just hit $60,000. I should sell it before it goes down again.',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'Wirecard`s stock price is going down because of a fraud scandal, and I should sell it off without losing any more money.',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'I am losing money on my Wirecard stock due to an accused scandal, but I would not sell it until I recover my losses.',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'I have lost quite a lot of money on my Docusign stock in the past 6 months and future prospects do not look well, therefore I would sell it.',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'My Tesla stock just hit $1,000. I should sell it before Elon Musk tweets "Tesla stock price is too high in my opinion".',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'My tesla stock has made over 300%, and the stock looks a bit overvalued, but I would continue betting on my winners.',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Disposition Effect & Buy"\n2.Put a right finger on I key for items that belong to the category "Not a Bias & Sell"',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 4',
        prompt:
          'My Bitcoin just hit $60,000. I should sell it before it goes down again.',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'Wirecard`s stock price is going down because of a fraud scandal, and I should sell it off without losing any more money.',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'I am losing money on my Wirecard stock due to an accused scandal, but I would not sell it until I recover my losses.',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'I have lost quite a lot of money on my Docusign stock in the past 6 months and future prospects do not look well, therefore I would sell it.',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'My Tesla stock just hit $1,000. I should sell it before Elon Musk tweets "Tesla stock price is too high in my opinion".',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'My tesla stock has made over 300%, and the stock looks a bit overvalued, but I would continue betting on my winners.',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
    ],
  },
  {
    bias: 'Bias #6: Action Bias',
    description:
      'The action bias describes our tendency to favour action over inaction, often to our benefit. However, there are times when we feel compelled to act, even if there`s evidence that it will lead to a worse outcome than doing nothing would. In the world of investment, this can take the form of "investors panic selling when the market is going down or hastily investing after reading something positive about an asset online".',
    categoriesAndItems: actionBiasTable,
    tips: '1. Choosing inaction over an action does not mean giving up. As a matter of fact, it`s frequently more productive to do so. Consequently, it`s necessary to avoid the action bias, so that action does not continue to be our default response. Choosing a lack of action is a good practice in patience, which can be challenging to develop. Self-control is a skill that needs to be cultivated and the more we work on it, the stronger it gets.\n2. Learning to avoid the action bias is a long-term process that involves going against ingrained impulses and predispositions. Unless the situation demands immediate action, it`s often better to take a step back and evaluate the pros and cons of each possible response. To refer back to the example of being stuck in traffic, instead of becoming frustrated and getting off the highway at the first possible exit, sit for a moment and rationalize your situation. Taking a pause to think through the consequences of action versus inaction can help you support, or find fault with, your initial urge to act.\n3. Remember, the goal here is not to eliminate action as a response altogether. The point is to give equal consideration to inaction as a possible response, and to avoid automatically resorting to action. Doing so will allow for more effective decision-making and more profitable outcomes.',
    part1TimeSpent: 0,
    part2TimeSpent: 0,
    part3TimeSpent: 0,
    part4TimeSpent: 0,
    questions: [
      {
        part: 'Part 1',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Action Bias"\n2.Put a right finger on I key for items that belong to the category "Not a Bias"',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 1',
        prompt:
          'My Bitcoin just went down $1,000; therefore I should sell it before I lose any more money.',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'My Bitcoin just went down $1,000; but I know Cryptocurrencies are highly volatile assets, and I should not be worried.',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'Various instagram account have been hinting towards a dip at the end of the week, therefore I should sell my stocks right now.',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'There is market-wide sell off. By default, I should do nothing. Baking cookies might be a great idea at the moment.',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'A market-wide sell off just started, and I feel this is a perfect opportunity to buy my favorite stocks at discount.',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 1',
        prompt:
          'I am down around 20% over the past weeks. Should I be doing something about it? No. I am in for the long run, and time smooths out all volatility.',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Buy"\n2.Put a right finger on I key for items that belong to the category "Sell"',
        A: 'Buy',
        B: 'Sell',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 2',
        prompt: 'To the moon.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Crash.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Diamond Hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Paper Hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Long.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 2',
        prompt: 'Short.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Action Bias & Sell"\n2.Put a right finger on I key for items that belong to the category "Not a Bias & Buy"',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 3',
        prompt:
          'My Bitcoin just went down $1,000; therefore I should sell it before I lose any more money.',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'My Bitcoin just went down $1,000; but I know Cryptocurrencies are highly volatile assets, and I should not be worried.',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'Various instagram account have been hinting towards a dip at the end of the week, therefore I should sell my stocks right now.',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'There is market-wide sell off. By default, I should do nothing. Baking cookies might be a great idea at the moment.',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'A market-wide sell off just started, and I feel this is a perfect opportunity to buy my favorite stocks at discount.',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 3',
        prompt:
          'I am down around 20% over the past weeks. Should I be doing something about it? No. I am in for the long run, and time smooths out all volatility.',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          '1. Put a left finger on E key for items that belong to the category "Action Bias & Buy"\n2.Put a right finger on I key for items that belong to the category "Not a Bias & Sell"',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: '-1',
        userSelection: '',
        isInstruction: true,
        instructions:
          'Go as fast as you can, while being accurate!\nIf you make a mistake, a red ❌ will appear.',
      },
      {
        part: 'Part 4',
        prompt:
          'My Bitcoin just went down $1,000; therefore I should sell it before I lose any more money.',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'My Bitcoin just went down $1,000; but I know Cryptocurrencies are highly volatile assets, and I should not be worried.',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'Various instagram account have been hinting towards a dip at the end of the week, therefore I should sell my stocks right now.',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'There is market-wide sell off. By default, I should do nothing. Baking cookies might be a great idea at the moment.',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'A market-wide sell off just started, and I feel this is a perfect opportunity to buy my favorite stocks at discount.',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
      },
      {
        part: 'Part 4',
        prompt:
          'I am down around 20% over the past weeks. Should I be doing something about it? No. I am in for the long run, and time smooths out all volatility.',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
      },
    ],
  },*/,
];
