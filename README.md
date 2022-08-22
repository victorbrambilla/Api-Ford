# Clean node api

## Contruída com as seguintes tecnologias:
- [x] Node 
- [x] Typescript 
- [x] Prisma
- [x] Clean architecture 

 
## Instalando as dependências

Faça um clone do projeto e no diretório raiz do projeto rode o comando:

```
npm install
```

```
npx prisma generate
```
### Rodando servidor

No diretório raiz do projeto rode o comando:

```
npm run dev
```

## Endpoint GET /movies

Exemplo de requisição 
```http
GET http://localhost:8000/movies
```

* Request Body


```json
{	
	"filter":{
		"years":[],
		"genre":["Adventure","Musical"]
	} 
}
```

* Response Body: 200

```json
[
	{
		"id": 1,
		"movie_title": "Pinocchio",
		"release_date": "2/9/1940",
		"genre": "Adventure",
		"total_gross": 84300000,
		"inflation_adjusted_gross": -2106738244
	},
	{
		"id": 2,
		"movie_title": "Pinocchio",
		"release_date": "2/9/1940",
		"genre": "Adventure",
		"total_gross": 84300000,
		"inflation_adjusted_gross": -2106738244
	},
	{
		"id": 3,
		"movie_title": "Snow White and the Seven Dwarfs",
		"release_date": "12/21/1937",
		"genre": "Musical",
		"total_gross": 184925485,
		"inflation_adjusted_gross": 184925485
	},
  ]
```


## Endpoint GET /filters

Exemplo de requisição 
```http
GET http://localhost:8000/filters
```


* Response Body: 200

```json
{
	"years": [
		"1940",
		"1937",
		"1946",
		"1950",
		"1954",
		"1955",
		"1959",
		"1961",
		"1962",
		"1963",
		"1967",
	],
	"genres": [
		"Adventure",
		"Musical",
		"Drama",
		"Comedy",
		"Action",
		"Horror",
		"Romantic Comedy",
		"Thriller/Suspense",
		"Western",
		"Black Comedy",
		"Documentary",
		"Concert/Performance"
	]
}
```
