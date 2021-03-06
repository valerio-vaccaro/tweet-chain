# tweet-chain
Calculate the height of a tweet chain

#### Install
```
git clone https://github.com/lvaccaro/tweet-chain
cd tweet-chain
npm install
```

#### Options
```
    -V, --version       output the version number
    -v, --verbose       Show intermediate tweet
    -t, --tweet [link]  Tweet selected
    -h, --help          output usage information
```   

#### Basic example
```
$ node index.js -t https://twitter.com/mir_btc/status/901928579159773184 

Visit tweet: https://twitter.com/mir_btc/status/901928579159773184
Genesis tweet: https://twitter.com/bitstein/status/901458532792512512
Height: 11
```

#### Verbose example
```
$ node index.js -v -t https://twitter.com/mir_btc/status/901928579159773184

Visiting page: https://twitter.com/mir_btc/status/901928579159773184
Url: https://twitter.com/mir_btc/status/901928579159773184
Height: 0
Title:  🚀MIR🚀 su Twitter: "Noted ! Quote that tweet and be part of the first note-chain ! Thanks @barrysilbert https://t.co/YoECxFSPpW https://t.co/wwETeo3Txk"
Url: https://twitter.com/mammadori/status/901927792081821697
Height: 1
Title:  Marco Amadori su Twitter: "Noted ! Quote that tweet and be part of the first note-chain ! Thanks @barrysilbert https://t.co/NJThhOcaem"
Url: https://twitter.com/LarryBitcoin/status/901926672664027138
Height: 2
Title:  Larry Nah no{ted,2X} su Twitter: "Noted ! Quote that tweet and be part of the first note-chain ! Thanks @barrysilbert https://t.co/COK1321JcB"
Url: https://twitter.com/a_ferron/status/901925186735366145
Height: 3
Title:  Antoine FERRON su Twitter: "Noted ! Quote that tweet and be part of the first note-chain ! Thanks @barrysilbert https://t.co/Sdj2qLnTZM"
Url: https://twitter.com/EtheriumToken/status/901924975220850695
Height: 4
Title:  Etherium su Twitter: "Noted ! Quote that tweet and be part of the first note-chain ! Thanks @barrysilbert https://t.co/OokITHlRtQ"
Url: https://twitter.com/Ce_ne/status/901920204590125063
Height: 5
Title:  Cene su Twitter: "Noted!
 https://t.co/eJF3XsspB6"
Url: https://twitter.com/AaronvanW/status/901919661020901377
Height: 6
Title:  Aaron van Wirdum su Twitter: "Noted. https://t.co/OuF4qEEIQY"
Url: https://twitter.com/giacomozucco/status/901919106227634176
Height: 7
Title:  G. Zucco NO{ted,2X} su Twitter: "Finally, a Note-chain!!! (to be fair, crypto-note tried it!). #Noted https://t.co/hSjgfGBAzk"
Url: https://twitter.com/Truthcoin/status/901787988266450944
Height: 8
Title:  Paul Sztorc su Twitter: "Noted https://t.co/caSZY8cboL"
Url: https://twitter.com/Excellion/status/901760494008020992
Height: 9
Title:  Samson Mow su Twitter: "Noted. https://t.co/41qqwY2sSu"
Url: https://twitter.com/bitstein/status/901458532792512512
Height: 10
Title:  Michael Goldstein su Twitter: "It's August 26th, 2017, and I still don't care about what @barrysilbert wants for Bitcoin."
Visit tweet: https://twitter.com/mir_btc/status/901928579159773184
Genesis tweet: https://twitter.com/bitstein/status/901458532792512512
Height: 11
```


