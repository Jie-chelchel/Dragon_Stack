#!/bin/bash

echo "Configuring dragonsdb"

dropdb -U node_user dragonsdb
createdb -U node_user dragonsdb

psql -U node_user dragonsdb < ./bin/sql/generation.sql
psql -U node_user dragonsdb < ./bin/sql/dragon.sql


echo "dragonsdb configured"
