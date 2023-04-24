#!/bin/bash

# Get the commit message from the command line
read -p "Enter commit message: " message

# Add all changes to the staging area
git add -A

# Commit the changes with the provided message
git commit -m "$message"

# Push the changes to the remote repository
git push
