import React, { FC, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import { Header } from '../components/molecules/Header/Header';
import { Card } from '../components/atoms/Card/Card';
import { Graf } from '../components/molecules/Graf/Graf';

import { IGlossaryItem } from '../interfaces/glossary-item.interface';
import { ILink } from '../interfaces/link.interface';

import './Main.css';
import { test } from '../resources/test';

export const Main: FC = () => {

  const [data, setData] = useState<IGlossaryItem[]>([])

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const response = await fetch('http://localhost:8500/AllTerms');
        if (!response.ok) {
          throw new Error('Failed to fetch documents');
        }
        const data = await response.json();
        setData(data);
        console.log(data)
      } catch (err) {
        console.log('ERROR DURING DATA RECIEVE')
      } finally {
        console.log('FINALLY!')
      }
    }

    fetchDocuments();
  }, []);

  const conceptToIdMap = Object.fromEntries(test.map(item => [item.term, item.id]));

  const relations = test.flatMap(parent =>
    parent.childs?.map(child => ({
      target: parent.id,
      source: conceptToIdMap[child.child] || '',
      relation: child.relation
    }))
  );

  return (
    <div className="mainContainer">
      <Header />
      <Routes>
        <Route
          path="/glossary"
          element={
            <div className="contentBlock">
              {test.map(item => <Card id={item.id} term={item.term} definition={item.definition} source={item.source} />)}
            </div>
          }
        />
        <Route
          path="/semantic-graph"
          element={
            <div className="contentBlock">
              <Graf terms={test} relations={relations as ILink[]} />
            </div>
          }
        />
        <Route
          path="/*"
          element={
            <Navigate to="/glossary" />
          } />
      </Routes>
    </div>
  );
}