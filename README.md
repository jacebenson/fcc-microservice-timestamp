
How to build the docs;

```
# if apidoc isn't installed
# npm install apidoc -g
apidoc -i app/routes/ -o public/
```

How to test this locally;
```
git clone git@gitlab.com:jacebenson/fcc-microservice-timestamp.git
cd fcc-microservice-timestamp
npm install
node index.js
```

```
#call it with curl
curl http://localhost:5000/api/Jan 10, 2999
curl http://localhost:5000/api/500000
```