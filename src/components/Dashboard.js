import React from "react";
import { Link } from "react-router-dom";
import stocks from "./Data";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">All Stocks</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.symbol} className="stock-link">
              <td>
                <Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link>
              </td>
              <td>{stock.lastPrice}</td>
              <td
                className={`change ${
                  stock.change >= 0 ? "positive" : "negative"
                }`}
              >
                {stock.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
