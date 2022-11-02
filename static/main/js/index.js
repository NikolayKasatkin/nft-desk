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

let myAddress = '0x95Ce19Ab4AF262711D4Af1974f1E03045e3d5527';

const WEB3_PROVIDER = "https://mainnet.infura.io/v3/";
// var web3;

async function web3providerMetamask(){
	if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
	  console.log('MetaMask is installed!');
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
    var myMobile = {
  			Android: function() {
  					return navigator.userAgent.match(/Android/i);
  			},
  			BlackBerry: function() {
  					return navigator.userAgent.match(/BlackBerry/i);
  			},
  			iOS: function() {
  					return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  			},
  			Opera: function() {
  					return navigator.userAgent.match(/Opera Mini/i);
  			},
  			Windows: function() {
  					return navigator.userAgent.match(/IEMobile/i);
  			},
  			any: function() {
  					return (myMobile.Android() ||
  									myMobile.BlackBerry() ||
  									myMobile.iOS() ||
  									myMobile.Opera() ||
  									myMobile.Windows());
  			}
  	};
  	if( myMobile.any() && typeof window.ethereum == 'undefined') {
  			document.location.href = "https://metamask.app.link/dapp/ndesk.io/";
  	} else {
          if (typeof window.ethereum !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        	  console.log('MetaMask is installed!');
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
var openInfo = false;
async function PostAddressAccount() {

// 	var myMobile = {
// 			Android: function() {
// 					return navigator.userAgent.match(/Android/i);
// 			},
// 			BlackBerry: function() {
// 					return navigator.userAgent.match(/BlackBerry/i);
// 			},
// 			iOS: function() {
// 					return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 			},
// 			Opera: function() {
// 					return navigator.userAgent.match(/Opera Mini/i);
// 			},
// 			Windows: function() {
// 					return navigator.userAgent.match(/IEMobile/i);
// 			},
// 			any: function() {
// 					return (myMobile.Android() ||
// 									myMobile.BlackBerry() ||
// 									myMobile.iOS() ||
// 									myMobile.Opera() ||
// 									myMobile.Windows());
// 			}
// 	};
// 	if( myMobile.any() ) {
// 		$.ajax({
// 			url: '',
// 			type: 'postm',
// 			success: function (){
// 				alert('success');
// 			},
// 	        error: function () {
// 				alert('error');
// 			}
// 		});
// 	} else {
// 		console.log('PC');
// 		$.ajax({
// 			url: '',
// 			type: 'postpc',
// 			success: function (){
// 				alert('success');
// 			},
// 	        error: function () {
// 				alert('error');
// 			}
// 		});
// 	}

    var ball = document.getElementById('map');
    window.standardWidth = ball.getBoundingClientRect().width;

    // zoom(-1);
    // zoom(-1);

    if (window.screen.width <= 500){
        // document.getElementsByClassName('top_box')[0].style.display = 'none';
        document.getElementsByClassName('left_box')[0].style.display = 'none';
        document.getElementsByClassName('right_box')[0].style.display = 'none';
        document.getElementsByClassName('bottom_box')[0].style.display = 'none';
        document.getElementsByClassName('bottom_botoom')[0].style.display = 'none';
        document.getElementsByClassName('top_top')[0].style.display = 'none';
        // document.getElementsByClassName('plus')[0].style.display = 'block';
        document.getElementById('connectBtnMob').style.display = 'block';
        document.getElementById('connectBtnPC').style.display = 'none';
        document.getElementById('info').style.display = 'none';
        //document.getElementById('info').style.zIndex = '-1';
        // document.getElementById('info').style.marginTop = '100vh';

        //     document.getElementsByClassName('closeInfo').style.display = 'none';
        // document.getElementsByClassName('img_of_nft').style.display = 'none';
        // document.getElementsByClassName('h1of').style.display = 'none';
        // document.getElementsByClassName('h2of').style.display = 'none';
        // document.getElementsByClassName('option').style.display = 'none';
        // document.getElementsByClassName('button_save').style.display = 'none';
        // document.getElementsByClassName('discandtwiter').style.display = 'none';
    }

    ball.ontouchstart = function(e) {
          var coords = getCoords(ball);
    	  var shiftX = e.pageX - coords.left;
    	  var shiftY = e.pageY - coords.top;


          console.log(coords.left, coords.top);

    	  ball.style.position = 'absolute';

    	  moveAt(e);


    	  function moveAt(e) {
    	    var nftmap = document.getElementById('map');

    	      ball.style.left = e.pageX - shiftX + 'px';

    	      ball.style.top = e.pageY - shiftY + 'px';

    	  }

    	  document.ontouchmove = function(e) {
    	    moveAt(e);
    	  };

    	  ball.ontouchend = function() {
    	    document.ontouchmove = null;
    	    ball.ontouchend = null;
    	  };
        }

	//передвижение карты

	ball.onmousedown = function(e) {

	  var coords = getCoords(ball);
	  var shiftX = e.pageX - coords.left;
	  var shiftY = e.pageY - coords.top;


      console.log(coords.left, coords.top);

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

	document.getElementById('result').innerHTML = 'connect wallet';
  web3providerMetamask();

}

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
				document.getElementById('result').innerHTML = 'connect wallet';
				document.getElementById('connectBtnMob').style.boxShadow = '0 0 5px  #FF4500';
    } else {
				document.getElementById('result').innerHTML = accounts[0].slice (0, 6)+'..'+accounts[0].slice (38, 42);
				document.getElementById('connectBtnMob').style.boxShadow = 'none';
    }
}
var countZoom = 1;
function AddPolygonNet(){
	ethereum.request({
	    method: 'wallet_addEthereumChain',
	    params: [{
	        chainId: web3.utils.toHex('1'),
	        chainName: 'Ethereum mainnet',
	        nativeCurrency: {
	            name: 'ETH',
	            symbol: 'ETH',
	            decimals: 18
	        },
	        rpcUrls: ['https://mainnet.infura.io/v3/'],
	        blockExplorerUrls: ['https://etherscan.io']
	    }],
	})
	.then(() => console.log('network added'))
	.catch(() => console.log('could not add network'))
}

function ToPolygonNet(){
	var chainIdHex = web3.utils.toHex('1');
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
			let formaA = document.getElementById('pen');
			if (data.toLowerCase() == account) {
			    console.log('true');
				formaA.style.display = "block";
			} else {
                console.log('false');
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

        //   document.getElementById('ownerOf').innerHTML = 'This land in sale, buy it!';
        //   sel.style.visibility = "hidden";

			let formaA = document.getElementById('pen');
			formaA.style.display = "none";

			sorceImg = document.getElementById(id).src;
            // console.log(sorceImg);
			document.getElementById('idImg').src = sorceImg;

            if (sorceImg == 'https://www.ndesk.io/media/images/green.png') {
                document.getElementById('ownerOf').innerHTML = 'This land in sale, buy it!';
                sel.style.visibility = "visible";
            } else {
                document.getElementById('ownerOf').innerHTML = 'This land is sold out!';
                sel.style.visibility = "hidden";

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
            }
    });
}

var id_total;

async function mint(id) {
//   getAccount();
  var a = false;
//   alert(a);
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  let account = accounts[0];
  let myContract = new web3.eth.Contract(abi, myAddress);
  await myContract.methods.ownerOf(id).call()
    .then((data) => {
      console.log('This land is sold out');
    //   alert(6);
    })
    .catch(async function (error) {
    // alert(7);
      a = true;
    //   alert(8);
          let eth_amount = await myContract.methods.cost().call();
// alert(9);alert(account);alert(eth_amount);

    let transa = await myContract.methods.mint(account, 1, id).send({from:account, value:eth_amount});
    // alert(10);
    document.getElementById('ownerOf').innerHTML = account;
    let sel = document.getElementById('#Id');
    sel.style.visibility = "hidden";
    });
    // alert('11' + a);
//   if (a == true) {
//     let eth_amount = await myContract.methods.cost().call();

//     await myContract.methods.mint(account, 1, id).send({from:account, value:eth_amount});
//     document.getElementById('ownerOf').innerHTML = account;
//     let sel = document.getElementById('#Id');
//     sel.style.visibility = "hidden";
//     alert(8);
//   } else {
//     console.log('This land is sold out');
//     alert(9);
//   }
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
  if (elem.className == 'nft'){
    elem = elem.childNodes[1];
  }
  if (elem.className == 'nft_img'){
//     console.log(elem.className);
// 	console.log(elem);
    if (openInfo == false && window.screen.width <= 500){
        document.getElementById('info').style.display = 'inline';
        document.getElementsByClassName('plus')[0].style.display = 'none';
        document.getElementById('map').style.display = 'none';
	   // document.getElementById('info').style.zIndex = '111';
	   //document.getElementById('info').style.marginTop = '50vh';
	   //document.getElementsByClassName('closeInfo').style.display = 'block';
    //     document.getElementsByClassName('img_of_nft').style.display = 'block';
    //     document.getElementsByClassName('h1of').style.display = 'block';
    //     document.getElementsByClassName('h2of').style.display = 'block';
    //     document.getElementsByClassName('option').style.display = 'block';
    //     document.getElementsByClassName('button_save').style.display = 'block';
    //     document.getElementsByClassName('discandtwiter').style.display = 'block';
	    openInfo = true;
	}

//     if (window.screen.width <= 500 && countZoom == 1){
//     	var nftmap = document.getElementById('map');
//         var centerHei = e.pageY;
//         var centerWin = e.pageX;
//         var nftmapClient = nftmap.getBoundingClientRect();
//         var cordMouseOnBlockX = centerWin - nftmapClient.left;
//         var cordMouseOnBlockY = centerHei - nftmapClient.top;
//         var percentegeCMOBX = cordMouseOnBlockX/nftmapClient.width;
//         var percentegeCMOBY = cordMouseOnBlockY/nftmapClient.height;
//           countZoom = 6;

//           nftmap.style.width = standardWidth * countZoom * countZoom + 'px';
//           nftmap.style.height = 2 * standardWidth * countZoom * countZoom + 'px';

//           var perNewX = percentegeCMOBX * document.getElementById('map').getBoundingClientRect().width;
//           var perNewY = percentegeCMOBY * document.getElementById('map').getBoundingClientRect().height;
//           var itogoX = -(perNewX - centerWin);
//           var itogoY = -(perNewY - centerHei);
//           nftmap.style.left = itogoX +'px';
//           nftmap.style.top = itogoY +'px';
//     }
	read(elem.id);
	let sel = document.getElementById('#Id');
	sel.setAttribute('onclick','mint(' + elem.id + ')');
  }
}
var clck = true;
var firstHeight = 0;

var plmn = true;
function zoom(delta){
  var nftmap = document.getElementById('map');
  var centerHei = window.screen.height/2;
    if (window.screen.width <= 500){
        var centerWin = window.screen.width/2;
    }
    else{
       var centerWin = window.screen.width*0.625;
    }
    var nftmapClient = nftmap.getBoundingClientRect();
    if (!(document.elementFromPoint(centerWin, centerHei).className == 'nft' || document.elementFromPoint(centerWin, centerHei).className == 'nft_img')){
        centerWin = nftmapClient.width/2 + nftmapClient.left;
        centerHei = nftmapClient.height/2 + nftmapClient.top;
    }
    var cordMouseOnBlockX = centerWin - nftmapClient.left;
    var cordMouseOnBlockY = centerHei - nftmapClient.top;
    var percentegeCMOBX = cordMouseOnBlockX/nftmapClient.width;
    var percentegeCMOBY = cordMouseOnBlockY/nftmapClient.height;
    if (countZoom > 1 && countZoom < 9 && delta > 0){
      if(countZoom == 2){
        countZoom = 1.4;
      }
      else if(countZoom == 1.4){
          countZoom = 1.2;
      }
      else if(countZoom == 1.2){
          countZoom = 1;
      }
      else{
        countZoom --;
      }

      nftmap.style.width = standardWidth * countZoom * countZoom + 'px';
      nftmap.style.height = 2 * standardWidth * countZoom * countZoom + 'px';

      var perNewX = percentegeCMOBX * document.getElementById('map').getBoundingClientRect().width;
      var perNewY = percentegeCMOBY * document.getElementById('map').getBoundingClientRect().height;
      var itogoX = -(perNewX - centerWin);
      var itogoY = -(perNewY - centerHei);
      nftmap.style.left = itogoX +'px';
      nftmap.style.top = itogoY +'px';
    }
    else if (countZoom > 0 && countZoom < 8 && delta < 0){
      if(countZoom == 1){
        countZoom = 1.2;
      }
      else if(countZoom == 1.2){
          countZoom = 1.4;
      }
      else if(countZoom == 1.4){
          countZoom = 2;
      }
      else{
        countZoom++;
      }

      nftmap.style.width = standardWidth * countZoom * countZoom + 'px';
      nftmap.style.height = 2 * standardWidth * countZoom * countZoom + 'px';

      var perNewX = percentegeCMOBX * document.getElementById('map').getBoundingClientRect().width;
      var perNewY = percentegeCMOBY * document.getElementById('map').getBoundingClientRect().height;
      var itogoX = -(perNewX - centerWin);
      var itogoY = -(perNewY - centerHei);
      nftmap.style.left = itogoX +'px';
      nftmap.style.top = itogoY +'px';
    }

//   let start = Date.now(); // запомнить время начала

//   let timer = setInterval(function() {
//     // сколько времени прошло с начала анимации?
//     let timePassed = Date.now() - start;

//     if (timePassed >= 200) {
//       clearInterval(timer); // закончить анимацию через 2 секунды
//       return;
//     }

//     if (plmn && 5*window.innerWidth <= nftmap.offsetWidth + timePassed/10 && nftmap.offsetWidth + timePassed/10 <= 100*window.innerWidth){
//       nftmap.style.width = nftmap.offsetWidth + timePassed/10 + 'px';
//       nftmap.style.height = nftmap.offsetHeight + timePassed/10 + 'px';
//     }
//     else if (!plmn && 5*window.innerWidth <= nftmap.offsetWidth - timePassed/10 && nftmap.offsetWidth - timePassed/10 <= 100*window.innerWidth){
//       nftmap.style.width = nftmap.offsetWidth - timePassed/10 + 'px';
//       nftmap.style.height = nftmap.offsetHeight - timePassed/10 + 'px';
//     }


//   }, 20);
}

var standardWidth;
window.addEventListener("wheel", onWheel);
function onWheel(e) {
  console.log(document.elementFromPoint(e.pageX, e.pageY));
  if (document.elementFromPoint(e.pageX, e.pageY).className == 'nft' || document.elementFromPoint(e.pageX, e.pageY).className == 'map' || document.elementFromPoint(e.pageX, e.pageY).className == 'nft_img'){
    var nftmap = document.getElementById('map');
    e = e || window.event;
    var delta = e.deltaY || e.detail || e.wheelDelta;

    var nftmapClient = nftmap.getBoundingClientRect();
    var cordMouseOnBlockX = e.pageX - nftmapClient.left;
    var cordMouseOnBlockY = e.pageY - nftmapClient.top;
    var percentegeCMOBX = cordMouseOnBlockX/nftmapClient.width;
    var percentegeCMOBY = cordMouseOnBlockY/nftmapClient.height;

    if (countZoom > 1 && countZoom < 9 && delta > 0){
      if(countZoom == 2){
        countZoom = 1.4;
      }
      else if(countZoom == 1.4){
          countZoom = 1.2;
      }
      else if(countZoom == 1.2){
          countZoom = 1;
      }
      else{
        countZoom --;
      }

      nftmap.style.width = standardWidth * countZoom * countZoom + 'px';
      nftmap.style.height = 2 * standardWidth * countZoom * countZoom + 'px';

      var perNewX = percentegeCMOBX * document.getElementById('map').getBoundingClientRect().width;
      var perNewY = percentegeCMOBY * document.getElementById('map').getBoundingClientRect().height;
      var itogoX = -(perNewX - e.pageX);
      var itogoY = -(perNewY - e.pageY);
      nftmap.style.left = itogoX +'px';
      nftmap.style.top = itogoY +'px';
    }
    else if (countZoom > 0 && countZoom < 8 && delta < 0){
      if(countZoom == 1){
        countZoom = 1.2;
      }
      else if(countZoom == 1.2){
          countZoom = 1.4;
      }
      else if(countZoom == 1.4){
          countZoom = 2;
      }
      else{
        countZoom++;
      }

      nftmap.style.width = standardWidth * countZoom * countZoom + 'px';
      nftmap.style.height = 2 * standardWidth * countZoom * countZoom + 'px';

      var perNewX = percentegeCMOBX * document.getElementById('map').getBoundingClientRect().width;
      var perNewY = percentegeCMOBY * document.getElementById('map').getBoundingClientRect().height;
      var itogoX = -(perNewX - e.pageX);
      var itogoY = -(perNewY - e.pageY);
      nftmap.style.left = itogoX +'px';
      nftmap.style.top = itogoY +'px';
    }
  }
}

function minimap(){
  var nftmap = document.getElementById('map');
  var body = document.getElementById('body');
  var minimap = nftmap.cloneNode(true);
  minimap.id = "minimap";
  body.appendChild(minimap);
}

function closeInfo(){
    openInfo = false;
    document.getElementById('info').style.display = 'none';
    document.getElementsByClassName('plus')[0].style.display = 'block';
    document.getElementById('map').style.display = 'block';
    // document.getElementById('info').style.marginTop = '100vh';\
    // document.getElementsByClassName('closeInfo').style.display = 'none';
    //     document.getElementsByClassName('img_of_nft').style.display = 'none';
    //     document.getElementsByClassName('h1of').style.display = 'none';
    //     document.getElementsByClassName('h2of').style.display = 'none';
    //     document.getElementsByClassName('option').style.display = 'none';
    //     document.getElementsByClassName('button_save').style.display = 'none';
    //     document.getElementsByClassName('discandtwiter').style.display = 'none';
}
