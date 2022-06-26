let abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_initBaseURI",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_mintAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_id_nft",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_state",
				"type": "bool"
			}
		],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseExtension",
				"type": "string"
			}
		],
		"name": "setBaseExtension",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newCost",
				"type": "uint256"
			}
		],
		"name": "setCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newmaxMintAmount",
				"type": "uint256"
			}
		],
		"name": "setmaxMintAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseExtension",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxMintAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "supply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let myAddress = '0x65581cB189A48f76521F91B9B99cfCA4A45AFEaD';

const WEB3_PROVIDER = "http://127.0.0.1:7545";
var web3;

async function web3providerMetamask(){
	if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
	  console.log('MetaMask is installed!');
		// getAccount();
		ethereum
		.request({ method: 'eth_accounts' })
		.then(handleAccountsChanged)
		.catch(console.error);
	} else {
      web3 = new Web3(new Web3.providers.HttpProvider(WEB3_PROVIDER));
			console.log('Please install MetaMask!');
	}
}

async function getAccount() {
  if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
	  console.log('MetaMask is installed!');
		// getAccount();
    ToPolygonNet();
  	ethereum
  			.request({ method: 'eth_requestAccounts'})
  			.then(handleAccountsChanged)
  			.catch((err) => {
  					if (err.code === 4001) {
  							console.log('Please connect to MetaMask.');
  					} else {
  							console.error(err);
  					}
  			});
	} else {
      web3 = new Web3(new Web3.providers.HttpProvider(WEB3_PROVIDER));
			console.log('Please install MetaMask!');
      alert('Please install MetaMask!');
	}
}

function handleEthereum() {
  const { ethereum } = window;
  if (ethereum && ethereum.isMetaMask) {
    console.log('Ethereum successfully detected!');
    // Access the decentralized web!
  } else {
    console.log('Please install MetaMask!');
  }
}

async function PostAddressAccount() {

	//передвижение карты
	var ball = document.getElementById('map');

	ball.onmousedown = function(e) {

	  var coords = getCoords(ball);
	  var shiftX = e.pageX - coords.left;
	  var shiftY = e.pageY - coords.top;

	  ball.style.position = 'absolute';

	  moveAt(e);


	  function moveAt(e) {
	    var nftmap = document.getElementById('map');

	      ball.style.left = e.pageX - shiftX + 'px';

	      ball.style.top = e.pageY - shiftY + 'px';

	  }

	  document.onmousemove = function(e) {
	    moveAt(e);
	  };

	  ball.onmouseup = function() {
	    document.onmousemove = null;
	    ball.onmouseup = null;
	  };

	}

	ball.ondragstart = function() {
	  return false;
	};

	function getCoords(elem) {   // кроме IE8-
	  var box = elem.getBoundingClientRect();
	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	}

	var nftmap = document.getElementById('map');
	var nftbutton = document.getElementById('nft');
	var buttom = document.createElement("buttom");


	window.firstHeight = nftmap.offsetHeight;

	document.getElementById('result').innerHTML = 'CONNECT';
  web3providerMetamask();

}

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
				document.getElementById('result').innerHTML = 'CONNECT';
    } else {
				document.getElementById('result').innerHTML = accounts[0].slice (0, 6)+'..'+accounts[0].slice (38, 42);
    }
}

function AddPolygonNet(){
	ethereum.request({
	    method: 'wallet_addEthereumChain',
	    params: [{
	        chainId: web3.utils.toHex('43114'),
	        chainName: 'Avalanche Network',
	        nativeCurrency: {
	            name: 'AVAX',
	            symbol: 'AVAX',
	            decimals: 18
	        },
	        rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
	        blockExplorerUrls: ['https://snowtrace.io']
	    }],
	})
	.then(() => console.log('network added'))
	.catch(() => console.log('could not add network'))
}

function ToPolygonNet(){
	var chainIdHex = web3.utils.toHex('1337');
	console.log(chainIdHex);
	ethereum.request({
	    method: 'wallet_switchEthereumChain',
	    params: [{ chainId: chainIdHex }],
	})
	.then(() => console.log('network has been set'))
	.catch((e) => {
	    if (e.code === 4902) {
	       console.log('network is not available, add it');
				 AddPolygonNet();
	    } else {
	       console.log('could not set network');
	    }
	})
}

async function read(id) {
  let sel = document.getElementById('#Id');
  let myContract = new web3.eth.Contract(abi, myAddress);
  await myContract.methods.ownerOf(id).call()
    .then(async(data) => {
      document.getElementById('ownerOf').innerHTML = data;
			sel.style.visibility = "hidden";

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
			let account = accounts[0];
			let formaA = document.getElementById('forma');
			if (data.toLowerCase() == account) {
				formaA.style.display = "inline";
			} else {

				formaA.style.display = "none";
			}

			document.getElementById('idnft').innerHTML = 'Land № ' + id;
			document.getElementById('idnft2').innerHTML = 'Land № ' + id;

			let formaV = document.getElementById('description');
			formaV.style.visibility = "visible";

			$.ajax({
				url: '',
				type: 'post',
				dataType: 'json',
				data: id,
				success: function (dataA){
					document.getElementById('description').innerHTML = dataA[0];
				},
		    error: function () {
					document.getElementById('description').innerHTML = '';
				}
			});

			sorceImg = document.getElementById(id).src;

			document.getElementById('idImg').src = sorceImg;

			id_total = id;
			document.getElementById('id_id_nft').innerHTML = id;

    })
    .catch(function (error) {

			document.getElementById('idnft').innerHTML = 'Land № ' + id;
			document.getElementById('idnft2').innerHTML = 'Land № ' + id;


			let formaV = document.getElementById('description');
			formaV.style.visibility = "hidden";


      document.getElementById('ownerOf').innerHTML = 'This land in sale, buy it!';
      sel.style.visibility = "visible";

			let formaA = document.getElementById('forma');
			formaA.style.display = "none";
    });
}

var id_total;

async function mint(id) {
  getAccount();
  var a = false;
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  let account = accounts[0];
  let myContract = new web3.eth.Contract(abi, myAddress);
  await myContract.methods.ownerOf(id).call()
    .then((data) => {
      console.log('This land is sold out');
    })
    .catch(function (error) {

      a = true;
    });

  if (a == true) {
    let eth_amount = await myContract.methods.cost().call();

    await myContract.methods.mint(account, 1, id).send({from:account, value:eth_amount});
    document.getElementById('ownerOf').innerHTML = account;
    let sel = document.getElementById('#Id');
    sel.style.visibility = "hidden";
  } else {
    console.log('This land is sold out');
  }
}





function bdwrite() {
	$.ajax({
		url: '',
		type: 'post-db',
		dataType: 'json'
	});
}



window.addEventListener("click", click);
function click(e) {
  let elem = document.elementFromPoint(e.pageX, e.pageY);
  console.log(elem.id);
	// console.log(elem);
	read(elem.id);
	let sel = document.getElementById('#Id');
	sel.setAttribute('onclick','mint(' + elem.id + ')');
}

var firstHeight = 0;

var plmn = true;
function zoom(plmn){
  var nftmap = document.getElementById('map');


  let start = Date.now(); // запомнить время начала

  let timer = setInterval(function() {
    // сколько времени прошло с начала анимации?
    let timePassed = Date.now() - start;

    if (timePassed >= 200) {
      clearInterval(timer); // закончить анимацию через 2 секунды
      return;
    }

    if (plmn && 5*window.innerWidth <= nftmap.offsetWidth + timePassed/10 && nftmap.offsetWidth + timePassed/10 <= 100*window.innerWidth){
      nftmap.style.width = nftmap.offsetWidth + timePassed/10 + 'px';
      nftmap.style.height = nftmap.offsetHeight + timePassed/10 + 'px';
    }
    else if (!plmn && 5*window.innerWidth <= nftmap.offsetWidth - timePassed/10 && nftmap.offsetWidth - timePassed/10 <= 100*window.innerWidth){
      nftmap.style.width = nftmap.offsetWidth - timePassed/10 + 'px';
      nftmap.style.height = nftmap.offsetHeight - timePassed/10 + 'px';
    }


  }, 20);
}

window.addEventListener("wheel", onWheel);
function onWheel(e) {
  var nftmap = document.getElementById('map');
  e = e || window.event;

  // wheelDelta не даёт возможность узнать количество пикселей
  var delta = e.deltaY || e.detail || e.wheelDelta;

  var info = document.getElementById('delta');

	delta = 3 * delta;
  if (0.7 * window.innerWidth <= nftmap.offsetWidth - delta && nftmap.offsetWidth - delta <= 15*window.innerWidth){
    nftmap.style.width = nftmap.offsetWidth - delta + 'px';
    nftmap.style.height = nftmap.offsetHeight - delta * 2 + 'px';
    var scalechange = (nftmap.offsetHeight / window.firstHeight) - 1;
    offsetX = -(e.pageX * scalechange);
    offsetY = -(e.pageY * scalechange);
    nftmap.style.left = offsetX + 'px';
    nftmap.style.top = offsetY + 'px';
    console.log(scalechange);
  }


}

function minimap(){
  var nftmap = document.getElementById('map');
  var body = document.getElementById('body');
  var minimap = nftmap.cloneNode(true);
  minimap.id = "minimap";
  body.appendChild(minimap);
}
