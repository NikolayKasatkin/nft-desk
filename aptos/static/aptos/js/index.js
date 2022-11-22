//*************************** PETRA WALLET **********************************
async function web3providerPetra(){
	if (typeof window.aptos !== 'undefined') {
		let wallet = getPetraWallet();
			let account = await wallet.account()
				.then((account) => {
					handleAccountsChanged([account.address]);
				})
				.catch(console.error);
	} else {
		console.log('Please install Petra');
	}
}

async function getAccountPetra() {
	try {
		if (window.martian._isConnected){
			window.martian.disconnect();
		}
	}
	catch{}
	let wallet = getPetraWallet();
	try {
		let response = await wallet.connect()
			.then((account) => {
				handleAccountsChanged([account.address]);
				console.log(account.address);
				window.location.href = "#";
			})
			.catch(console.error);
	} catch (error) {
		// { code: 4001, message: "User rejected the request."}
	}
}

var getPetraWallet = () => {
	if ('aptos' in window) {
		return window.aptos;
	} else {
		window.open('https://petra.app/', `_blank`);
	}
}

// Events Petra **************
window.aptos.onNetworkChange(async (newNetwork) => {
	let network = await window.aptos.network();
  network = newNetwork;
	console.log(newNetwork);
});

window.aptos.onAccountChange(async (newAccount) => {
	console.log("Changed address", newAccount);
	if (Object.keys(newAccount).length != 0) {
		let currentAccount = await window.aptos.account();
		currentAccount = newAccount;
		handleAccountsChanged([newAccount.address]);
	} else {
		getAccountPetra();
	}
});

window.aptos.onDisconnect(async() => {
	let connectionStatus = await window.aptos.isConnected();
  connectionStatus = false;
	handleAccountsChanged([]);
});

//**************** MARTIAN WALLET *******************************************
var getMartianWallet = () => {
  if ("martian" in window) {
    return(window.martian);
  }
  window.open("https://www.martianwallet.xyz/", "_blank");
};

async function getAccountMartian() {
	try {
		window.aptos.isConnected()
		.then( (res) => {
				if (res){
					window.aptos.disconnect();
				}
		});
	}
	catch{}
	let wallet = getMartianWallet();
	try {
		let response = await wallet.connect()
			.then((account) => {
				handleAccountsChanged([account.address]);
				console.log(account.address);
				window.location.href = "#";
			})
			.catch(console.error);
	} catch (error) {
		// { code: 4001, message: "User rejected the request."}
	}
}

//Events Martian ****************
window.martian.onNetworkChange((name) => console.log(name));

window.martian.onAccountChange(async (address) => {
	console.log("Changed address", address);
	let connectionStatus = await window.martian.isConnected();
	if (connectionStatus) {
		handleAccountsChanged([address]);
	} else {
		getAccountMartian();
	}
});

var accountOwner;

// chaange name buttom
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
				document.getElementById('result').innerHTML = 'connect wallet';
				document.getElementById('connectBtnMob').style.boxShadow = '0 0 5px  #FF4500';
    } else {
				accountOwner = accounts[0];
				document.getElementById('result').innerHTML = accounts[0].slice (0, 6)+'..'+accounts[0].slice (62, 66);
				document.getElementById('connectBtnMob').style.boxShadow = 'none';
    }
}


var openInfo = false;

var image;
var maxMapSize;
var minMapSize;

async function PostAddressAccount() {
		// карта
		image = document.getElementById('map');
		minMapSize = image.getBoundingClientRect().width;
		maxMapSize = minMapSize*50;
	  image.onmousedown = function(e) {
	    var coords = getCoords(image);
	    var shiftX = e.pageX - coords.left;
	    var shiftY = e.pageY - coords.top;

	    moveAt(e);

	    function moveAt(e) {
	      image.style.left = e.pageX - shiftX + 'px';
	      image.style.top = e.pageY - shiftY + 'px';
	    }

	    document.onmousemove = function(e) {
	      moveAt(e);
	    };

	    image.onmouseup = function() {
	      document.onmousemove = null;
	      image.onmouseup = null;
	    };
	  }

		//обработка касаний
		image.ontouchstart = function(e) {
        var coords = getCoords(image);
    	  var shiftX = e.pageX - coords.left;
    	  var shiftY = e.pageY - coords.top;

    	  moveAt(e);

    	  function moveAt(e) {
					image.style.left = e.pageX - shiftX + 'px';
		      image.style.top = e.pageY - shiftY + 'px';
    	  }

    	  document.ontouchmove = function(e) {
    	    moveAt(e);
    	  };

    	  image.ontouchend = function() {
    	    document.ontouchmove = null;
    	    image.ontouchend = null;
    	  };
      }


	  function getCoords(elem) {   // кроме IE8-
	    var box = elem.getBoundingClientRect();
	    return {
	      top: box.top + pageYOffset,
	      left: box.left + pageXOffset
	    };
	  }

		window.addEventListener("wheel", onWheel);
		function onWheel(e) {
		  if (e.target.className == 'nft' || e.target.id == 'map' || e.target.className == 'nft_img'){
		    var bounding = getBounding(image);
				e = e || window.event;
				var delta = e.deltaY || e.detail || e.wheelDelta;
				if (bounding.width - delta*bounding.width/500 >= minMapSize && bounding.width - delta*bounding.width/500 <= maxMapSize){
			    image.style.height = bounding.height - delta*bounding.width/500 + 'px';
			    image.style.width = bounding.width - delta*bounding.width/500 + 'px';
			    image.style.top = bounding.top + delta*(e.pageY-bounding.top)/bounding.height*bounding.width/500 + 'px';
			    image.style.left = bounding.left + delta*(e.pageX-bounding.left)/bounding.width*bounding.width/500 + 'px';
				}
		  }
		}

		// карта

    if (window.screen.width <= 500){
        document.getElementsByClassName('left_box')[0].style.display = 'none';
        document.getElementsByClassName('right_box')[0].style.display = 'none';
        document.getElementsByClassName('bottom_box')[0].style.display = 'none';
        document.getElementsByClassName('bottom_botoom')[0].style.display = 'none';
        document.getElementsByClassName('top_top')[0].style.display = 'none';
        document.getElementById('connectBtnMob').style.display = 'block';
        document.getElementById('connectBtnPC').style.display = 'none';
        document.getElementById('info').style.display = 'none';
    }
	document.getElementById('result').innerHTML = 'connect wallet';
	web3providerPetra();
}










async function read(id) {
	if (openInfo == false && window.screen.width <= 500){
			document.getElementById('info').style.display = 'inline';
			document.getElementsByClassName('plus')[0].style.display = 'none';
			document.getElementById('map').style.display = 'none';
			openInfo = true;
	}

  let sel = document.getElementById('#Id');
	sel.setAttribute('onclick','mint(' + id + ')');

	//проверка нфт пользователя или нет
	$.ajax({
		url: '',
		type: 'OWNEROF',
		dataType: 'json',
		data: id+'&'+accountOwner,
		success: function (data){
			if (data == true){
					formaA.style.display = "block";
			}
			else{
				formaA.style.display = "none";
			}
		},
		error: function () {
		}
	});

	document.getElementById('idnft').innerHTML = 'Land № ' + id;
	document.getElementById('idnft2').innerHTML = 'Land № ' + id;
	document.getElementById('id_id_nft').innerHTML = id;
	let formaV = document.getElementById('description');
	formaV.style.visibility = "hidden";

	let formaA = document.getElementById('pen');
	formaA.style.display = "none";

	sorceImg = document.getElementById(id).style.backgroundImage.split('"')[1];
	document.getElementById('idImg').src = sorceImg;
	$.ajax({
		url: '',
		type: 'HASOWNER',
		dataType: 'json',
		data: id.toString(),
		success: function (bo){
			if (bo){
				document.getElementById('ownerOf').innerHTML = 'This land is sold out!';
				sel.style.visibility = "hidden";
				let formaV = document.getElementById('description');
				formaV.style.visibility = "visible";
				$.ajax({
					url: '',
					type: 'POST',
					dataType: 'json',
					data: id.toString(),
					success: function (dataA){
						document.getElementById('description').innerHTML = dataA[0];
					},
					error: function () {
						document.getElementById('description').innerHTML = '';
					}
				});
			}
			else {
				document.getElementById('ownerOf').innerHTML = 'This land in sale, buy it!';
				sel.style.visibility = "visible";
			}
		},
		error: function () {
		}
	});
}


var id_total;

async function mint(id) {
	window.aptos.isConnected()
	.then( async (res) => {
		if (res)
		{
			const transaction = {
		    arguments: [id.toString()],
		    function: '0x1932569b5429a7f30e62de0bd4af8dbdba914e490577ad65d9c7f8fdb7a67dff::minting::mint_nft',
		    type: 'entry_function_payload',
		    type_arguments: [],
		    };

		  const pendingTransaction = await window.aptos.signAndSubmitTransaction(transaction);
		}
		else if (window.martian._isConnected)
		{
			const payload = {
				function: '0x1932569b5429a7f30e62de0bd4af8dbdba914e490577ad65d9c7f8fdb7a67dff::minting::mint_nft',
				type_arguments: [],
				arguments: [id.toString()],
			};
			const transaction = await window.martian.generateTransaction(accountOwner, payload);
			const txnHash = await window.martian.signAndSubmitTransaction(transaction);
		}
		// document.getElementById('ownerOf').innerHTML = accountOwner;
		let sel = document.getElementById('#Id');
	  sel.style.visibility = "hidden";

		read(id);
	} );
}

// function bdwrite() {
// 	$.ajax({
// 		url: '',
// 		type: 'post-db',
// 		dataType: 'json'
// 	});
// }


function getBounding(image){
  var box = image.getBoundingClientRect();
  return {
    height: box.height,
    width: box.width,
    top: box.top,
    left: box.left
  };
}

function zoom(z){
	var zoomCount = 500;
  if (document.elementFromPoint(window.innerWidth*0.625, window.innerHeight/2).className == 'nft' ||  document.elementFromPoint(window.innerWidth*0.625, window.innerHeight/2).className == 'map' || document.elementFromPoint(window.innerWidth*0.625, window.innerHeight/2).className == 'nft_img'){
		let timerId = setInterval(function() {
			var bounding = getBounding(image);
			if (bounding.width + z*zoomCount*bounding.width/100/100 >= minMapSize && bounding.width + z*zoomCount*bounding.width/100/100 <= maxMapSize){
				image.style.height = bounding.height + z*zoomCount*bounding.width/100/100 + 'px';
		    image.style.width = bounding.width + z*zoomCount*bounding.width/100/100 + 'px';
		    image.style.top = bounding.top - z*zoomCount*(window.innerHeight/2-bounding.top)/bounding.height*bounding.width/100/100 + 'px';
		    image.style.left = bounding.left - z*zoomCount*(window.innerWidth*0.625-bounding.left)/bounding.width*bounding.width/100/100 + 'px';
			}
			else{
				clearInterval(timerId);
			}
			setTimeout(() => { clearInterval(timerId); }, 500);
		}, 10);
  }
}



function closeInfo(){
    openInfo = false;
    document.getElementById('info').style.display = 'none';
    document.getElementsByClassName('plus')[0].style.display = 'block';
    document.getElementById('map').style.display = 'block';
}
