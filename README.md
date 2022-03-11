# Start project
Start mongodb container
```bash
docker run -d -p 2717:27017  --name mymongo mongo:latest  
```
Start api
```bash
cd api && npm run dev
```