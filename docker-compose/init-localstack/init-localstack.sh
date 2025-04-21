#!/bin/bash
awslocal secretsmanager create-secret \
  --name atm-locations/dev/mongo-credentials \
  --secret-string '{"host":"localhost","port":"27017","username":"atm-user","password":"secret"}'
