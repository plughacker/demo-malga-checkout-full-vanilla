(() => {
  const plugCheckoutFull = document.querySelector("plug-checkout-full");

  plugCheckoutFull.paymentMethods = {
    pix: {
      expiresIn: 3600,
    },
    credit: {
      installments: {
        quantity: 1,
        show: true,
      },
      checkedSaveCard: false,
      showCreditCard: true,
    },
    boleto: {
      expiresDate: "2022-12-31",
      instructions: "Instruções para pagamento do boleto",
      interest: {
        days: 1,
        amount: 100,
      },
      fine: {
        days: 2,
        amount: 200,
      },
    },
  };

  plugCheckoutFull.transactionConfig = {
    statementDescriptor: "#1 Demonstration Plug Checkout",
    amount: 100,
    description: "",
    orderId: "",
    customerId: "<CUSTOMER_ID>",
    currency: "BRL",
    capture: false,
  };

  plugCheckoutFull.dialogConfig = {
    show: true,
    actionButtonLabel: "Continuar",
    errorActionButtonLabel: "Tentar novamente",
    successActionButtonLabel: "Continuar",
    successRedirectUrl: "https://www.plugpagamentos.com/",
  };

  plugCheckoutFull.pageConfig = {
    brandUrl: "https://exampleurl/images/logo.png",
    footerDescription: "Todos os direitos reservados © 2022 Plug Pagamentos.",
    backRoute: "https://www.plugpagamentos.com/",
    delivery: 0,
    products: [
      {
        name: "Produto 1",
        quantity: 2,
        amount: 50,
        description: "Descrição do produto 1",
        sku: "123",
        risk: "Low",
      },
      {
        name: "Produto 2",
        quantity: 2,
        amount: 40,
        description: "Descrição do produto 2",
        sku: "124",
        risk: "Low",
      },
    ],
  };

  plugCheckoutFull.addEventListener(
    "transactionSuccess",
    ({ detail: { data } }) => {
      console.log(data);
    }
  );

  plugCheckoutFull.addEventListener(
    "transactionFailed",
    ({ detail: { error } }) => {
      console.log(error);
    }
  );
})();
