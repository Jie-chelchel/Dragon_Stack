CREATE TABLE dragon(
  id               SERIAL PRIMARY KEY,
  birthdate        TIMESTAMP NOT NULL,
  nickname         VARCHAR(64),
  "generationId"   INTEGER,
  FOREIGN KEY ("generationID") REFERENCES generation(id)
);

-- sql is not case sensitive, envn you have generationId, sql will not 
--recognize that I, if you use " double quotes" on that genterationId, you force it 
--to use the camercase.

-- the final row in the schema will created the associative line between the dragon and generatin tables.
-- the FOREIGN Key in this table will identify the primary key of another one. 
-- in this case, it is the generationId. here the genereationID refers to the id in generation table. 
