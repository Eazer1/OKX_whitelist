(async function() {
  let wallets = `
0x0000000000000000000000000000000000000000 1
0x0000000000000000000000000000000000000000 2
0x0000000000000000000000000000000000000000 3
0x0000000000000000000000000000000000000000 4
0x0000000000000000000000000000000000000000 5
0x0000000000000000000000000000000000000000 6
0x0000000000000000000000000000000000000000 7
0x0000000000000000000000000000000000000000 8
0x0000000000000000000000000000000000000000 9
0x0000000000000000000000000000000000000000 10
0x0000000000000000000000000000000000000000 11
0x0000000000000000000000000000000000000000 12
0x0000000000000000000000000000000000000000 13
0x0000000000000000000000000000000000000000 14
0x0000000000000000000000000000000000000000 15
0x0000000000000000000000000000000000000000 16
0x0000000000000000000000000000000000000000 17
0x0000000000000000000000000000000000000000 18
0x0000000000000000000000000000000000000000 19
0x0000000000000000000000000000000000000000 20
  `;
  
  wallets = wallets.trim().split('\n').map(wallet => wallet.trim().split(' '));

  const walletSelectors = [];
  const nameSelectors = [];
  
  document.querySelector(`
  #root > div > div > div.balance-bottom > div > form > div.balance_okui.AuthCheckBox_authFlagFormItem__AvgBg.balance_okui-form-item-md.balance_okui-form-item.balance_okui-form-item-no-label > div > div > div > label > span > input.balance_okui-checkbox-input`).click();

  for (let i = 2; i <= wallets.length + 1; i++ ) {
    walletSelectors.push(
      `#root > div > div > div.balance-bottom > div > form > div.addressListWrap > div > div > div > div.balance_okui-table-content > table > tbody > tr:nth-child(${i}) > td:nth-child(2) > div.balance_okui.AddressInput_addressInputWrap__dzvve.balance_okui-form-item-md.balance_okui-form-item.balance_okui-form-item-no-label > div > div > div > div > div > input.balance_okui-input-input`
    );
    nameSelectors.push(
      `#root > div > div > div.balance-bottom > div > form > div.addressListWrap > div > div > div > div.balance_okui-table-content > table > tbody > tr:nth-child(${i}) > td:nth-child(3) > div > div > div > div > div > div > input.balance_okui-input-input`
    );
  }

  const addButtonSelector =
    "#root > div > div > div.balance-bottom > div > form > button";

  function fillInput(input, value) {
    input.setAttribute('value', value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  async function addWallets() {
    for (let i = 0; i < wallets.length; i++) {
      console.log(`%cДобавление кошелька ${i + 1} из ${wallets.length}`, "font-weight: bold;");

      const addressInput = document.querySelector(walletSelectors[i]);
      const nameInput = document.querySelector(nameSelectors[i]);

      fillInput(addressInput, wallets[i][0]);
      await new Promise((resolve) => setTimeout(resolve, 200));

      fillInput(nameInput, wallets[i][1]);
      await new Promise((resolve) => setTimeout(resolve, 200));


      if (i < wallets.length - 1) {
        const button = document.querySelector(addButtonSelector);
        button.click();
        await new Promise((resolve) => setTimeout(resolve, 150));
      }
    }

    console.log('%cЗавершено', "font-weight: bold;");
    console.log('%cCode by: @qirensi for https://t.me/Eazercrypto', "font-weight: bold;");
    console.log('%cDonate: 0x564dbe43b511c8b99705ec90cb8a3d071f15e946 any EVM', "font-weight: bold;");
  }

  addWallets();
})();
