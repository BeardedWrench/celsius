import React from 'react';

export const SUB_DEBT_AMOUNT: React.FC = () => {
  return (
    <form>
      <fieldset>
        <legend>Debt Amount</legend>

        <div>
          <input type="radio" id="10k" value="10k" name="debt" />
          <label htmlFor="10k">$10,000</label>
        </div>

        <div>
          <input type="radio" id="20k" value="20k" name="debt" />
          <label htmlFor="10k">$20,000</label>
        </div>

        <div>
          <input type="radio" id="30k" value="30k" name="debt" />
          <label htmlFor="10k">$30,000</label>
        </div>
      </fieldset>
    </form>
  );
};
