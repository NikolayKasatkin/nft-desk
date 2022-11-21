# Copyright (c) Aptos
# SPDX-License-Identifier: Apache-2.0

import json

from aptos_sdk.account import Account
from aptos_sdk.account_address import AccountAddress
from aptos_sdk.client import FaucetClient, RestClient

from .common import NODE_URL

def check_ownership(owner_address, creator_address, collection_name, token_name):
    owner_address = AccountAddress.from_hex(owner_address)
    creator_address = AccountAddress.from_hex(creator_address)

    rest_client = RestClient(NODE_URL)
    property_version = 0

    balance = rest_client.get_token_balance(owner_address, creator_address, collection_name, token_name, property_version)
    rest_client.close()
    if balance != '0':
        return True
    else:
        return False


if __name__ == "__main__":
    owner_address = AccountAddress.from_hex('eec49243da035f0a95e172e0f43bb7df387d4396098b4ae01d648c82ed6b34bb')
    creator_address = AccountAddress.from_hex('75f6cfb05fd9e887912c1906356850cf4bfc70b7eda36edd7aa59f891d7a7be9')
    collection_name = "nft desk"
    token_name = "1"

    print(check_ownership(owner_address, creator_address, collection_name, token_name))
