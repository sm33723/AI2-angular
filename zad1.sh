#!/bin/sh

curl localhost:32723/todos && echo

curl \
-X POST \
-H "Content-Type: application/json" \
-d '{"title":"Hello World!","deadline":"2023-12-31","completed":false,"archived":false}' \
localhost:32723/todos && echo

curl \
-X PUT \
-H "Content-Type: application/json" \
-d '{"id":2,"title":"Hello Again World","deadline":"2000-01-01","completed":true,"archived":false}' \
localhost:32723/todos/2 && echo

curl \
-X PUT \
-H "Content-Type: application/json" \
-d '{"id":3,"title":"Hello World!","deadline":"2023-12-31","completed":false,"archived":true}' \
localhost:32723/todos/3 && echo