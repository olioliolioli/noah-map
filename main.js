new svgMap({
  targetElementID: 'svgMap',
  noDataText: 'Country not supported',
  colorNoData: '#F4F4F4',
  data: {
    "data": {
      "currency": {
        "name": "Currency",
        "format": "{0}"
      },
      "country": {
        "name": "Country",
        "format": "{0}"
      },
      "method": {
        "name": "Payment Method",
        "format": "{0}"
      },
      "fee": {
        "name": "Transaction Fee",
        "format": "{0}"
      },
      "settlement": {
        "name": "Settlement times",
        "format": "{0}"
      },
      "market": {
        "name": "Mid-Market Reference",
        "format": "{0}"
      },
      "total": {
        "name": "Total Fee",
        "format": "{0}"
      }
    },
    "applyData": "total",
    "values": {
      "AR": {
        "currency": "ARS",
        "country": "Argentina",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.5 USD",
            "settlement": "Real Time 24/7",
            "market": "Currencylayer",
            "total": "5.00%"
          },
          {
            "method": "E-wallet",
            "fee": "1.5 USD",
            "settlement": "Real Time 24/7",
            "market": "Currencylayer",
            "total": "5.00%"
          },
          {
            "method": "Cash PickUp (RapiPago - 4500 locations)",
            "fee": "2 USD",
            "settlement": "Same day - Extended business hours",
            "market": "",
            "total": ""
          }
        ]
      },
      "BR": {
        "currency": "BRL",
        "country": "Brazil",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.5 USD",
            "settlement": "Real Time 24/7 (PIX)",
            "market": "Currencylayer",
            "total": "2.00%"
          }
        ]
      },
      "CL": {
        "currency": "CLP",
        "country": "Chile",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.5 USD",
            "settlement": "Real Time 24/7",
            "market": "Currencylayer",
            "total": "2.50%"
          },
          {
            "method": "E-wallet (All Digital Wallets)",
            "fee": "1.5 USD",
            "settlement": "Real Time 24/7",
            "market": "Currencylayer",
            "total": "2.50%"
          }
        ]
      },
      "CO": {
        "currency": "COP",
        "country": "Colombia",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.5 USD",
            "settlement": "Up to 24 hours (working days) Up to 1hour Bancolombia + Davivienda",
            "market": "Currencylayer",
            "total": "2.50%"
          },
          {
            "method": "Digital Wallets (Movii, Nequi, Daviplata)",
            "fee": "1.5 USD",
            "settlement": "Real Time 24/7",
            "market": "",
            "total": ""
          },
          {
            "method": "Cash PickUp (Efecty - +1000 locations)",
            "fee": "2 USD",
            "settlement": "Same day",
            "market": "Currencylayer",
            "total": "2.50%"
          }
        ]
      },
      "DO": {
        "currency": "DOP",
        "country": "Dominican Republic",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "2 USD",
            "settlement": "Before 7pm GMT, Same day",
            "market": "Currencylayer",
            "total": "3.00%"
          }
        ]
      },
      "EC": {
        "currency": "USD",
        "country": "Ecuador",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "2 USD",
            "settlement": "Before 4pm GMT, Same day",
            "market": "Currencylayer",
            "total": "2.00%"
          },
          {
            "method": "Cash PickUp (Easy Pagos +1000 locations)",
            "fee": "2.5 USD",
            "settlement": "Same day",
            "market": "Currencylayer",
            "total": "2.00%"
          }
        ]
      },
      "MX": {
        "currency": "MXM",
        "country": "Mexico",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.5 USD",
            "settlement": "Real Time 24/7",
            "market": "Currencylayer",
            "total": "2.00%"
          },
          {
            "method": "Cash Pickup (BANORTE, Coppel, 7Eleven - 30,000 locations)",
            "fee": "1.5 USD",
            "settlement": "Same day",
            "market": "Currencylayer",
            "total": "2.00%"
          }
        ]
      },
      "PY": {
        "currency": "PYG",
        "country": "Paraguay",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.5 USD",
            "settlement": "Before 6pm GMT, same day (working days)",
            "market": "Currencylayer",
            "total": "2.50%"
          },
          {
            "method": "Cash PickUp (Maxicambios - 20 locations)",
            "fee": "2 USD",
            "settlement": "Up to 1hour dailly",
            "market": "Currencylayer",
            "total": "2.50%"
          }
        ]
      },
      "PE": {
        "currency": "PEN",
        "country": "Peru",
        "methods": [
          {
            "method": "Bank Account (Interbank, BCP, Scotia, Citi, Santander, MiBanco, Bco Comercio, Bco Nación, BBVA, Pichincha, and Banbif)",
            "fee": "2 USD",
            "settlement": "Interbank - Same day Other Banks - Before 7pm GMT, Same day (working days)",
            "market": "Currencylayer",
            "total": "2.50%"
          },
          {
            "method": "Digital Wallets (Yape)",
            "fee": "2 USD",
            "settlement": "Real Time 24/7",
            "market": "",
            "total": ""
          },
          {
            "method": "Cash Pickup (BCP - 12000 locations / Interbank - +2400 locations)",
            "fee": "2 USD",
            "settlement": "BCP - Same day Interbank - Up to 1hour daily",
            "market": "Currencylayer",
            "total": "2.50%"
          }
        ]
      },
      "UY": {
        "currency": "UYU",
        "country": "Uruguay",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.5 USD",
            "settlement": "Up to 24hours (working days)",
            "market": "Currencylayer",
            "total": "2.50%"
          }
        ]
      },
      "BJ": {
        "currency": "XOF",
        "country": "Benin",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1500 XOF",
            "settlement": "T+1",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "TD": {
        "currency": "XAF",
        "country": "Chad",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1500 XAF",
            "settlement": "T+1",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "MM (Airtel, Moov)",
            "fee": "1500 XAF",
            "settlement": "Minutes",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "ET": {
        "currency": "ETB",
        "country": "Ethiopia",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "5 USD",
            "settlement": "Minutes",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "MM (Amole)",
            "fee": "5 USD",
            "settlement": "Minutes",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "GA": {
        "currency": "XAF",
        "country": "Gabon",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1500 XAF",
            "settlement": "T+1",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "MM (Airtel, BGFI, MTN)",
            "fee": "1500 XAF",
            "settlement": "Minutes",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "CG": {
        "currency": "XAF",
        "country": "The Republic of Congo",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1500 XAF",
            "settlement": "T+1",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "MM (BGFI, MTN, Telecom)",
            "fee": "1500 XAF",
            "settlement": "Minutes",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "GH": {
        "currency": "GHS",
        "country": "Ghana",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "10 GHS",
            "settlement": "Near Real-Time (Same day)",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "Wallet (F4B)",
            "fee": "",
            "settlement": "Instant",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "MM (Airtel, MTN, Tigo, Vodafone)",
            "fee": "0 - 50.99: 2GHS 51 - 999.99: 10 GHS 1000 - Above: 12 GHS",
            "settlement": "Minutes",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "CI": {
        "currency": "XOF",
        "country": "Cote D'Ivoire",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1500 XOF",
            "settlement": "T+1",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "Wallet (F4B)",
            "fee": "",
            "settlement": "Instant",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "MM (Moov, MTN, Orange, Wave)",
            "fee": "2% of transaction",
            "settlement": "Minutes",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "MW": {
        "currency": "MWK",
        "country": "Malawi",
        "methods": [
          {
            "method": "Bank Account (NA)",
            "fee": "2000 MWK",
            "settlement": "T+1",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "NG": {
        "currency": "NGN",
        "country": "Nigeria",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "NGN 10 + 7.5% VAT for Payouts of NGN 5,000 and below NGN 25 + 7.5% VAT for Payouts between NGN 5,001 and 50,000 NGN 50 + 7.5% VAT for Payouts Above 50,000",
            "settlement": "Instant",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "Wallet (F4B)",
            "fee": "",
            "settlement": "Instant",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "NG-USD": {
        "currency": "USD",
        "country": "Nigeria - Remittances",
        "methods": [
          {
            "method": "Bank Account (FBN, FCMB, Polaris, UBA, Wema, Zenith)",
            "fee": "2 USD",
            "settlement": "Instant",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "Wallet (Cash pickup)",
            "fee": "2 USD",
            "settlement": "Minutes",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "Cash Pickup",
            "fee": "2 USD",
            "settlement": "",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "RW": {
        "currency": "RWF",
        "country": "Rwanda",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "2000 RWF",
            "settlement": "T+1",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "Wallet (F4B)",
            "fee": "$0.00",
            "settlement": "Instant",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "MM (Airtel, MTN)",
            "fee": "500 RWF",
            "settlement": "Airtel: T+3\nMTN: Monthly",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "SL": {
        "currency": "SLL",
        "country": "Sierra Leone",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "45 SLL",
            "settlement": "T+1",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "ZA": {
        "currency": "ZAR",
        "country": "South Africa",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "10 ZAR - International 3 USD - International",
            "settlement": "T+1",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "Wallet (F4B)",
            "fee": "",
            "settlement": "Instant",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "UG": {
        "currency": "UGX",
        "country": "Uganda",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "5000 UGX",
            "settlement": "T+1",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "Wallet (F4B)",
            "fee": "",
            "settlement": "Instant",
            "market": "Noah FX Rate",
            "total": "1.00%"
          },
          {
            "method": "MM (Airtel, MTN)",
            "fee": "500 - 124,999.99: UGX 1,000\n+125,000: 1.2% of transaction",
            "settlement": "Minutes",
            "market": "Noah FX Rate",
            "total": "1.00%"
          }
        ]
      },
      "CH": {
        "currency": "CHF",
        "country": "Switzerland",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.5 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "2.25%"
          }
        ]
      },
      "CZ": {
        "currency": "CZK",
        "country": "Czech Republic",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "2.1 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "2.20%"
          }
        ]
      },
      "DK": {
        "currency": "DKK",
        "country": "Denmark",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "2.1 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "2.20%"
          }
        ]
      },
      "AT": {
        "currency": "EUR",
        "country": "Austria",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "BE": {
        "currency": "EUR",
        "country": "Belgium",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "HR": {
        "currency": "EUR",
        "country": "Croatia",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "EE": {
        "currency": "EUR",
        "country": "Estonia",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "FI": {
        "currency": "EUR",
        "country": "Finland",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "FR": {
        "currency": "EUR",
        "country": "France",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "DE": {
        "currency": "EUR",
        "country": "Germany",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "GR": {
        "currency": "EUR",
        "country": "Greece",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "IE": {
        "currency": "EUR",
        "country": "Ireland",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "IT": {
        "currency": "EUR",
        "country": "Italy",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "LV": {
        "currency": "EUR",
        "country": "Latvia",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "LT": {
        "currency": "EUR",
        "country": "Lithuania",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "LU": {
        "currency": "EUR",
        "country": "Luxembourg",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "NL": {
        "currency": "EUR",
        "country": "Netherlands",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "PT": {
        "currency": "EUR",
        "country": "Portugal",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "SK": {
        "currency": "EUR",
        "country": "Slovakia",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "SI": {
        "currency": "EUR",
        "country": "Slovenia",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "ES": {
        "currency": "EUR",
        "country": "Spain",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "GB": {
        "currency": "GBP",
        "country": "United Kingdom",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "1.3 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "0.50%"
          }
        ]
      },
      "PL": {
        "currency": "NOK",
        "country": "Poland",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "2.1 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "2.25%"
          }
        ]
      },
      "RO": {
        "currency": "RON",
        "country": "Romania",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "2.1 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "1.70%"
          }
        ]
      },
      "SE": {
        "currency": "SEK",
        "country": "Sweden",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "2.1 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "2.25%"
          }
        ]
      },
      "TR": {
        "currency": "TRY",
        "country": "Turkey",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "2.1 USD",
            "settlement": "Minutes",
            "market": "Reuters Bid",
            "total": "2.25%"
          }
        ]
      },
      "ID": {
        "currency": "IDR",
        "country": "Indonesia",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "0.2% of transaction",
            "settlement": "Same day",
            "market": "Investing.com",
            "total": "1.10%"
          }
        ]
      },
      "US": {
        "currency": "USD",
        "country": "United States",
        "methods": [
          {
            "method": "Bank Account",
            "fee": "2 USD",
            "settlement": "Same day",
            "market": "1:1",
            "total": "0.25%"
          }
        ]
      }
    }
  }    
});			