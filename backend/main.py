import os
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient

from typing import List
from pydantic import BaseModel

class ChildTerm(BaseModel):
    child: str
    relation: str

class Term(BaseModel):
    term: str
    definition: str
    source: str
    childs: List[ChildTerm]

class BaseResponse(BaseModel):
    status: int
    message: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

mongoURL = os.getenv('MONGOURL', 'mongodb://localhost:27017')
client = MongoClient(mongoURL)
database = client['diplomGlossary3']
collection = database['glossary']

# Автор
@app.get('/author')
async def author():
    return {'author': 'Karandasheva Nadezhda'}

# Весь глоссарий
@app.get('/AllTerms')
async def fullGlossary():
    documents = collection.find()
    responseDocument = []
    for document in documents:
        responseDocument.append({
            'id': str(document['_id']),
            'term': document['term'],
            'definition': document['definition'],
            'source': document['source'],
            'childs': document['childs']
        })
    return JSONResponse(content=responseDocument)

# Конкретный термин
@app.get('/term/{termName}')
async def concept(termName):
    termName = termName.lower()
    document = collection.find_one({'term': termName})
    if document:
        termName = termName.capitalize()
        return Term(
            term = termName,
            definition = document['definition'],
            source = document['source'],
            childs = document['childs']
        )
    else:
        print(404)
        return BaseResponse(
            status=404,
            message=f'[{termName.capitalize()}] does not exists in dictionary.'
        )