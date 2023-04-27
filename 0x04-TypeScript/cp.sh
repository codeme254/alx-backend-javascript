#!/bin/bash
read -p "Enter the destination folder: " folder


# package.json, .eslintrc.js, tsconfig.json, webpack.config.js
cp package.json "$folder"
cp .eslintrc.js "$folder"
cp tsconfig.json "$folder"
cp webpack.config.js "$folder"