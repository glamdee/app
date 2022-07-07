db.getCollection("tokensdev").find({"$and":[{"chainId":1},{"$or":[{"$and":[{"symbol":"UNI-V2"},{"name":"Uniswap V2"}]},{"$and":[{"symbol":"Cake-LP"},{"name":"Pancake LPs"}]}]}]})
