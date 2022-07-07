db.getCollection("tokensdev").find({"$or":[{"chainId":1},{"$or":[{"$and":[{"symbol":"UNI-V2"},{"name":"Uniswap 
V2"}]},{"$and":[{"symbol":"Cake-LP"},{"name":"Pancake LPs"}]}]}]})
#new comment in development branch#
#extra comment from fix#
