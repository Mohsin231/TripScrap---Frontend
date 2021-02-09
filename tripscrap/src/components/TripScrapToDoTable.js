import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';


export default function TripScrapToDoTable() {

    return (
      <div>
        <Table bordered hover className="table-todo">
          <thead>
            <tr>
              <th>Tripscrap Todo:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>tripscrap todo placeholder!</td>
            </tr>
            <tr>
              <td>tripscrap todo placeholder!</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
}
