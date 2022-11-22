from aptos_sdk.account_address import AccountAddress
from aptos_sdk.client import RestClient

from .common import NODE_URL

def get_token(owner: AccountAddress, token_id):
        rest_client = RestClient(NODE_URL)
        token_store_handle = RestClient.account_resource(rest_client, owner, f"{owner}::minting::ModuleData")['data']['tokens_name']
        return token_id in token_store_handle

if __name__ == "__main__":
    token_id = '1'
    address= '0x1932569b5429a7f30e62de0bd4af8dbdba914e490577ad65d9c7f8fdb7a67dff'

    print(get_token(address, token_id))
