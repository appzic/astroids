#!/bin/bash

version=$(cat package.json | jq -r '.version')

npm run build &&\
npm pack &&\
echo "Hello, astro!"
cd example &&\
npm uninstall astroids &&\
npm i -D ../astroids-$version.tgz &&\
npm i &&\
npm run build &&\
npm run dev